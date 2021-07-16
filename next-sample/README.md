This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 利用可能 script

プロジェクトディレクトリで、次を実行できます。

## `yarn dev`

Development Mode でアプリを実行します。<br>
[http://localhost:3000](http://localhost:3000)を開いてブラウザを表示します。

編集を行うと、ページがリロードされます。

## `yarn storybook`

storybook を起動します。<br>
[http://localhost:6006](http://localhost:6006)を開いてブラウザを表示します。

### storybook の構成

ファイルは作成していますが、使用していないので、使う場合は初期の設定から。→ バージョンの関係で色々面倒だったため。

マテリアルデザインをもとにディレクトリを分けています。

Atoms（原子）は、UI を構成する基礎的な要素が該当します。

Molecules（分子）は、Atoms を組み合わせて作る要素です。

Organisms（有機体）は、Atoms や Molecules、また他の Organisms を組み合わせて作る要素です。今までの Atoms や Molecules とは違い複雑な要素になります。
ヘッダーやフッターと呼ばれる要素はこの Organisms になります。

Templates は Molecules や Organisms を組み合わせて作ります。
Templates の段階ではページ内容がまだ仮となります。
Templates を言い換えるなら「ワイヤーフレーム」になります。

Pages（ページ）は、Template 内へ実際の文章や画像などが入ったものとなります。

## TypeScript

このプロジェクトでは、TypeScript を使用しています。
型定義には、`interface`と`type`を使う方法がありますが、基本的には`type`を使用していきます。

### Using 'React Hooks'

「this.setState」を置き換えるには、「useState」を使用します。

「componentDidMount」と「componentWillUnmount」を置き換えるには「useEffect」を使用します。

### Using 'Context'

「redux」は使用せず、「context」を使用します。

プロバイダーはファイルを使用する外である必要があります。

たとえば、「<SidebarProvider>」は「<Sidebar/>」の外側にある必要があります。

「Context は「Custom Hooks」で呼び出す必要があります。

「`~hooks`」および「`~/context`」ディレクトリを参照してください。

### Alias

いくつかのディレクトリを webpack エイリアスにしました。便利に使用できます。

```javascript
import { useLoadingPage } from "~/hooks";
```

`~`は`/src`ディレクトリを意味します。

```javascript
import { button } from "@/atoms";
```

`@`は`/src/components`ディレクトリを意味します。

このエイリアスは絶対ディレクトリで使用できます。

### sass

react、node-sass のようにすべての sass を index.sass にまとめて、それを各頁で import するという方法は Next の仕様上取れない。
base を全体に反映させるためには、各頁ではなく app.tsx に読み込ませる必要がある。ただしその方法は styles が機能しない。機能する方法があるなら知りたい。

sass は node-sass ではなく、sass を利用しているため、@use を使う。

### Mixin

Mixin は mixin.scss にまとめています。

`@include sp {}`のように使えます。

使用する箇所では、`@import '~/styles/color';`のようにシートを読み込んでください。

### Markup/Color

可能であれば、HEX 値を直接使用しないでください。

色はアプリ全体で一貫して管理する必要があります。

アプリに新しい色を追加する場合は、`styles/color.scss`に色を追加します。

`$red: #FF0000;`と定義して、`color: $red`のように使用できます。

使用する箇所では、`@import '~/styles/color';`のようにシートを読み込んでください。
