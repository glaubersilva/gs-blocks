import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	return (
		<div
			{...useBlockProps.save()}
			style={{
				backgroundColor: attributes.header_bg_color,
				color: attributes.header_text_color,
			}}
		>
			{attributes.header}
		</div>
	);
}
