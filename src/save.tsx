import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import styles from './style.module.scss';

export default function save() {
	return (
		<p {...useBlockProps.save({ className: styles.frontend })}>
			{__('Boilerplate – hello from the saved content!', 'boilerplate')}
		</p>
	);
}
