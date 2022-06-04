import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from "@wordpress/block-editor";
import styles from './style.module.scss'

registerBlockType('blocks/firstblock', {
	edit() {
		const blockProps = useBlockProps({
			className: styles.firstblock
		});

		return <p {...blockProps}>Edit</p>;
	},
	save() {
		const blockProps = useBlockProps.save({
			className: styles.firstblock
		});

		return <p {...blockProps}>Save</p>;
	},
});
