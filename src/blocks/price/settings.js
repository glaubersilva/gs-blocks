import { InspectorControls } from '@wordpress/block-editor';
import {PanelBody, PanelRow, TextControl, ColorPalette} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Settings({ attributes, setAttributes }) {

	console.log('attributes: ', attributes);
	const onChangePriceCurrency = (val) => {
		setAttributes({ currency: val });
	};

	const onChangeOriginalPrice = (val) => {
		setAttributes({ originalPrice: val });
	};

	const onChangeIntegerPart = (val) => {
		setAttributes({ integerPart: val });
	};

	const onChangeFractionalPart = (val) => {
		setAttributes({ fractionalPart: val });
	};

	const onChangePeriod = (val) => {
		setAttributes({ period: val });
	};

	const onChangeNotice = (val) => {
		setAttributes({ notice: val });
	};

	const onChangeBackgroundColor = (hexColor) => {
		setAttributes({ backgroundColor: hexColor });
	};

	const onChangeHighlightColor = (hexColor) => {
		setAttributes({ highlightColor: hexColor });
	};

	const onChangePrimaryColor = (hexColor) => {
		setAttributes({ primaryColor: hexColor });
	};

	const onChangeSecondaryColor = (hexColor) => {
		setAttributes({ secondaryColor: hexColor });
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
						value={attributes.originalPrice}
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
						value={attributes.integerPart}
						onChange={onChangeIntegerPart}
						style={{
							maxWidth: '100px',
						}}
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label={__('Fractional Part', 'gs-blocks')}
						value={attributes.fractionalPart}
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
						value={attributes.backgroundColor}
						onChange={onChangeBackgroundColor}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Highlight Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.highlightColor}
						onChange={onChangeHighlightColor}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Primary Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.primaryColor}
						onChange={onChangePrimaryColor}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__('Secondary Color', 'gs-blocks')} initialOpen={false}>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.secondaryColor}
						onChange={onChangeSecondaryColor}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
}
