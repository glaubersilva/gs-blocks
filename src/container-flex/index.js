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

		const ALLOWED_BLOCKS = ['gs-blocks/price', 'core/paragraph', 'core/list', 'core/list-item'];

		const TEMPLATE = [
			['gs-blocks/price', { currency: '€' }],
			//['core/list', {values: '<li>Feature 1</li><li>Feature 2</li><li>Feature 3</li><li>Feature 4</li>' },],
			[
				'core/group',
				{},
				[
					['core/paragraph', { content: 'Feature 1' }],
					['core/paragraph', { content: 'Feature 2' }],
				],
			],
			/*[ 'core/columns', {},
				[
					[ 'core/column', {}, [
							[ 'core/heading', { level: 3, content: 'Sub Heading 1' } ],
							[ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet id erat aliquet diam ullamcorper tempus massa eleifend vivamus.' } ],
						]
					],
					[ 'core/column', {}, [
							[ 'core/heading', { level: 3, content: 'Sub Heading 2' } ],
							[ 'core/paragraph', { content: 'Morbi augue cursus quam pulvinar eget volutpat suspendisse dictumst mattis id.' } ],
						]
					],
				]
			],*/
		];	

		return (
			<div
				{...useBlockProps()}
				style={{
					backgroundColor: 'red',
					//minHeight: '450px',
					//overflow: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: attributes.align,
					justifyContent: attributes.vertical_align,
					textAlign: attributes.align,
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

				<div
					style={{
						backgroundColor: 'blue',
						padding: '20px',
					}}
				>
					<InnerBlocks
						//allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						//templateLock={'all'}
						//renderAppender={false}
						templateInsertUpdatesSelection={true}
						//__experimentalCaptureToolbars={true}
					/>
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
