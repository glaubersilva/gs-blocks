import { useBlockProps } from '@wordpress/block-editor';

import Price from './../../components/price';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<Price props={attributes} />
		</div>
	);
}
