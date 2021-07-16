import React from "react";
import styles from "./style.module.scss";
import { useModal } from "~/hooks";

export type LogoutModalProps = {
  nextLabel: string;
  onClick: any;
};

export const ConfirmModal: React.FC<LogoutModalProps> = (props) => {
  const { nextLabel, onClick } = props;
  const { setModal } = useModal();

  const onNext = () => {
    onClick();
    setModal(null);
  };

  return (
    <div className={styles.confirmModal}>
      <div className={styles.buttonWrapper}>
        <div className={styles.cancel} onClick={() => setModal(null)}>
          キャンセル
        </div>
        <div className={styles.logout} onClick={onNext}>
          {nextLabel}
        </div>
      </div>
    </div>
  );
};
