<?php
/**
 * @package BlijMetKunst
 * @version 1.0.0
 */
/*
Plugin Name: Blij met Kunst
Plugin URI: httsp://blijmetkunst.nl
Description: Plugin for use with the blijmetkunst theme
Author: Theo van Oostrum
Version: 1.0.0
*/
function blijmetkunst_figurine_block() {

    // Scripts.
    wp_register_script(
        'blijmetkunst-figurine-block-script',
        plugins_url('figurine/block.js', __FILE__),
        ['wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-editor'],
        filemtime(plugin_dir_path(__FILE__) . 'figurine/block.js'),
        true // Load script in footer.
    );

//    wp_register_script(
//        'blijmetkunst-figurine-block-frontend-script',
//        plugins_url('figurine/block-frontend.js', __FILE__),
//        [],
//        filemtime(plugin_dir_path(__FILE__) . 'figurine/block-frontend.js'),
//        true // Load script in footer.
//    );

    // Styles.
    wp_register_style(
        'blijmetkunst-figurine-block-editor-style',
        plugins_url('figurine/editor.css', __FILE__),
        ['wp-edit-blocks'],
        filemtime(plugin_dir_path(__FILE__) . 'figurine/editor.css')
    );
    wp_register_style(
        'blijmetkunst-figurine-block-frontend-style',
        plugins_url('figurine/style.css', __FILE__),
        [],
        filemtime(plugin_dir_path(__FILE__) . 'figurine/style.css')
    );

    // Register the block with WP using our namespacing
    // We also specify the scripts and styles to be used in the Gutenberg interface
    register_block_type('figurine/block', array(
        'editor_script' => 'blijmetkunst-figurine-block-script',
        'editor_style' => 'blijmetkunst-figurine-block-editor-style',
        'style' => 'blijmetkunst-figurine-block-frontend-style',
    ));

    // Register the block with WP using our namespacing
    // We also specify the scripts and styles to be used in the Gutenberg interface
    register_block_type('example/block', array(
        'editor_script' => 'blijmetkunst-example-block-script',
        'editor_style' => 'blijmetkunst-example-block-editor-style',
        'style' => 'blijmetkunst-example-block-frontend-style',
    ));
}

add_action('init', 'blijmetkunst_figurine_block');