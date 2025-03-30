import RingCarousel from "@/components/ring-carousel";

import AppLayout from "@/layout/app-layout";
import Loading from "@/components/loading";
import useHomePage from "@/hooks/use-home-page";
import DeleteRingAlert from "@/components/delete-ring-alert";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const {
    alertIsOpen,
    toDeleteRing,
    handleOnOpenChange,
    navigate,
    useGetRings,
  } = useHomePage();

  const { data, isLoading } = useGetRings();

  const rings = data?.rings || [];

  return (
    <AppLayout.Root>
      <DeleteRingAlert
        isOpen={alertIsOpen}
        onOpenChange={handleOnOpenChange}
        ring={toDeleteRing}
      />
      <AppLayout.Header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-lotr-shadow">
          The Rings of Power
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto">
          Three Rings for the Elven-kings under the sky, Seven for the
          Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to
          die, One for the Dark Lord on his dark throne.
        </p>

        <Button
          onClick={() => navigate("/create")}
          className="font-display h-12 w-2xs text-base duration-300 text-lotr-shadow hover:text-lotr-shadow/50 mt-4 border border-lotr-gold/20 bg-ring-inscription"
        >
          Forge a New Ring
        </Button>
      </AppLayout.Header>
      <AppLayout.Main>
        <section>
          <h2 className="text-3xl pb-8 md:pb-16 font-display text-center mb-6 text-lotr-shadow">
            {rings.length ? "Collection of Rings" : "No Rings in Collection"}
          </h2>
          {isLoading ? <Loading /> : <RingCarousel rings={rings} />}
        </section>
      </AppLayout.Main>
      <AppLayout.Footer />
    </AppLayout.Root>
  );
}
