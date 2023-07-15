import { registerBlockType } from '@wordpress/blocks';

import {
	useBlockProps,
	RichText,
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
} from '@wordpress/block-editor';

const EXAMPLE = [
	[
		'core/group',
		{},
		[
			['core/paragraph', { content: 'Item 1' }],
			['core/paragraph', { content: 'Item 2' }],
			['core/paragraph', { content: 'Item 3' }],
			['core/paragraph', { content: 'Item 4' }],
		],
	],
];

registerBlockType('gs-blocks/items', {
	example: {
		attributes: {
			alignment: 'center',
			content_before: 'Content before items...',
			template: EXAMPLE,
			content_after: 'Content after items...',
		},
	},
	edit: ({ attributes, setAttributes }) => {
		const onChangeContent = (newContent) => {
			setAttributes({ content_before: newContent });
		};

		const onChangeAlignment = (newAlignment) => {
			setAttributes({
				alignment: newAlignment === undefined ? 'none' : newAlignment,
			});
		};

		//attributes.allowed_blocks = [ 'core/paragraph', 'core/columns', 'outermost/icon-block', 'uagb/icon-list', 'uagb/icon-list-child' ];
		const ALLOWED_BLOCKS = attributes.allowed_blocks
			? attributes.allowed_blocks
			: '';

		/*attributes.template = [
			['gs-blocks/price', { currency: '€' }],
			[
				'core/group',
				{},
				[
					['core/paragraph', { content: 'Feature 1' }],
					['core/paragraph', { content: 'Feature 2' }],
					['core/paragraph', { content: 'Feature 3' }],
					['core/paragraph', { content: 'Feature 4' }],
				],
			],
			[
				'core/columns',
				{},
				[
					[
						'core/column',
						{},
						[
							[ 'core/heading', { level: 3, content: 'Sub Heading 1' } ],
							[ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet id erat aliquet diam ullamcorper tempus massa eleifend vivamus.' } ],
						],
					],
					[
						'core/column', {}, [
							[ 'core/heading', { level: 3, content: 'Sub Heading 2' } ],
							[ 'core/paragraph', { content: 'Morbi augue cursus quam pulvinar eget volutpat suspendisse dictumst mattis id.' } ],
						],
					],
				],
			],
		];*/
		attributes.template = [
			[
				'core/group',
				{},
				[
					['core/paragraph', { content: 'Item 1' }],
					['core/paragraph', { content: 'Item 2' }],
					['core/paragraph', { content: 'Item 3' }],
					['core/paragraph', { content: 'Item 4' }],
				],
			],
		];
		const TEMPLATE = attributes.template ? attributes.template : '';

		return (
			<div {...useBlockProps()}>
				{
					<BlockControls>
						<AlignmentToolbar
							value={attributes.alignment}
							onChange={onChangeAlignment}
						/>
					</BlockControls>
				}
				<RichText
					className={attributes.className}
					style={{ textAlign: attributes.alignment }}
					tagName="p"
					onChange={onChangeContent}
					value={attributes.content_before}
				/>
				<div
					style={{
						margin: '0 auto',
						//backgroundColor: 'blue',
						padding: '20px',
						textAlign: attributes.alignment,
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
				<RichText
					className={attributes.className}
					style={{ textAlign: attributes.alignment }}
					tagName="p"
					onChange={onChangeContent}
					value={attributes.content_after}
				/>
			</div>
		);
	},
	save: (props) => {
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps}>
				<RichText.Content
					className={`gutenberg-examples-align-${props.attributes.alignment}`}
					tagName="p"
					value={props.attributes.content_before}
				/>

				<div
					style={{
						margin: '0 auto',
						//backgroundColor: 'blue',
						padding: '20px',
						textAlign: props.attributes.alignment,
					}}
				>
				<InnerBlocks.Content />
				</div>

				<RichText.Content
					className={`gutenberg-examples-align-${props.attributes.alignment}`}
					tagName="p"
					value={props.attributes.content_after}
				/>
			</div>
		);
	},
});
