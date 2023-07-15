import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
 
registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
    apiVersion: 2,
    title: 'Supports',
    icon: 'universal-access-alt',
    category: 'design',
	supports: {
        color: {
            'text': true,
            'background': true,
            'link': true
        }
    },
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
    },
    example: {
        attributes: {
            content: 'Hello World',
        },
    },
    edit: ( props ) => {
        const {
            attributes: { content },
            setAttributes,
            className,
        } = props;
        const blockProps = useBlockProps();
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };
        return (
            <RichText
                { ...blockProps }
                tagName="p"
                onChange={ onChangeContent }
                value={ content }
            />
        );
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        return (
            <RichText.Content
                { ...blockProps }
                tagName="p"
                value={ props.attributes.content }
            />
        );
    },
} );