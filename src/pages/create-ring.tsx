import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import AppLayout from "@/layout/app-layout";
import RingForm from "@/components/ring-form";

export default function CreateRingPage() {
  const navigate = useNavigate();

  return (
    <AppLayout.Root>
      <AppLayout.Header className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-lotr-shadow">
          Create Ring
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
        <RingForm />
      </AppLayout.Main>
      <AppLayout.Footer />
    </AppLayout.Root>
  );
}
