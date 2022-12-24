import { useBlockProps, RichText, ColorPalette, InspectorControls } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {

	const onChangePriceCurrency = (val) => {
		setAttributes({ currency: val });
	};

	const onChangeOriginalPrice = (val) => {
		setAttributes({ original_price: val });
	};

	const onChangeIntegerPart = (val) => {
		setAttributes({ integer_part: val });
	};

	const onChangeFractionalPart = (val) => {
		setAttributes({ fractional_part: val });
	};

	const onChangePeriod = (val) => {
		setAttributes({ period: val });
	};

	const onChangeNotice = (val) => {
		setAttributes({ notice: val });
	};

	const onChangeBackgroundColor = (hexColor) => {
		setAttributes({ background_color: hexColor });
	};

	const onChangeHighlightColor = (hexColor) => {
		setAttributes({ highlight_color: hexColor });
	};

	const onChangePrimaryColor = (hexColor) => {
		setAttributes({ primary_color: hexColor });
	};

	const onChangeSecondaryColor = (hexColor) => {
		setAttributes({ secondary_color: hexColor });
	};

	const colors = [
		{ name: 'Light Grey', color: '#f8f8f8' },
		{ name: 'Red', color: '#ce362b' },
		{ name: 'Dark Grey', color: '#555555' },
		{ name: 'Black', color: '#000000' },
		{ name: 'White', color: '#FFFFFF' },
	];

	return (
		<div {...useBlockProps()}>
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

				<InspectorControls key="settingp">
					<div id="controlsp">
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Currency', 'price')}
							</legend>
							<TextControl // Element Tag for Gutenberg standard colour selector
								value={attributes.currency}
								onChange={onChangePriceCurrency} // onChange event callback
								style={{
									maxWidth: '100px',
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Original Price', 'price')}
							</legend>
							<TextControl // Element Tag for Gutenberg standard colour selector
								value={attributes.original_price}
								onChange={onChangeOriginalPrice} // onChange event callback
								style={{
									maxWidth: '100px',
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Integer Part', 'price')}
							</legend>
							<TextControl // Element Tag for Gutenberg standard colour selector
								value={attributes.integer_part}
								onChange={onChangeIntegerPart} // onChange event callback
								style={{
									maxWidth: '100px',
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Fractional Part', 'price')}
							</legend>
							<TextControl // Element Tag for Gutenberg standard colour selector
								value={attributes.fractional_part}
								onChange={onChangeFractionalPart} // onChange event callback
								style={{
									maxWidth: '100px',
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Period', 'price')}
							</legend>
							<TextControl // Element Tag for Gutenberg standard colour selector
								value={attributes.period}
								onChange={onChangePeriod} // onChange event callback
								style={{
									maxWidth: '100px',
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Notice', 'price')}
							</legend>
							<TextControl // Element Tag for Gutenberg standard colour selector
								value={attributes.notice}
								onChange={onChangeNotice} // onChange event callback
								style={{
									maxWidth: '200px',
								}}
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Background Color:', 'gs-blocks')}
							</legend>
							<ColorPalette // Element Tag for Gutenberg standard colour selector
								colors={ colors }
								value={attributes.background_color}
								onChange={onChangeBackgroundColor} // onChange event callback
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Highlight Color:', 'gs-blocks')}
							</legend>
							<ColorPalette // Element Tag for Gutenberg standard colour selector
								colors={ colors }
								value={attributes.highlight_color}
								onChange={onChangeHighlightColor} // onChange event callback
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Primary Color', 'gs-blocks')}
							</legend>
							<ColorPalette // Element Tag for Gutenberg standard colour selector
								colors={ colors }
								value={attributes.primary_color}
								onChange={onChangePrimaryColor} // onChange event callback
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{__('Secondary Color', 'gs-blocks')}
							</legend>
							<ColorPalette // Element Tag for Gutenberg standard colour selector
								colors={ colors }
								value={attributes.secondary_color}
								onChange={onChangeSecondaryColor} // onChange event callback
							/>
						</fieldset>
					</div>
				</InspectorControls>
			</div>
		</div>
	);
}
