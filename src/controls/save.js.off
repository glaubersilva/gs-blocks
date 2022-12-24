import { useBlockProps, RichText } from '@wordpress/block-editor';
 
export default function save( { attributes } ) {
	//console.log('attributes: ', attributes);
    const blockProps = useBlockProps.save();
	return (
        <div { ...blockProps }>
			{<div { ...blockProps } className='title'>{ attributes.title }</div>}
			{<RichText.Content { ...blockProps } className='content' tagName="p" value={ attributes.content } />}
			{<div { ...blockProps } className='author'>{ attributes.author }</div>}
			{<RichText.Content { ...blockProps } className='bio' tagName="p" value={ attributes.bio } />}
		</div>
    );	
    //return <div { ...blockProps }>{ attributes.message }</div>;
}
