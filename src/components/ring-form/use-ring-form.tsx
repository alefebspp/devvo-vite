import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { isAxiosError } from "axios";

import { createRingSchema, CreateRingFormData } from "./schema";
import { ForgedBy, Ring } from "@/types/ring";
import useRings from "@/hooks/use-rings";

type Props = {
  ring?: Ring;
};

const defaultValues = {
  name: "",
  power: "",
  carrier: "",
  forgedBy: "",
  imageUrl: "",
};

export default function useRingForm({ ring }: Props) {
  const form = useForm<CreateRingFormData>({
    resolver: zodResolver(createRingSchema),
    defaultValues: ring ? { ...ring } : defaultValues,
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    useCreateRing,
    useUpdateRing,
    getGetRingsQueryKey,
    getGetRingQueryKey,
  } = useRings();

  const { mutateAsync: createRing, isPending: creatingRing } = useCreateRing({
    mutation: {
      onSuccess: () => {
        return queryClient.invalidateQueries({
          queryKey: getGetRingsQueryKey(),
        });
      },
    },
  });

  const { mutateAsync: updatedRing, isPending: updatingRing } = useUpdateRing({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getGetRingQueryKey(ring?.id || ""),
        });
        return queryClient.invalidateQueries({
          queryKey: getGetRingsQueryKey(),
        });
      },
    },
  });

  async function onSubmit(values: CreateRingFormData) {
    try {
      const data = {
        ...values,
        forgedBy: values.forgedBy as ForgedBy,
      };

      const toastMessage = `Successfully ${ring ? "updated" : "created"} ring`;

      if (ring) {
        await updatedRing({ id: ring.id, data });
      } else {
        await createRing({ data });
      }

      toast.success(toastMessage);

      if (!ring) {
        navigate("/");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          return toast.error(error.response.data.error.message);
        }
      }
      toast.error("Server error");
    }
  }

  return {
    form,
    onSubmit,
    isPending: creatingRing || updatingRing,
  };
}
