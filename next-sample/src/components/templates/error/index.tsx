import React from "react";
import styles from "./style.module.scss";
import { Button } from "@/atoms";
import Router from "next/router";

export type ErrorProps = {
  text: string;
};

const ErrorTemp: React.FC<ErrorProps> = (props) => {
  const { text } = props;
  const onClick = () => {
    Router.push("/");
  };
  return (
    <React.Fragment>
      <div className={styles.error}>
        <p className={styles.errorText}>{text}</p>
        <div className={styles.button}>
          <Button color="green" label="TOPに戻る" onClick={onClick} />
        </div>
      </div>
    </React.Fragment>
  );
};
export { ErrorTemp };
