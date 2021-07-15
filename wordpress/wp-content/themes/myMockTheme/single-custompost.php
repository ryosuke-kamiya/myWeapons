<?php get_header(); ?>
<section>
    <?php while (have_posts()) : the_post(); ?>
        <div>
            <h1><?php the_title(); ?></h1>
            <?php echo get_the_content(); ?>
            <a href="/custompost">一覧へ戻る</a>
        </div>
    <?php endwhile; ?>
</section>
<?php get_footer(); ?>
