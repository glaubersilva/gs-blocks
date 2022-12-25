import { ColorPalette, InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Settings({ attributes, setAttributes }) {
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
		{ name: 'Dark Grey', color: '#555' },
		{ name: 'Black', color: '#000' },
		{ name: 'White', color: '#FFF' },
	];

	return (
		<div className="gs-blocks-price-settings">
			<InspectorControls key="settingp">
				<div id="controlsp">
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Currency', 'gs-blocks')}
						</legend>
						<TextControl
							value={attributes.currency}
							onChange={onChangePriceCurrency}
							style={{
								maxWidth: '100px',
							}}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Original Price', 'gs-blocks')}
						</legend>
						<TextControl
							value={attributes.original_price}
							onChange={onChangeOriginalPrice}
							style={{
								maxWidth: '100px',
							}}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Integer Part', 'gs-blocks')}
						</legend>
						<TextControl
							value={attributes.integer_part}
							onChange={onChangeIntegerPart}
							style={{
								maxWidth: '100px',
							}}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Fractional Part', 'gs-blocks')}
						</legend>
						<TextControl
							value={attributes.fractional_part}
							onChange={onChangeFractionalPart}
							style={{
								maxWidth: '100px',
							}}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Period', 'gs-blocks')}
						</legend>
						<TextControl
							value={attributes.period}
							onChange={onChangePeriod}
							style={{
								maxWidth: '100px',
							}}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Notice', 'gs-blocks')}
						</legend>
						<TextControl
							value={attributes.notice}
							onChange={onChangeNotice}
							style={{
								maxWidth: '200px',
							}}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Background Color:', 'gs-blocks')}
						</legend>
						<ColorPalette
							colors={colors}
							value={attributes.background_color}
							onChange={onChangeBackgroundColor}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Highlight Color:', 'gs-blocks')}
						</legend>
						<ColorPalette
							colors={colors}
							value={attributes.highlight_color}
							onChange={onChangeHighlightColor}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Primary Color', 'gs-blocks')}
						</legend>
						<ColorPalette
							colors={colors}
							value={attributes.primary_color}
							onChange={onChangePrimaryColor}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Secondary Color', 'gs-blocks')}
						</legend>
						<ColorPalette
							colors={colors}
							value={attributes.secondary_color}
							onChange={onChangeSecondaryColor}
						/>
					</fieldset>
				</div>
			</InspectorControls>
		</div>
	);
}
