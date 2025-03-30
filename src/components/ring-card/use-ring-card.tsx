import { useNavigate } from "react-router";

import { useAlertContext } from "@/context/alert-context";
import { Ring } from "@/types/ring";

type Props = {
  ring: Ring;
};

export enum ForgedByLabelEnum {
  men = "Men",
  elves = "Elves",
  dwarves = "Dwarves",
  sauron = "Sauron",
}

export type ForgedByLabelEnumKey = keyof typeof ForgedByLabelEnum;

export default function useRingCard({ ring }: Props) {
  const { setAlertIsOpen, setToDeleteRing } = useAlertContext();

  const navigate = useNavigate();

  function openDeleteRingAlert() {
    setToDeleteRing(ring);
    setAlertIsOpen(true);
  }

  function handleEdit() {
    navigate(`/edit/${ring.id}`);
  }

  return {
    handleEdit,
    openDeleteRingAlert,
  };
}
