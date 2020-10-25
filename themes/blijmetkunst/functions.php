<?php
function enqueue_child_theme_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('images-script', get_stylesheet_directory_uri() . '/js/images.js');
    wp_enqueue_script('theme-script', get_stylesheet_directory_uri() . '/js/blijmetkunst.js');
}

function varnish_safe_http_headers() {
    header('X-UA-Compatible: IE=edge,chrome=1');
    session_cache_limiter('');
    header("Cache-Control: public, s-maxage=120");
    if (!session_id()) {
        session_start();
    }
}

//Page Slug Body Class
function add_slug_body_class($classes) {
    global $post;
    if (isset($post)) {
        $classes[] = $post->post_type . '-' . $post->post_name;
    }
    return $classes;
}

add_filter('body_class', 'add_slug_body_class');
add_action('send_headers', 'varnish_safe_http_headers');
add_action('wp_enqueue_scripts', 'enqueue_child_theme_styles', PHP_INT_MAX);


