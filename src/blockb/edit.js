import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';
 
export default function Edit( { attributes, isSelected, setAttributes } ) {    
	return (
        <div { ...useBlockProps() } > 
			<div { ...useBlockProps() }>
				<TextControl
					className='title'
					//label={ __( 'Title', 'blockb' ) }
					value={ attributes.title }
					onChange={ ( val ) =>
						setAttributes( { title: val } )
					}
				/>
				<RichText
					className='content'		
					tagName="p"
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					//label={ __( 'Content:', 'blockb' ) }
					value={ attributes.content }
					onChange={ ( val ) =>
						setAttributes( { content: val } )
					}
					placeholder={ __( 'Content...' ) }
				/>			
				<TextControl
					className='author'
					//label={ __( 'Author', 'blockb' ) }
					value={ attributes.author }
					onChange={ ( val ) =>
						setAttributes( { author: val } )
					}
				/>
				<RichText
					className='bio'
					tagName="p"
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					//label={ __( 'Bio:', 'blockb' ) }
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