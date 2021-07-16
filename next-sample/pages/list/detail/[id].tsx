// import Head from 'next/head'
import React, { Fragment } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import styles from "./style.module.scss";
import { Header } from "~/components/organisms";

export type DetailProps = {
  postData: {
    text: string;
    title: string;
  };
};

export default function Detail(props: {
  postData: any; //要修正
}): React.ReactElement<DetailProps> {
  const { postData } = props;

  return (
    <Fragment>
      <Header />
      <article className={styles.articleWrapper}>
        <div className={styles.article}>
          <h2 className={styles.title}>{postData.title}</h2>
          <pre className={styles.text}>{postData.text}</pre>
        </div>
      </article>
    </Fragment>
  );
}

//まずここで、どんなページを表示する可能性があるのか判断する
export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await getAllPostIds()//TODO:代わりにAPI接続
  const paths = [
    {
      params: {
        id: "title",
      },
    },
    {
      params: {
        id: "title2",
      },
    },
  ];
  return {
    paths, //この中に、これから動的で作られるurlのパスが書かれている。
    fallback: false, //そのパスに該当しない場合、つまりfalseのときは４０４を返す
  };
};

//実際にビルドする時にそのページの中身を持ってくる。
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const postData = await getPostData(params.id as string)//TODO:代わりにAPI接続
  const postData = {
    text: "テキスト１",
    title: "タイトル１",
  };
  return {
    props: {
      postData,
    },
  };
};
