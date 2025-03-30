import { useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Ring } from "@/types/ring";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import useRings from "@/hooks/use-rings";
import DotsLoader from "./dots-loader";
import { useAlertContext } from "@/context/alert-context";

interface Props {
  ring?: Ring;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DeleteRingAlert({ ring, isOpen, onOpenChange }: Props) {
  const { useDeleteRing, getGetRingsQueryKey } = useRings();
  const { setAlertIsOpen, setToDeleteRing } = useAlertContext();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useDeleteRing({
    mutation: {
      onError: () => {
        toast.error("An error has occurred");
      },
      onSuccess: () => {
        toast.success("Ring has been destroyed");

        return queryClient.invalidateQueries({
          queryKey: getGetRingsQueryKey(),
        });
      },
    },
  });

  async function handleDeleteRing() {
    if (ring) {
      await mutateAsync({ id: ring.id });
      setAlertIsOpen(false);
      setToDeleteRing(undefined);
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="border-red-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-red-600">
            <Trash2 className="w-5 h-5" />
            Confirm Ring Destruction
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to destroy this ring? This action cannot be
            undone, and the ring will be lost forever.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPending}
            className="border-lotr-darkgold/30 hover:border-lotr-darkgold/50 text-lotr-darkgold"
          >
            Cancel
          </AlertDialogCancel>
          <Button
            type="button"
            disabled={isPending}
            onClick={handleDeleteRing}
            className="w-28 bg-red-600 hover:bg-red-700 text-white"
          >
            {isPending ? <DotsLoader className="!size-6" /> : "Destroy Ring"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
