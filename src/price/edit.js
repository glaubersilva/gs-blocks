import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';
import Markup from './markup';
import Settings from './settings';

export default function Edit({ attributes, isSelected, setAttributes }) {
	const props = { attributes, isSelected, setAttributes };
	return (
		<div {...useBlockProps()}>
			<Markup {...props} />
			<Settings {...props} />
		</div>
	);
}
