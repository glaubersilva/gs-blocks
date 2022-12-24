import { useBlockProps } from '@wordpress/block-editor';

import Price from './price';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<Price attributes={attributes} />
		</div>
	);
}
