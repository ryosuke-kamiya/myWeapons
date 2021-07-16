import React from "react";
import { useLoadingPage } from "~/hooks";
import styles from "./style.module.scss";

const LoadingPage = (): React.ReactElement | null => {
  const { loadingPage } = useLoadingPage();

  return loadingPage ? (
    <div className={styles.loading}>
      <img
        className={styles.loadingIcon}
        src="/images/vercel.svg"
        alt="loading"
      />
    </div>
  ) : null;
};

export { LoadingPage };
