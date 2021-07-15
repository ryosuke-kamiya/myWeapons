<?php get_header(); ?>
<?php
$taxonomy_tag = $_GET['taxonomy'];

//表示件数
$current_page = get_query_var('paged') == 0 ? '1' : get_query_var('paged'); //現在のページ
$current_show = strval(($current_page - 1) * 10 + 1);
$max_count = get_option('posts_per_page');

if ($taxonomy_tag) {
    $tax_query[] = array(
        'reration' => 'AND',
        array(
            'taxonomy' => 'new',
            'terms' => $taxonomy_tag,
            'include_children' => false,
            'field' => 'slug',
            'operator' => 'AND',
        )
    );
}
?>
<?php
query_posts(
    array(
        'paged' => $current_page,
        'post_type' => 'custompost',
        'tax_query' => $tax_query,
        's' => $s,
        'date_query' => array(
            array(
                'inclusive' => true,
                'after' => $new
            ),
        ),
    )
);
?>
<section>
    <h1>一覧</h1>
    <?php if (have_posts()) : ?>
    <p class="result">
        <?php if ($wp_query->found_posts < $current_page * $max_count) : ?>
        <?php echo strval($wp_query->found_posts); ?>/<?php echo $wp_query->found_posts; ?>
        <?php else : ?>
        <?php echo strval($current_show + $max_count - 1); ?>/<?php echo $wp_query->found_posts; ?>
        <?php endif; ?>
    </p>
    <div>
        <?php get_sidebar() ?>
        <div>
            <?php while (have_posts()) : the_post(); ?>
            <div>
                <div>
                    <a
                        href="<?php the_permalink(); ?>?<?php echo $_SERVER['QUERY_STRING']; ?>"><?php the_title(); ?></a>
                    <p>
                        <?php echo get_the_content(); ?>
                    </p>
                    <div>
                        <div>タクソノミー</div>
                        <ul>
                            <?php
                                    $terms = wp_get_post_terms(get_the_id(), 'taxonomy', array('orderby' => 'term_order'));
                                    foreach ($terms as $term) :
                                    ?>
                            <li><?php echo htmlspecialchars($term->name); ?></li>
                            <?php
                                    endforeach;
                                    ?>
                        </ul>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
            <?php
                if (function_exists('pagination')) {
                    pagination();
                } ?>
        </div>
    </div>
    <?php else : ?>
    <p>0/0</p>
    <div>
        <?php get_sidebar() ?>
    </div>
    <?php endif;
    wp_reset_query(); ?>
</section>
<?php get_footer(); ?>