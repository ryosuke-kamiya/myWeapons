<?php

// テーマカスタマイザーの無効化
function mytheme_customize_register($wp_customize)
{
  // 「サイト基本情報」を削除
  $wp_customize->remove_section("title_tagline");
  // 「色」を削除
  $wp_customize->remove_section("colors");
  // 「ヘッダー画像」を削除
  $wp_customize->remove_section("header_image");
  // 「背景画像」を削除
  $wp_customize->remove_section("background_image");
  // 「ホームページ設定」を削除
  $wp_customize->remove_section("static_front_page");
  // 「追加CSS」を削除
  $wp_customize->remove_section("custom_css");

  // 「メニュー」を削除
  $wp_customize->remove_panel("nav_menus");
  // 「ウィジェット」を削除
  $wp_customize->remove_panel("widgets");
}
add_action('customize_register', 'mytheme_customize_register', 11);

add_theme_support('title-tag');

/* ===================================================================================================================
/*【管理画面】メニューを非表示
=================================================================================================================== */
function remove_menus()
{
  remove_menu_page('edit.php'); // 投稿を非表示
  remove_menu_page('edit-comments.php'); // コメントを非表示
}
add_action('admin_menu', 'remove_menus');

/* ===================================================================================================================
 * JSファイル、styleファイルの読み込み
=================================================================================================================== */

function js_style_loader()
{
  wp_enqueue_script('jquery');
  wp_enqueue_script('main.js', get_template_directory_uri() . '/assets/js/main.js', [], false, true);
  wp_enqueue_style('style.css', get_stylesheet_uri());
  wp_enqueue_style('main.css', get_template_directory_uri() . '/assets/css/main.css');
  if (is_front_page()) { // TOPページ
    wp_enqueue_style('top.css', get_template_directory_uri() . '/assets/css/top.css');
  } elseif (is_archive() || is_search()) {
    wp_enqueue_style('archive.css', get_template_directory_uri() . '/assets/css/archive.css');
    wp_enqueue_script(
      'archive.js',
      get_template_directory_uri() . '/assets/js/archive.js',
      [],
      false,
      true
    );
  } elseif (is_single()) {
    wp_enqueue_style('single.css', get_template_directory_uri() . '/assets/css/single.css');
  } elseif (is_page('privacy-policy')) {
    wp_enqueue_style('privacy-policy.css', get_template_directory_uri() . '/assets/css/privacy-policy.css');
  } elseif (is_page() || is_404()) {
    wp_enqueue_style('404.css', get_template_directory_uri() . '/assets/css/404.css');
  }
  //get_template_directory_uri 有効化している テンプレート ディレクトリの URI を取得する。SSL が存在するかチェックする。

}
add_action('wp_enqueue_scripts', 'js_style_loader'); //第１引数をフック、第２引数が関数名。フックのタイミングで発火する。
// wp_enqueue_scripts – サイト公開側に読み込む場合に使用するフックです。
// login_enqueue_scripts – ログイン画面に読み込む場合に使用するフックです。
// admin_enqueue_scripts – 管理画面に読み込む場合に使用するフックです。

function my_admin_style()
{
  // グローバル変数を参照できるようにする
  global $pagenow;
  if ($pagenow === 'admin.php') {
    wp_enqueue_style('style.css', get_stylesheet_uri());
    wp_enqueue_style('original.css', get_template_directory_uri() . '/assets/css/original.css');
  }
}
add_action('admin_print_styles', 'my_admin_style');

//更新通知を管理者権限のみに表示
function update_nag_admin_only()
{
  if (!current_user_can('administrator')) {
    remove_action('admin_notices', 'update_nag', 3);
  }
}
add_action('admin_init', 'update_nag_admin_only');

/* ===================================================================================================================
 * 管理画面に新規ページ追加
=================================================================================================================== */
function original_page()
{
  add_menu_page('オリジナルページ', 'オリジナルページ', 'manage_options', 'original_page', 'original', 'dashicons-edit', 4);
}
add_action('admin_menu', 'original_page');
function original()
{
  include 'original_menu.php';
}
/* ===================================================================================================================
 * 基本的な機能の追加/変更
=================================================================================================================== */

add_theme_support('post-thumbnails'); // サムネイルが使えるようにする

/* ---------------------------------------------
* デフォルトのカテゴリ機能を削除
------------------------------------------------*/
function my_unregister_taxonomies()
{
  global $wp_taxonomies;
  if (!empty($wp_taxonomies['category']->object_type)) {
    foreach ($wp_taxonomies['category']->object_type as $i => $object_type) {
      if ($object_type == 'post') {
        unset($wp_taxonomies['category']->object_type[$i]);
      }
    }
  }
}
add_action('init', 'my_unregister_taxonomies');
/* ---------------------------------------------
* カスタム投稿タイプ追加
------------------------------------------------*/
function init_func()
{
  $name = 'カスタム投稿';
  register_post_type('custompost', [
    'labels' => [
      'name' => $name,
      'singular_name' => $name,
      'add_new' => _x($name . '追加', $name),
      'add_new_item' => $name . 'の新規追加',
      'edit_item' => $name . 'の編集',
      'new_item' => '新規' . $name,
      'view_item' => $name . 'を表示',
      'search_items' => $name . 'を検索',
      'not_found' => $name . 'が見つかりませんでした',
      'not_found_in_trash' => 'ゴミ箱に' . $name . 'は見つかりませんでした',
      'all_items' => $name . '一覧'
    ],
    'public' => true,
    'has_archive' => true,
    'hierarchical' => false,
    'supports' => [
      'title',
      'editor',
      'page-attributes',
      'thumbnail'
    ],
    'menu_position' => 5,
    'show_in_rest' => false,
  ]);
}
add_action('init', 'init_func');
/* ---------------------------------------------
カスタムタクソノミーの追加
------------------------------------------------*/

function taxonomy_init()
{
  register_taxonomy('taxonomy', 'custompost', [
    'labels' => [
      'name' => 'カスタムタクソノミー',
    ],
    'hierarchical' => true, //trueだとカテゴリ。falseだとタグ
  ]);
}
add_action('init', 'taxonomy_init');

/* ---------------------------------------------
* 親カテゴリー削除
------------------------------------------------*/
add_action('post_edit_category_parent_dropdown_args', function ($args) {
  $args['echo'] = false;
  return $args;
});

/* ---------------------------------------------
* カスタムタクソノミーの表示
------------------------------------------------*/
function add_taxonomy_column($defaults)
{
  $defaults['taxonomy'] = 'カスタムタクソノミー';
  return $defaults;
}
add_filter('manage_posts_columns', 'add_taxonomy_column');

function add_custom_column_id($column_name, $id)
{
  if ($column_name == 'taxonomy') {
    $terms = get_the_terms($id, $column_name);
    $term_lists = array();
    foreach ($terms as $term) {
      $term_lists[] = '<a href="' . admin_url() . 'edit.php?post_type=' . get_post_type() . '&' . $column_name . '=' . $term->slug . '">' . $term->name . '</a>';
    }
    $term_list = join(", ", $term_lists);
    echo $term_list;
  }
}
add_action('manage_posts_custom_column', 'add_custom_column_id', 10, 2);

/* ---------------------------------------------
* ページネーション
------------------------------------------------*/
function pagination($pages = '', $range = 3)
{
  global $paged;
  if (empty($paged)) {
    $paged = 1;
  }
  if ($pages == '') {
    global $wp_query;
    $pages = $wp_query->max_num_pages;
    if (!$pages) {
      $pages = 1;
    }
  }
  /* ===  表示するページ数設定 === */
  if ($paged == 1 || $paged == $pages) {
    $range = 7;
  }
  if ($paged == 2 || $paged == $pages - 1) {
    $range = 6;
  }
  echo '<div class="pagination-wrapper">';
  echo '<ol class="pagination">';
  /* === prevボタン === */
  if ($paged > 1) {
    echo '<li class="pagination-prev hover-opacity"><a href=' . get_pagenum_link($paged - 1) . ' class="pagination-link" aria-label="prev"></a></li>';
  } elseif ($pages != 1 && $paged > 1) {
    echo '<li class="pagination-prev"></li>';
  }
  /* === ページ数 === */
  for ($i = 1; $i <= $pages; ++$i) {
    if ((!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems)) {
      echo ($paged == $i) ? '<li class="current"><span class="pagination-link">' . $i . '</span></li>' :
        '<li><a href=' . get_pagenum_link($i) . ' class="pagination-link hover-opacity">' . $i . '</a></li>';
    }
  }
  /* === nextボタン === */
  if ($paged < $pages) {
    echo '<li class="pagination-next hover-opacity"><a href=' . get_pagenum_link($paged + 1) . ' class="pagination-link hover-opacity" aria-label="next"></a></li>';
  } elseif ($pages != 1 && $paged < $pages) {
    echo '<li class="pagination-next"></li>';
  }
  echo '</ol>';
  echo '</div>';
}

/* ---------------------------------------------
* 表示件数の調整
------------------------------------------------*/
function my_pre_get_posts($query)
{
  if (is_admin() || !($query->is_main_query() || $query->is_search())) return;
  if ($query->is_archive() || $query->is_search()) {
    $query->set('posts_per_page', '10');
  }
}
add_action('pre_get_posts', 'my_pre_get_posts');