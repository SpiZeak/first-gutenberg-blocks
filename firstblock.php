<?php

/**
 * Plugin Name: First Block
 * Author: Max Trewhitt
 */

namespace Blocks;

add_action('init', function () {
	register_block_type_from_metadata(__DIR__);
});
