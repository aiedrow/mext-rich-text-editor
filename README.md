## Mext Rich Text Editor
Mext is a simple, lightweight Rich Text Editor that allows users to format their text using various styling options like Bold, Italic, Underline, Headers, Lists, Images, Links and Videos.

#### Installation
To use the editor, you need to include the mext.js file in your HTML code.

`<script src="path/to/mext.js"></script>`

#

#### Usage
To create a new editor, call the createEditor(textareaId) function in your JavaScript code, passing in the id of the textarea element that you want to replace with the editor.

`createEditor('myTextarea');`

The editor will be created dynamically in the HTML DOM and replace the specified textarea.

#### Styling
Mext provides basic styling options for the editor. You can customize the editor's appearance by modifying the styles in mext.css.

#

#### API
Mext provides the following API methods:

`createEditor(textareaId)`
This method creates a new Mext editor instance and replaces the textarea element with the specified id with the editor.

`applyTag(textArea, tag)`
This method applies the specified HTML tag to the selected text in the editor.
applyTag(document.getElementById('editor'), 'b');

`addTagAttr(textArea, tag, attribute, value)`
This method adds the specified attribute with the specified value to the selected HTML tag in the editor.
addTagAttr(document.getElementById('editor'), 'img', 'src', 'path/to/image.png');

`updateResult(result, textArea)`
This method updates the result div with the HTML code generated from the textarea element.
updateResult(document.getElementById('result'), document.getElementById('editor'));

`updateText(result, textArea)`
This method updates the textarea element with the plain text generated from the result div.
updateText(document.getElementById('result'), document.getElementById('editor'));

# 

#### License
Mext is released under the Apache-2.0 license. See LICENSE for more information.




