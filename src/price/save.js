import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div
				className="gs-blocks-price"
				style={{
					backgroundColor: attributes.background_color,
				}}
			>
				<div
					className="gs-blocks-price-original-price gs-blocks-price-typo-excluded"
					style={{
						color: attributes.highlight_color,
					}}
				>
					{attributes.currency + attributes.original_price}{' '}
				</div>

				<span
					className="gs-blocks-price-currency"
					style={{
						color: attributes.primary_color,
					}}
				>
					{attributes.currency}{' '}
				</span>

				<span
					className="gs-blocks-price-integer-part"
					style={{
						color: attributes.primary_color,
					}}
				>
					{attributes.integer_part}{' '}
				</span>

				<div
					className="gs-blocks-price-after-integer-part"
					style={{
						color: attributes.primary_color,
					}}
				>
					<span className="gs-blocks-price-fractional-part">
						{attributes.fractional_part}{' '}
					</span>
					<span className="gs-blocks-price-period gs-blocks-price-typo-excluded gs-blocks-price-period-position-beside">
						{attributes.period}{' '}
					</span>
					<span
						className="gs-blocks-price-notice"
						style={{
							color: attributes.secondary_color,
						}}
					>
						<span
							className="gs-blocks-price-asterisk"
							style={{
								color: attributes.highlight_color,
							}}
						>
							{'* '}
						</span>
						{attributes.notice}
					</span>{' '}
				</div>
			</div>
		</div>
	);
}
