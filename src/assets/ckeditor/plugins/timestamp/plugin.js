/**
 * Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Basic sample plugin inserting current date and time into the CKEditor editing area.
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/ckeditor4/docs/#!/guide/plugin_sdk_intro
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'timestamp', {

	// Register the icons. They must match command names.
	icons: 'timestamp',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define the editor command that inserts a timestamp.
		editor.addCommand( 'insertTimestamp', {

			// Define the function that will be fired when the command is executed.
			exec: function( editor ) {
				//var now = new Date();
				// Insert the timestamp into the document.
				//editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
				 editor.destroy(true); 
				 if (window.toolbar_flag===0)
				 {
					 window.toolbar_flag=1;
					editor = CKEDITOR.replace('editor1', {
					  extraPlugins: "mathjax,smiley,preview,eqneditor,base64image,tableresize,autogrow,timestamp",
					  removePlugins: "about,image",
					  mathJaxLib: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML',
					  language: 'en',
					  allowedContent: true,
					  //filebrowserBrowseUrl: '../../assets/ckfinder/ckfinder2.html',
					  filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
					});
				 }else {
					  window.toolbar_flag=0;
					editor = CKEDITOR.replace('editor1', {
					  extraPlugins: "mathjax,smiley,preview,eqneditor,base64image,tableresize,autogrow,timestamp",
					  removePlugins: "about,image",
					  mathJaxLib: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML',
					  language: 'en',
					  allowedContent: true,
					  //filebrowserBrowseUrl: '../../assets/ckfinder/ckfinder2.html',
					  filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
					  toolbarGroups: [
								{"name":"basicstyles","groups":["basicstyles"]},
								{"name":"links","groups":["links"]},
								{"name":"paragraph","groups":["list","blocks"]},
								{"name":"document","groups":["mode"]},
								{"name":"insert","groups":["insert"]},
								{"name":"styles","groups":["styles"]},
								{"name":"about","groups":["about"]}
							],
					  removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar,Source,Preview,Smiley,Table'
					});
				 }

			}
		});

		// Create the toolbar button that executes the above command.
		editor.ui.addButton( 'Timestamp', {
			label: 'Insert Timestamp',
			command: 'insertTimestamp',
			toolbar: 'insert'
		});
	}
});
