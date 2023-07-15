import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Price from './../../components/price';
import Settings from './settings';

export default function Edit({ attributes, isSelected, setAttributes }) {
	const props = { attributes, isSelected, setAttributes };
	return (
		<div {...useBlockProps()}>
			<Price props={attributes} />
			<Settings {...props} />
		</div>
	);
}
