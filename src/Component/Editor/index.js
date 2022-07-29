import React, {useState, useEffect} from 'react';
import EditorJS from '@editorjs/editorjs';
import Configuration from './configuration';
import Form from '@rjsf/material-ui/v5';

const Editor = (props) => {
    const edjsHTML = require("editorjs-html");
    const defaultData = {
        title: "First task",
    };

    const schema = {
        title: "Article",
        type: "object",
        required: ["article"],
        properties: {
            title: {type: "string", title: "Title", default: "A new task"},
            textarea: {type: "string", title: "description"},
            schedule: {
                "type": "string",
                "format": "date-time"
            },
            image: {
                "type": "string",
                "format": "data-url",
                "title": "Single Image file"
            },
        }
    };

    const uiSchema = {
        "textarea": {
            "ui:widget": "textarea",
            "ui:options": {
                rows: 10
            }
        }
    };

    const [editor, seteditor] = useState({});
    const [formData, setFormData] = useState(defaultData);


    useEffect(() => {
        const editor = new EditorJS(Configuration());
        seteditor(editor);
    }, []);


    const onSave = () => {
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
            const html = edjsHTML().parse(outputData).join('');
            console.log(html);
            console.log(formData);
        }).catch((error) => {
            console.log('Saving failed: ', error);
        });
    };

    const change = (e) => {
        setFormData(e.formData);
    };

    const error = (e) => {
        console.log(e);
    };

    return (
        <Form schema={schema}
              formData={formData}
              onChange={change}
              uiSchema={uiSchema}
              onError={error}>

            <div id="editorjs" className="app">Article Content</div>
            <button type="submit" onClick={onSave}>Submit</button>
            <button type="button">Cancel</button>
        </Form>
    );
};

export default Editor;
