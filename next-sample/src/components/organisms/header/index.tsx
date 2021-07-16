import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";

export const Header: React.FC = () => (
  <header>
    <div className={styles.wrapper}>
      <Link href="/">
        <a>
          <h1>ヘッダー</h1>
        </a>
      </Link>
    </div>
  </header>
);
