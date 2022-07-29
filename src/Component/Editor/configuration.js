// import SimpleImage from './simple-image';
import {EDITOR_JS_TOOLS} from '../tools';

const Configuration = () => {
    return ({
        /**
         * Id of Element that should contain Editor instance
         */
        holder: "editorjs",
        autofocus: true,

        /**
         * Available Tools list.
         * Pass Tool's class or Settings object for each Tool you want to use
         */
        tools: EDITOR_JS_TOOLS,
        /**
         * Previously saved data that should be rendered
         */
        onReady: () => {
            console.log('Editor.js is ready to work!')
        },
        onChange: (api, event) => {
            console.log('Now I know that Editor\'s content changed!', event)
        },
        logLevel: 'ERROR',
        data: {},

    });
};

export default Configuration;
