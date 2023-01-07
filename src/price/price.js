import './style.scss';

export default function price({ props }) {
	const primaryColor =
		props.primary_color !== 'undefined'
			? { color: props.primary_color }
			: {};

	const secondaryColor =
		props.secondary_color !== 'undefined'
			? { color: props.secondary_color }
			: {};

	const highlightColor =
		props.highlight_color !== 'undefined'
			? { color: props.highlight_color }
			: {};

	props.currency = props.currency || '$';
	props.original_price = props.original_price || '00.00';
	props.integer_part = props.integer_part || '0';
	props.fractional_part = props.fractional_part || '00';
	props.period = props.period || '';
	props.notice = props.notice || '';

	return (
		<div
			className="gs-blocks-price"
			style={
				props.background_color !== 'undefined'
					? { backgroundColor: props.background_color }
					: {}
			}
		>
			<div
				className="gs-blocks-price-original-price gs-blocks-price-typo-excluded"
				style={highlightColor}
			>
				{props.currency + props.original_price}{' '}
			</div>

			<span className="gs-blocks-price-currency" style={primaryColor}>
				{props.currency}{' '}
			</span>

			<span className="gs-blocks-price-integer-part" style={primaryColor}>
				{props.integer_part}{' '}
			</span>

			<div
				className="gs-blocks-price-after-integer-part"
				style={primaryColor}
			>
				<span className="gs-blocks-price-fractional-part">
					{props.fractional_part}{' '}
				</span>
				<span className="gs-blocks-price-period gs-blocks-price-typo-excluded gs-blocks-price-period-position-beside">
					{props.period}{' '}
				</span>
				<span className="gs-blocks-price-notice" style={secondaryColor}>
					<span
						className="gs-blocks-price-asterisk"
						style={highlightColor}
					>
						{props.notice ? '* ' : ''}
					</span>
					{props.notice}
				</span>{' '}
			</div>
		</div>
	);
}
