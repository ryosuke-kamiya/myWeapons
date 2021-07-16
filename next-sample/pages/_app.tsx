import "~/styles/index.scss";
import { AppProps } from "next/app";
import { LoadingPageProvider, ModalProvider } from "~/contexts";
import { Modal } from "@/organisms";
import { LoadingPage } from "@/templates";
export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <LoadingPageProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <Modal />
        <LoadingPage />
      </ModalProvider>
    </LoadingPageProvider>
  );
}
//_app.jsは特殊なファイルでRouteコンポーネントをラップする。
// 全ページで共通させたいファイルを読み込む
// 全ページで共通してさせたい処理を組み込む。ログインとか
// 全ページで共通させたいレイアウトをくみ込む

//このファイルを作ったら再起動
