import React from "react";
import styles from "./style.module.scss";
import cx from "classnames";
import Router, { useRouter } from "next/router";

export type TabProps = {
  tabList: Array<string>;
};

export const Tab: React.FC<TabProps> = (props) => {
  const { tabList } = props;
  const router = useRouter();

  const changePage = (page: number) => {
    Router.push({
      query: {
        page: page,
      },
    });
  };

  return (
    <ul className={styles.tabWrapper}>
      {tabList.map((data, index) => {
        return (
          <li
            key={index}
            className={cx(styles.tab, {
              [styles.active]: router.query.page == String(index),
            })}
            onClick={() => changePage(index)}
          >
            {data}
          </li>
        );
      })}
    </ul>
  );
};
