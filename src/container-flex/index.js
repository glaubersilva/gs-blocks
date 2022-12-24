import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

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

registerBlockType('gs-blocks/container-flex', {
	supports: {
		color: {
			text: true,
			background: true,
			link: true,
		},
	},
	attributes: {
		align: { type: 'string', default: 'center' }, // none, left, center, right
		vertical_align: { type: 'string', default: 'center' }, //// top, center, bottom
		header: {
			type: 'string',
			source: 'text',
			selector: 'div',
			default: 'Product Name', // empty default
		},
		header_bg_color: { type: 'string', default: '#000000' },
		header_text_color: { type: 'string', default: '#ffffff' },
	},
	edit: ({ attributes, setAttributes }) => {
		const onChangeAlign = (newAlignment) => {
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
		};

		const onChangeHeaderBGColor = (hexColor) => {
			setAttributes({ header_bg_color: hexColor });
		};

		const onChangeHeaderTextColor = (hexColor) => {
			setAttributes({ header_text_color: hexColor });
		};

		return (
			<div
				{...useBlockProps()}
				style={{
					backgroundColor: 'red',
					minHeight: '450px',
					//overflow: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: attributes.align,
					justifyContent: attributes.vertical_align,
				}}
			>
				<BlockControls>
					<BlockAlignmentToolbar
						value={attributes.align}
						onChange={onChangeAlign}
					/>
					<BlockVerticalAlignmentControl
						value={attributes.vertical_align}
						onChange={onChangeVerticalAlign}
					/>
				</BlockControls>

				{
					<div
						{...useBlockProps()}
						className="items"
						style={{
							backgroundColor: 'blue',
							//marginBottom: 'auto',
							//flex: '1',
							//top: '0',
							//justifySelf: 'space-between',
							//width: '100%',
							//height: '100px',
						}}
					>
						<p>{'TOP'}</p>
					</div>
				}

				<div {...useBlockProps()} className="header">
					<InspectorControls key="setting">
						<div id="container-flex-controls">
							<fieldset>
								<legend className="blocks-base-control__label">
									{__('Background color', 'container-flex')}
								</legend>
								<ColorPalette // Element Tag for Gutenberg standard colour selector
									onChange={onChangeHeaderBGColor} // onChange event callback
								/>
							</fieldset>
							<fieldset>
								<legend className="blocks-base-control__label">
									{__('Text color', 'container-flex')}
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
								maxWidth: '150px',
							}}
						/>
					}
					{/*<InnerBlocks />*/}
				</div>

				{
					<div
						{...useBlockProps()}
						className="items"
						style={{
							backgroundColor: 'green',
							//width: '100%',
							//height: '100%',
						}}
					>
						<p>{'Item 1'}</p>
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
