<?php get_header();
//表示件数
$current_page = get_query_var('paged') == 0 ? '1' : get_query_var('paged'); //現在のページ
$count = $wp_query->post_count; //表示している数
$max_count = get_option('posts_per_page'); //表示する最大数

$current_show = strval(($current_page - 1) * 10 + 1); //表示しているページの一つ目のインデックス
$current_max = strval($current_show + $count - 1); //表示しているページの最後のインデックス

// $show = $current_show . "-" . $current_max;


?>
<section>
    <h1>一覧</h1>
    <?php if (have_posts()) : ?>
    <div>
        <?php get_sidebar() ?>
        <p>
            （<?php echo $current_max; ?>/<?php echo $wp_query->found_posts; ?>）
        </p>
        <div>
            <?php while (have_posts()) : the_post(); ?>
            <div class="wrapper">
                <div>
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    <p>
                        <?php echo get_the_content(); ?>
                    </p>
                    <div class="term-wrapper">
                        <div class="term">タグ</div>
                        <ul class="term-list">
                            <?php
                                    $terms = wp_get_post_terms(get_the_id(), 'term', array('orderby' => 'term_order'));
                                    foreach ($terms as $term) :
                                    ?>
                            <li class="term"><?php echo htmlspecialchars($term->name); ?></li>
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
    <?php endif; ?>
</section>
<?php get_footer(); ?>