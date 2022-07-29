import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import NestedList from '@editorjs/nested-list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import ImageTool from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from 'editorjs-header-with-anchor'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import simpleImage from "./tool/simpleimage/index"
import timeline from "./tool/timeline"
import YoutubeEmbed from 'editorjs-youtube-embed'
import Alert from 'editorjs-alert'
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'
import Paragraph from '@editorjs/paragraph'
import ToggleBlock from 'editorjs-toggle-block'
import ImageGallery from '@rodrigoodhin/editorjs-image-gallery'


export const EDITOR_JS_TOOLS = {
    toggle: {
        class: ToggleBlock,
        inlineToolbar: true,
    },
    embed: {
        class: Embed,
        inlineToolbar: true,
        config: {
            services: {
                youtube: true,
                coub: true,
            }
        }
    },
    youtubeEmbed: YoutubeEmbed,
    table: Table,
    marker: Marker,
    warning: Warning,
    code: Code,
    linkTool: {
        class: LinkTool,
        config: {
            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
        }
    },
    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
        }
    },
    Timeline: timeline,
    raw: Raw,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: simpleImage,
    alert: {
        class: Alert,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+A',
        config: {
            defaultType: 'primary',
            messagePlaceholder: 'Enter something',
        },
    },
    list: {
        class: NestedList,
        inlineToolbar: true,
    },
    header: {
        class: Header,
        tunes: ['anyTuneName'],
        config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3,
            allowAnchor: true,
            anchorLength: 100,
        }
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: false,
        tunes: ['anyTuneName'],
    },
    anyTuneName: {
        class: AlignmentTuneTool,
        config: {
            default: "right",
            blocks: {
                header: 'center',
                list: 'right'
            }
        },
    },
    imageGallery: ImageGallery,
}
