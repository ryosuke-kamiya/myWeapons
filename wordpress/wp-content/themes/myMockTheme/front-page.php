<?php get_header(); ?>
<main>
    <section id="custompost">
        <div class="lists">
            <h2 class="section-title">サブループ</h2>
            <?php
            $list_args = array(
                'post_type'      => 'custompost',
                'posts_per_page' => 5,
            );
            $list_query = new WP_Query($list_args);
            ?>
            <?php if ($list_query->have_posts()) : ?>
                <?php while ($list_query->have_posts()) : $list_query->the_post(); ?>
                    <div>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

                        <p>
                            <?php echo get_the_content(); ?>
                        </p>

                        <div>
                            <div>タクソノミーはこちら↓
                            </div>
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
                <?php endwhile; ?>
            <?php endif; ?>
            <?php wp_reset_postdata(); ?>
        </div>
        <a class="list-more" href="/custompost">もっと見る</a>
    </section>
</main>
<?php get_footer(); ?>
