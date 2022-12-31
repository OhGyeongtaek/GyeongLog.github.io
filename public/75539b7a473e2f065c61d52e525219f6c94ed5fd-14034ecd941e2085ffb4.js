"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[636],{6771:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),o=n(7294),i=n(7548),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(0,i.Z)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),s=n(834),c=n(4660),d=n(4418),p=l,u=function(e){return"theme"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:u},m=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},g=function e(t,n){var i,a,l=t.__emotion_real===t,p=l&&t.__emotion_base||t;void 0!==n&&(i=n.label,a=n.target);var u=m(t,n,l),g=u||f(p),h=!g("as");return function(){var y=arguments,b=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&b.push("label:"+i+";"),null==y[0]||void 0===y[0].raw)b.push.apply(b,y);else{0,b.push(y[0][0]);for(var v=y.length,k=1;k<v;k++)b.push(y[k],y[0][k])}var x=(0,s.w)((function(e,t,n){var r=h&&e.as||p,i="",l=[],m=e;if(null==e.theme){for(var y in m={},e)m[y]=e[y];m.theme=(0,o.useContext)(s.T)}"string"==typeof e.className?i=(0,c.f)(t.registered,l,e.className):null!=e.className&&(i=e.className+" ");var v=(0,d.O)(b.concat(l),t.registered,m);(0,c.M)(t,v,"string"==typeof r);i+=t.key+"-"+v.name,void 0!==a&&(i+=" "+a);var k=h&&void 0===u?f(r):g,x={};for(var _ in e)h&&"as"===_||k(_)&&(x[_]=e[_]);return x.className=i,x.ref=n,(0,o.createElement)(r,x)}));return x.displayName=void 0!==i?i:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=p,x.__emotion_styles=b,x.__emotion_forwardProp=u,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,o){return e(t,(0,r.Z)({},n,o,{shouldForwardProp:m(x,o,!0)})).apply(void 0,b)},x}}},2146:function(e,t,n){function r(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"]);return r=function(){return e},e}t.Z=void 0;var o=(0,n(3431).css)(r());t.Z=o},5214:function(e,t,n){n.d(t,{Z:function(){return m}});n(7294);var r=n(6771),o=n(3431);var i=(0,r.Z)("footer",{target:"eh8okj12"})({name:"1b5k876",styles:"padding:30px 0;text-align:center;border-top:1px solid #ccc;background:#eee;& a{color:#666;}"}),a=((0,r.Z)("a",{target:"eh8okj11"})({name:"re09at",styles:"font-size:2rem;&:hover{color:#333;}"}),(0,r.Z)("p",{target:"eh8okj10"})({name:"yt1q3h",styles:"padding-top:8px;font-size:0.8rem;color:#666"})),l=function(e){return(0,o.jsx)(i,{id:"footer"},(0,o.jsx)(a,null,"Copyright © BY GyeongLog 2021"))},s=n(2146),c=(0,o.css)(s.Z,';body{font-family:"Noto Sans Kr";}a{color:#3333;text-decoration:none;}@media print{#header{display:none;}#footer{display:none;}}',"");var d=function(e){return(0,o.jsx)(o.Global,{styles:c})};var p=(0,r.Z)("header",{target:"e1cbifli1"})({name:"p3g41d",styles:"padding:20px 0;border-bottom:1px solid #eee"}),u=(0,r.Z)("h1",{target:"e1cbifli0"})({name:"1k5ey5y",styles:"letter-spacing:2px;text-align:center;font-size:1.25rem;color:#666"}),f=function(){return(0,o.jsx)(p,{id:"header"},(0,o.jsx)("a",{href:"/"},(0,o.jsx)(u,null,"GyeongLog")))};var m=function(e){var t=e.children;return(0,o.jsx)("div",null,(0,o.jsx)(d,null),(0,o.jsx)(f,null),t,(0,o.jsx)(l,null))}}}]);
//# sourceMappingURL=75539b7a473e2f065c61d52e525219f6c94ed5fd-14034ecd941e2085ffb4.js.map