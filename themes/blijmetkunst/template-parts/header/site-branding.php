<div class="site-branding">
    <?php $blog_info = get_bloginfo('name'); ?>
    <?php if (!empty($blog_info)) : ?>
        <a class="site-home-button fas fa-home" href="/"></a>
        <span>
            <img src="<?= get_stylesheet_directory_uri(); ?>/img/logo-beer2.png" id="site-logo" />
            <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
        </span>
    <?php endif; ?>
</div>