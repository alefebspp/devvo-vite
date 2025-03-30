import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import useRings from "@/hooks/use-rings";
import Loading from "@/components/loading";
import AppLayout from "@/layout/app-layout";
import RingForm from "@/components/ring-form";

export default function EditRingPage() {
  const { id } = useParams<{ id: string }>();

  const { useGetRing } = useRings();

  const { data, error, isLoading } = useGetRing(id || "");

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-display font-bold mb-4 text-lotr-shadow">
            Ring Not Found
          </h1>
          <p className="text-gray-700 mb-6">
            The ring you are looking for does not exist or has been destroyed.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-lotr-gold hover:bg-lotr-darkgold text-white button-hover-effect"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Collection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <AppLayout.Root>
      <AppLayout.Header className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-lotr-shadow">
          Edit Ring
        </h1>
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="text-lotr-darkgold hover:text-lotr-gold hover:bg-lotr-gold/5"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Button>
      </AppLayout.Header>
      <AppLayout.Main>
        <RingForm ring={data?.data} />
      </AppLayout.Main>
      <AppLayout.Footer />
    </AppLayout.Root>
  );
}
