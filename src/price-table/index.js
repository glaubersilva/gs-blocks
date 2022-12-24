import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';

//import './style.scss';
import './editor.scss';

import { price } from '../price/index';

import {
	useBlockProps,
	InnerBlocks,
	RichText,
	BlockControls,
	AlignmentToolbar,
	BlockAlignmentToolbar, // https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockalignmenttoolbar
	BlockVerticalAlignmentControl, // https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#blockverticalalignmentcontrol
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';

registerBlockType('gs-blocks/price-table', {
	supports: {
		color: {
			text: true,
			background: true,
			link: true,
		},
	},
	attributes: {
		//align: { type: 'string', default: 'center' }, // none, left, center, right
		//vertical_align: { type: 'string', default: 'center' }, //// top, center, bottom
		header: {
			type: 'string',
			source: 'text',
			selector: 'div',
			default: 'Product Name', // empty default
		},
		header_bg_color: { type: 'string', default: '#222222' },
		header_text_color: { type: 'string', default: '#ffffff' },
	},
	edit: ({ attributes, setAttributes }) => {
		/*const onChangeAlign = (newAlignment) => {
			switch (newAlignment) {
				case 'left':
					newAlignment = 'flex-start';
					break;
				case 'right':
					newAlignment = 'flex-end';
					break;
			}

			setAttributes({
				align: newAlignment === undefined ? 'none' : newAlignment,
			});
		};

		const onChangeVerticalAlign = (newAlignment) => {
			switch (newAlignment) {
				case 'top':
					newAlignment = 'flex-start';
					break;
				case 'bottom':
					newAlignment = 'flex-end';
					break;
			}

			setAttributes({
				vertical_align:
					newAlignment === undefined ? 'none' : newAlignment,
			});
		};*/

		const onChangeHeaderBGColor = (hexColor) => {
			setAttributes({ header_bg_color: hexColor });
		};

		const onChangeHeaderTextColor = (hexColor) => {
			setAttributes({ header_text_color: hexColor });
		};

		const ALLOWED_BLOCKS = ['gs-blocks/price'];

		const TEMPLATE = [
			['gs-blocks/price', { currency: '€' }],
			//[ 'core/paragraph', { placeholder: 'Image Details' } ],
		];

		return (
			<div
				{...useBlockProps()}
				style={{
					backgroundColor: '#f8f8f8',
					minHeight: '550px',
					//overflow: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center', //attributes.align,
					justifyContent: 'space-between', //attributes.vertical_align,
				}}
			>
				{/*<BlockControls>
					<BlockAlignmentToolbar
						value={attributes.align}
						onChange={onChangeAlign}
					/>
					<BlockVerticalAlignmentControl
						value={attributes.vertical_align}
						onChange={onChangeVerticalAlign}
					/>
				</BlockControls>*/}

				<div
					{...useBlockProps()}
					className="header"
					style={{
						//backgroundColor: attributes.header_bg_color,
						//color: attributes.header_text_color,
						width: '100%',
						minHeight: '100px',
					}}
				>
					<InspectorControls key="setting">
						<div id="price-table-controls">
							<fieldset>
								<legend className="blocks-base-control__label">
									{__('Background color', 'price-table')}
								</legend>
								<ColorPalette // Element Tag for Gutenberg standard colour selector
									onChange={onChangeHeaderBGColor} // onChange event callback
								/>
							</fieldset>
							<fieldset>
								<legend className="blocks-base-control__label">
									{__('Text color', 'price-table')}
								</legend>
								<ColorPalette // Element Tag for Gutenberg standard colour selector
									onChange={onChangeHeaderTextColor} // onChange event callback
								/>
							</fieldset>
						</div>
					</InspectorControls>
					{
						<TextControl
							value={attributes.header}
							onChange={(val) => setAttributes({ header: val })}
							style={{
								//textAlign: attributes.block_alignment,
								backgroundColor: attributes.header_bg_color,
								color: attributes.header_text_color,
								width: '100%',
								minHeight: '100px',
							}}
						/>
					}
				</div>

				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					//templateLock={'all'}
					//renderAppender={false}
					//templateInsertUpdatesSelection={true}
					//__experimentalCaptureToolbars={true}
				/>

				{
					<div
						{...useBlockProps()}
						className="footer"
						style={{
							marginTop: '2rem',
							backgroundColor: '#555',
							width: '100%',
							minHeight: '100px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Button isPrimary>Click Me!</Button>
					</div>
				}
			</div>
		);
	},
	save: ({ attributes }) => {
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
	},
});
