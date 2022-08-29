<?php

/**
 * Add stylesheet
 */
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_uri(),
        array( 'sunflower-style' ),
        wp_get_theme()->get('Version')
    );
}

/**
 * Add class to body
 */
add_filter( 'body_class', function( $classes ) {
    return array_merge( $classes, array( 'sunflower-child' ) );
} );


/**
 * Add custom js file
 */
wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array(), '', true );


function hook_preload_fonts() {
?>
<link rel="preload" href="<?php echo get_template_directory_uri() ?>/assets/fonts/bereitbold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<?php
}
add_action('wp_head', 'hook_preload_fonts');

?>