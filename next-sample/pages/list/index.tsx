import React from "react";
import styles from "./style.module.scss";
import { Tab, List } from "@/organisms";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Props = {
  List1: {
    total: number;
    list: [
      {
        title: string;
        text: string;
      }
    ];
  };
  List2: {
    total: number;
    list: [
      {
        title: string;
        text: string;
      }
    ];
  };
};

export default function ListPage({ List1, List2 }: Props): React.ReactElement {
  const router = useRouter();
  let list;

  if (router.query.page == "0") {
    list = List1;
  } else if (router.query.page == "1") {
    list = List2;
  } else {
    list = List1;
  }

  return (
    <React.Fragment>
      <div className={styles.list}>
        <Tab tabList={["タブ１", "タブ２"]} />
        <List lists={list} />
      </div>
    </React.Fragment>
  );
}

//SSRじゃないとクエリを読み込んでくれない。
export const getServerSideProps: GetServerSideProps = async (context) => {
  //仮指定
  const List1 = {
    list: [
      {
        text: "text",
        title: "title",
      },
    ],
    total: 0,
  };

  const List2 = {
    list: [
      {
        text: "text2",
        title: "title2",
      },
    ],
    total: 0,
  };

  return {
    props: {
      List1,
      List2,
    },
  };
};
