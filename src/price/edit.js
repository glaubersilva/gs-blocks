import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';
 
export default function Edit( { attributes, isSelected, setAttributes } ) {    
	return (
        <div { ...useBlockProps() }> 
			<div { ...useBlockProps() }>
				<TextControl
					className='title'
					//label={ __( 'Title', 'blocka' ) }
					value={ attributes.title }
					onChange={ ( val ) =>
						setAttributes( { title: val } )
					}
				/>
				<RichText
					className='content'		
					tagName="p"
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					//label={ __( 'Content:', 'blocka' ) }
					value={ attributes.content }
					onChange={ ( val ) =>
						setAttributes( { content: val } )
					}
					placeholder={ __( 'Content...' ) }
				/>			
				<TextControl
					className='author'
					//label={ __( 'Author', 'blocka' ) }
					value={ attributes.author }
					onChange={ ( val ) =>
						setAttributes( { author: val } )
					}
				/>
				<RichText
					className='bio'
					tagName="p"
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					//label={ __( 'Bio:', 'blocka' ) }
					value={ attributes.bio }
					onChange={ ( val ) =>
						setAttributes( { bio: val } )
					}
					placeholder={ __( 'Bio...' ) }
				/>
			</div>
        </div>
    );
}