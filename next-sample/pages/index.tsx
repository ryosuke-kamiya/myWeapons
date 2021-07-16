import Head from "next/head";
import { Button } from "@/atoms";
// import { GetStaticProps } from 'next'
import styles from "./style.module.scss";
// import { useModal } from '~/hooks'
import React from "react";
import Router from "next/router";
import { Footer, Header } from "~/components/organisms";

export default function Home(): React.ReactElement {
  // const { setModal } = useModal()
  // useEffect(() => {//mock
  // 	setModal(true)
  // 	console.log('useEffect')
  // })

  const onClick = () => {
    Router.push("/list?page=0");
  };

  return (
    <div>
      <Header />
      <Head>
        {/* ページごとにヘッドタグを設定できる */}
        <title>siteTitle</title>
      </Head>
      <section className={styles.LP}>LP TEST8</section>
      <Button color="green" label="一覧へ" onClick={onClick} />
      <Footer />
    </div>
  );
}

// //ページをビルドする前にデータを取ってくるでー//static generation
// export const getStaticProps: GetStaticProps = async context => {
//   const allPostsData = getSortedPostsData()//一覧の配列
//   return {
//     props: {//propsの値をオブジェクト型で返す
//       allPostsData
//     }
//   }
// }
// //サーバーサイドレンダリングの場合はこう書く
// // export const getServerSideProps: GetServerSideProps = async context => {
// //   return{
// //     props: {
// //       //コンポーネントに渡すためのprops
// //     }
// //   }
// // }
