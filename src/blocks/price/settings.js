import { InspectorControls } from '@wordpress/block-editor';
import {PanelBody, PanelRow, TextControl, ColorPalette} from '@wordpress/components';
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
		<InspectorControls>
			<PanelBody title={__('Currency', 'gs-blocks')} initialOpen={true}>
				<PanelRow>
					<TextControl
						value={attributes.currency}
						onChange={onChangePriceCurrency}
						style={{
							maxWidth: '100px',
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Original Price', 'gs-blocks')} initialOpen={true}>
				<PanelRow>
					<TextControl
						value={attributes.original_price}
						onChange={onChangeOriginalPrice}
						style={{
							maxWidth: '100px',
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Price', 'gs-blocks')} initialOpen={true}>
				<PanelRow>
					<TextControl
						label={__('Integer Part', 'gs-blocks')}
						value={attributes.integer_part}
						onChange={onChangeIntegerPart}
						style={{
							maxWidth: '100px',
						}}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label={__('Fractional Part', 'gs-blocks')}
						value={attributes.fractional_part}
						onChange={onChangeFractionalPart}
						style={{
							maxWidth: '100px',
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Period', 'gs-blocks')} initialOpen={true}>
				<PanelRow>
					<TextControl
						value={attributes.period}
						onChange={onChangePeriod}
						style={{
							maxWidth: '100px',
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Notice', 'gs-blocks')} initialOpen={true}>
				<PanelRow>
					<TextControl
						value={attributes.notice}
						onChange={onChangeNotice}
						style={{
							maxWidth: '200px',
						}}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Background Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.background_color}
						onChange={onChangeBackgroundColor}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Highlight Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.highlight_color}
						onChange={onChangeHighlightColor}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Primary Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.primary_color}
						onChange={onChangePrimaryColor}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Secondary Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.secondary_color}
						onChange={onChangeSecondaryColor}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
}
