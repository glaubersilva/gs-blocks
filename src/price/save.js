import { useBlockProps } from '@wordpress/block-editor';

import Markup from './markup';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<Markup {...{ attributes }} />
		</div>
	);
}
