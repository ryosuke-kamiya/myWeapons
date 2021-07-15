# 開発環境構築

まず[Docker Desktop](https://www.docker.com/products/docker-desktop)をインストールしてください。

ターミナルで`docker-compose up -d`を実行して、http://localhost:3001 にアクセスしてください。

停止する際は、 `docker-compose stop`を実行してください。

再度起動する場合は、`docker-compose up`を実行してください。

環境を削除する場合は、`docker-compose down`を実行してください。

管理画面の設定 → パーマリンク設定 → 投稿名 → 変更を保存
にしないとページが表示されない。

# おすすめプラグイン

[Advanced Editor Tools (旧名 TinyMCE Advanced)](https://ja.wordpress.org/plugins/tinymce-advanced/)
投稿物の装飾
[Contact Form 7](https://ja.wordpress.org/plugins/contact-form-7/)
お問い合わせフォーム
[WP Mail SMTP](https://ja.wordpress.org/plugins/wp-mail-smtp/)
SMTP 認証
[intuitive-custom-post-order](https://ja.wordpress.org/plugins/intuitive-custom-post-order/)
投稿物の表示順を並べ替える
[Advanced Custom Fields](https://ja.wordpress.org/plugins/advanced-custom-fields/)
カスタムフィールドを作成する
[WPS Hide Login](https://ja.wordpress.org/plugins/wps-hide-login/)
初期 URL を変更
[WP Maintenance Mode](https://ja.wordpress.org/plugins/wp-maintenance-mode/)
公開中のサイトをメンテナンスモードにできる

# 注意事項

カスタム投稿タイプの一覧ページや、詳細ページを作る際には、
archive-{カスタム投稿タイプの名前}.php
single-{カスタム投稿タイプの名前}.php
というファイルを作成する。
