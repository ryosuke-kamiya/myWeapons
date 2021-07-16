import React, { useEffect, useState } from "react";
import { useModal } from "~/hooks";
import styles from "./style.module.scss";

const Modal = (): React.ReactElement | null => {
  const { modal, setModal } = useModal();

  const closeModal = () => setModal(null);

  const [topPosition, setTopPosition] = useState(Number);

  useEffect(() => {
    if (modal) {
      if (!document.body.classList.contains(styles.bodyFixed)) {
        setTopPosition(document.documentElement.scrollTop);
        document.body.style.top = -document.documentElement.scrollTop + "px";
        document.body.classList.add("bodyFixed");
      }
    } else {
      document.body.classList.remove("bodyFixed");
      document.body.style.top = "";
      document.documentElement.scrollTop = topPosition;
    }
  }, [modal]);

  return modal ? (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBackground} onClick={closeModal}></div>
      <div className={styles.modal}>{modal}</div>
    </div>
  ) : null;
};

export { Modal };
