import React, { useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';

const edjsHTML = require("editorjs-html");

const Editor = (props) => {

    const [editor, seteditor] = useState({});

    useEffect(() => {
        const editor = new EditorJS(Configuration());
        seteditor(editor);
    }, []);


    const onSave = () => {
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)

            const edjsParser = edjsHTML();
            const html = edjsParser.parse(outputData);
            console.log(html.join(''));
            // console.log(html);
            }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    };


  return (
      <div>
          <h1>My Editor</h1>
          <button onClick={onSave}>Save</button>
        <div id="editorjs"/>
      </div>
  );
};

export default Editor;
