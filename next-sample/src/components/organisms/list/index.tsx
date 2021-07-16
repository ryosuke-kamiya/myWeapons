import React from "react";
import styles from "./style.module.scss";
import Router from "next/router";

export type ListProps = {
  lists: {
    list: [
      {
        title: string;
        text: string;
      }
    ];
    total: number;
  };
};

export const List: React.FC<ListProps> = (props) => {
  const { lists } = props;

  const itemClick = (title: string) => {
    Router.push(`./list/detail/${title}`); //nextの[id]をつかって分岐
  };

  return (
    <div className={styles.list}>
      <ul>
        {lists.list.map((data, index) => {
          return (
            <li
              className={styles.listWrapper}
              key={index}
              onClick={() => itemClick(data.title)}
            >
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.text}>{data.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
