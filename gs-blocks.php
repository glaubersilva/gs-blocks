<?php
/**
 * Plugin Name:       GS Blocks
 * Description:       A simple block collection by Glauber Silva.
 * Version:           0.1.0
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            Glauber Silva
 * Plugin URI:        https://glaubersilva.me/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gs-blocks
 * Domain Path:       /languages
 *
 * @package           gs-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function gs_blocks_init() {
	//register_block_type( __DIR__ . '/build/blocka' );
	//register_block_type( __DIR__ . '/build/blockb' );
	//register_block_type( __DIR__ . '/build/controls' );
	//register_block_type( __DIR__ . '/build/sidebar' );
	//register_block_type( __DIR__ . '/build/supports' );
	register_block_type( __DIR__ . '/build/price' );
	register_block_type( __DIR__ . '/build/plan' );
	//register_block_type( __DIR__ . '/build/container-flex' );
}
add_action( 'init', 'gs_blocks_init' );

/**
 * Define custom category for our custom blocks.
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#managing-block-categories
 *
 * @param [type] $block_categories
 * @param [type] $editor_context
 * @return void
 */
function gs_blocks_filter_block_categories_when_post_provided( $block_categories, $editor_context ) {
	if ( ! empty( $editor_context->post ) ) {
		array_push(
			$block_categories,
			array(
				'slug'  => 'gs-blocks',
				'title' => __( 'GS Blocks', 'gs-blocks' ),
				'icon'  => null,
			)
		);
	}
	return $block_categories;
}

add_filter( 'block_categories_all', 'gs_blocks_filter_block_categories_when_post_provided', 10, 2 );

//wp_enqueue_style( 'wp-components' );

