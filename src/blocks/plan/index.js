import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';

import './style.scss';
//import './editor.scss';

//import { price } from '../price/index';

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

registerBlockType('gs-blocks/plan', {
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

		const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/columns', 'outermost/icon-block', 'uagb/icon-list', 'uagb/icon-list-child' ];

		const TEMPLATE = [
			['gs-blocks/price', { currency: '€' }],
			['gs-blocks/items', {}],
		];

		return (
			<div {...useBlockProps()} className="grid">
				<div className="header">
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
				</div>
				<div
					style={{
						margin: '0 auto',
						//textAlign: 'center',
						//lineHeight: '20px',
						//marginBlockStart: '0.5rem',
    					//marginBlockEnd: '0',
					}}
				>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						//templateLock={'all'}
						//renderAppender={false}
						//templateInsertUpdatesSelection={true}
						//__experimentalCaptureToolbars={true}
					/>
				</div>
				<div className="footer">
					<Button isPrimary>Click Me!</Button>
				</div>
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
