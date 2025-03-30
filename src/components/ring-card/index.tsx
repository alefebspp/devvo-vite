import { Edit, Trash2 } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ring } from "@/types/ring";
import useRingCard, {
  ForgedByLabelEnum,
  ForgedByLabelEnumKey,
} from "./use-ring-card";

interface RingCardProps {
  ring: Ring;
}

export default function RingCard({ ring }: RingCardProps) {
  const { handleEdit, openDeleteRingAlert } = useRingCard({ ring });

  return (
    <div className="w-full max-w-sm px-4 transition-all duration-300 transform hover:scale-[1.02]">
      <Card className="overflow-hidden bg-gradient-to-b from-lotr-parchment to-white border-lotr-gold/30 ring-card-shadow">
        <div className="relative pt-[100%] overflow-hidden bg-lotr-parchment/50">
          <img
            src={ring.imageUrl}
            alt={ring.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h2 className="absolute truncate bottom-4 left-0 right-0 text-center text-xl text-white font-display font-semibold px-4 text-shadow-gold">
            {ring.name}
          </h2>
        </div>

        <CardContent className=" space-y-4">
          <div className="space-y-3 text-start">
            <InfoItem label="Power" value={ring.power} />
            <InfoItem label="Carrier" value={ring.carrier} />
            <InfoItem
              label="Forged By"
              value={ForgedByLabelEnum[ring.forgedBy as ForgedByLabelEnumKey]}
            />
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0 flex justify-between gap-4">
          <Button
            variant="outline"
            className="flex-1 border-lotr-darkgold/70 hover:border-lotr-gold text-lotr-darkgold hover:text-lotr-gold hover:bg-lotr-darkgold/5 button-hover-effect"
            onClick={handleEdit}
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>

          <Button
            variant="outline"
            className="flex-1 border-red-700/50 hover:border-red-700 text-red-700/70 hover:text-red-700 hover:bg-red-700/5 button-hover-effect"
            onClick={openDeleteRingAlert}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-sm font-medium text-lotr-darkgold mb-1 font-display">
      {label}
    </div>
    <div className="text-base text-gray-700 truncate">{value}</div>
  </div>
);
