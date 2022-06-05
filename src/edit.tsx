import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import styles from './style.module.scss';
import editorStyles from './editor.module.scss';

export default function Edit() {
	const blockProps = useBlockProps({
		className: [styles.frontend, editorStyles.editor].join(' '),
	});

	return (
		<p {...blockProps}>
			{__('Boilerplate – hello from the editor!', 'boilerplate')}
		</p>
	);
}
