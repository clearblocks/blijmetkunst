</div><!-- #content -->

<footer id="colophon" class="site-footer split-color">
    <div class="site-info">
        <?php if (has_nav_menu('footer')) : ?>
            <nav class="footer-navigation" aria-label="<?php esc_attr_e('Footer Menu', 'twentynineteen'); ?>">
                <?php
                wp_nav_menu([
                        'theme_location' => 'footer',
                        'menu_class' => 'footer-menu',
                        'depth' => 1,
                ]);
                ?>
            </nav><!-- .footer-navigation -->
        <?php endif; ?>
    </div><!-- .site-info -->
</footer><!-- #colophon -->

</div><!-- #page -->

<div id="image-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-close fas fa-times"></div>
    <div class="modal-content">
        <div class="modal-body"></div>
    </div>
</div>

<?php wp_footer(); ?>

</body>
</html>
