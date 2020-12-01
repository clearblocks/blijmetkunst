<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <link rel="icon" href="wp-content/themes/blijmetkunst/img/favicon.ico?v=2" />
    <link rel="shortcut icon" sizes="196x196" href="wp-content/themes/blijmetkunst/img/favicon-196.png" />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,600,700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/bfb8eaa8cb.js" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> id="blij-met-kunst">
<div class="left-bar side-bar"></div>
<div class="right-bar side-bar"></div>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <header id="masthead" class="split-color <?php echo is_singular() && twentynineteen_can_show_post_thumbnail() ? 'site-header featured-image' : 'site-header'; ?>">
        <div class="site-branding-container">
            <?php get_template_part( 'template-parts/header/site', 'branding' ); ?>
        </div><!-- .site-branding-container -->

        <?php if ( is_singular() && twentynineteen_can_show_post_thumbnail() ) : ?>
            <div class="site-featured-image">
                <?php
                twentynineteen_post_thumbnail();
                the_post();
                $classes = 'entry-header';
                ?>
                <div class="<?php echo $classes; ?>">
                    <?php get_template_part( 'template-parts/header/entry', 'header' ); ?>
                </div><!-- .entry-header -->
            </div>
        <?php endif; ?>
    </header><!-- #masthead -->

    <div id="content" class="site-content">
