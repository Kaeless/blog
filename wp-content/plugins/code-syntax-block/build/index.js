!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.apiFetch},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.hooks},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";n.r(t);var o=n(6),r=n.n(o),c=n(7),l=n(4),a=n.n(l),u=n(0),i=n(5),s=n.n(i),b=n(1),p=n(8),g=n(3),m=n(2),f=function(e){var t=e.attributes,n=e.className,o=e.setAttributes;Object(u.useEffect)((function(){!t.language&&mkaz_code_syntax_default_lang&&o({language:mkaz_code_syntax_default_lang})}),[t.language]),Object(u.useEffect)((function(){s()({path:"/mkaz/code-syntax/v1/get/color-scheme/"}).then((function(e){o({colorScheme:e})})).catch((function(e){console.log("Error fetching color scheme option: ",e)}))}),[t.colorScheme]);var r="";r=t.language?"language-"+t.language:"",r=t.lineNumbers?r+" line-numbers":r;var c={value:t.content||"",onChange:function(e){return o({content:e})},placeholder:Object(m.__)("Write code…"),"aria-label":Object(m.__)("Code")},l=Object(p.hasBlockSupport)("core/code","lightBlockWrapper",!1);return Object(u.createElement)(u.Fragment,null,Object(u.createElement)(b.InspectorControls,{key:"controls"},Object(u.createElement)(g.PanelBody,{title:Object(m.__)("Settings")},Object(u.createElement)(g.SelectControl,{label:Object(m.__)("Language"),value:t.language,options:[{label:Object(m.__)("Select code language","code-syntax-block"),value:""}].concat(Object.keys(mkaz_code_syntax_languages).map((function(e){return{label:mkaz_code_syntax_languages[e],value:e}}))),onChange:function(e){return o({language:e})}}),Object(u.createElement)(g.ToggleControl,{label:Object(m.__)("Show line numbers","code-syntax-block"),checked:t.lineNumbers,onChange:function(e){return o({lineNumbers:e})}}),Object(u.createElement)(g.TextControl,{label:Object(m.__)("Title for Code Block","code-syntax-block"),value:t.title,onChange:function(e){return o({title:e})},placeholder:Object(m.__)("Title or File (optional)","code-syntax-block")})),Object(u.createElement)(g.PanelBody,{title:Object(m.__)("Global Color Scheme","code-syntax-block")},Object(u.createElement)("p",null,"Color scheme applies to all code blocks across the site."),Object(u.createElement)(g.SelectControl,{label:Object(m.__)("Schemes"),value:t.colorScheme,options:[{label:Object(m.__)("Pick color scheme","code-syntax-block"),value:""}].concat([{label:"A11y Dark",value:"prism-a11y-dark"},{label:"One Dark",value:"prism-onedark"},{label:"GH Colors (Light)",value:"prism-ghcolors"},{label:"Nord",value:"prism-nord"}].map((function(e){return{label:e.label,value:e.value}}))),onChange:function(e){var t="/mkaz/code-syntax/v1/set/color-scheme/"+e;s()({path:t}).then((function(){o({colorScheme:e})})).catch((function(e){console.log("Error updating color scheme option: ",e)}))}}))),Object(u.createElement)(u.Fragment,null,b.useBlockProps?Object(u.createElement)("pre",Object(b.useBlockProps)(),Object(u.createElement)(b.RichText,a()({},c,{preserveWhiteSpace:!0}))):l?Object(u.createElement)(b.__experimentalBlock.pre,null,Object(u.createElement)(b.PlainText,a()({},c,{__experimentalVersion:2,tagName:"code"}))):Object(u.createElement)("div",{key:"editor-wrapper",className:n},Object(u.createElement)(b.PlainText,c)),Object(u.createElement)("div",{className:"wp-block mkaz-code-syntax-block__lang_label"},mkaz_code_syntax_languages[t.language])))},d=function(e){var t=e.attributes,n="";if(n=t.language?"language-"+t.language:"",n=t.lineNumbers?n+" line-numbers":n,b.useBlockProps){var o=b.useBlockProps.save({title:t.title});return Object(u.createElement)(u.Fragment,null,Object(u.createElement)("pre",o,Object(u.createElement)(b.RichText.Content,{tagName:"code",value:t.content,lang:t.language,className:n})))}return Object(u.createElement)("pre",{className:"wp-block-code",title:t.title},Object(u.createElement)("code",{lang:t.language,className:n},t.content))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(c.addFilter)("blocks.registerBlockType","mkaz/code-syntax-block",(function(e){return"core/code"!==e.name?e:j(j({},e),{},{attributes:j(j({},e.attributes),{},{language:{type:"string",selector:"code",source:"attribute",attribute:"lang"},lineNumbers:{type:"boolean"},title:{type:"string",source:"attribute",selector:"pre",attribute:"title"}}),edit:f,save:d})}))}]);