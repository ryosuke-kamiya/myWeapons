import { ReactNode, useContext } from "react";
import { ModalContext } from "~/contexts";

type useModal = {
  modal: ReactNode;
  setModal: any;
};
export const useModal = (): useModal => {
  const { modal, setModal } = useContext(ModalContext);
  return { modal, setModal };
};
