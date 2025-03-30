import { useNavigate } from "react-router";
import useRings from "./use-rings";
import { useAlertContext } from "@/context/alert-context";

export default function useHomePage() {
  const { alertIsOpen, setAlertIsOpen, toDeleteRing, setToDeleteRing } =
    useAlertContext();

  const { useGetRings } = useRings();

  const navigate = useNavigate();

  function handleOnOpenChange(open: boolean) {
    if (!open && toDeleteRing) {
      setToDeleteRing(undefined);
    }

    setAlertIsOpen(open);
  }

  return {
    useGetRings,
    alertIsOpen,
    toDeleteRing,
    handleOnOpenChange,
    navigate,
  };
}
