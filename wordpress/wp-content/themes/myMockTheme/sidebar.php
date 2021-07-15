<?php
$taxonomy_tag = $_GET['taxonomy']; //encodeされている配列
?>

<div>
    <div>絞り込み条件</div>
    <form method="get" id="searchform" action="<?php bloginfo('url'); ?>">
        <input type="hidden" name="s" id="s" />
        <div class="term-title">カスタムタクソノミー</div>
        <div class="term-wrapper">
            <?php
            $taxonomy_name = 'taxonomy';
            $taxonomys = get_terms($taxonomy_name);
            if (!is_wp_error($taxonomys) && count($taxonomys)) :
                foreach ($taxonomys as $taxonomy) :
            ?>
            <label class="term"><input class="term-input" type="checkbox" name="taxonomy[]"
                    value="<?php echo $taxonomy->slug; ?>"
                    <?php if (in_array($taxonomy->slug, $taxonomy_tag, true)) echo "checked" ?>><span
                    class="term-text"><?php echo $taxonomy->name; ?></span></label>
            <?php
                endforeach;
            endif;
            ?>
        </div>
        <input class="search-button" type="submit" value="絞り込み" />
    </form>
</div>