import React, { createContext, useState, ReactNode } from "react";

type ContextType = {
  modal: ReactNode;
  setModal: React.Dispatch<React.SetStateAction<ReactNode>>;
};

export const ModalContext = createContext({} as ContextType);

type Props = {
  children?: ReactNode;
};

export const ModalProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [modal, setModal] = useState<ReactNode>(null);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default { ModalContext, ModalProvider };
