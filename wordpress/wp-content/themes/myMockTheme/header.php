<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <!-- og -->
    <!-- twitter og -->
    <!-- icon -->
    <link rel="shortcut icon" id="favicon"
        href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/favicon.ico" type="image/x-icon">
    <!-- icon:iOS -->
    <link rel="apple-touch-icon"
        href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/apple-touch-icon.png" sizes="180x180">
    <!-- icon:android -->
    <link rel="icon" type="image/png"
        href="<?php echo get_template_directory_uri(); ?>/assets/img/icons/android-touch-icon.png" sizes="192x192">
    <!-- canonical -->
    <!-- noindex nofollow -->
    <?php
    if (is_404() || is_search()) {
        echo '<meta name="robots" content="noindex , nofollow" />';
    }
    ?>

    <!-- GoogleFonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_enqueue_script('jquery'); ?>
    <?php wp_head(); ?>
</head>

<body>
    <header class="header jsc-header">
        header
    </header>