import{g as wa,R as $t,j as l,a as x,r as J}from"./app-B_sRZSyL.js";function dt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(a),!0).forEach(function(n){O(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(e)}function ka(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Aa(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Na(e,t,a){return t&&Aa(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function et(e,t){return Oa(e)||Sa(e,t)||Yt(e,t)||Ta()}function me(e){return ja(e)||Pa(e)||Yt(e)||Ea()}function ja(e){if(Array.isArray(e))return $e(e)}function Oa(e){if(Array.isArray(e))return e}function Pa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sa(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,s;try{for(a=a.call(e);!(r=(o=a.next()).done)&&(n.push(o.value),!(t&&n.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return n}}function Yt(e,t){if(e){if(typeof e=="string")return $e(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $e(e,t)}}function $e(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Ea(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ta(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vt=function(){},tt={},Ut={},Wt=null,Ht={mark:vt,measure:vt};try{typeof window<"u"&&(tt=window),typeof document<"u"&&(Ut=document),typeof MutationObserver<"u"&&(Wt=MutationObserver),typeof performance<"u"&&(Ht=performance)}catch{}var Ia=tt.navigator||{},ht=Ia.userAgent,pt=ht===void 0?"":ht,Y=tt,y=Ut,bt=Wt,he=Ht;Y.document;var D=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Gt=~pt.indexOf("MSIE")||~pt.indexOf("Trident/"),pe,be,ge,ye,xe,L="___FONT_AWESOME___",Ye=16,Kt="fa",Bt="svg-inline--fa",V="data-fa-i2svg",Ue="data-fa-pseudo-element",Ca="data-fa-pseudo-element-pending",at="data-prefix",nt="data-icon",gt="fontawesome-i2svg",_a="async",Ma=["HTML","HEAD","STYLE","SCRIPT"],Xt=function(){try{return!0}catch{return!1}}(),g="classic",w="sharp",rt=[g,w];function de(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[g]}})}var se=de((pe={},O(pe,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(pe,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pe)),le=de((be={},O(be,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(be,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),be)),fe=de((ge={},O(ge,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(ge,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ge)),La=de((ye={},O(ye,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(ye,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ye)),Ra=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Vt="fa-layers-text",za=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Da=de((xe={},O(xe,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(xe,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xe)),qt=[1,2,3,4,5,6,7,8,9,10],Fa=qt.concat([11,12,13,14,15,16,17,18,19,20]),$a=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ce=new Set;Object.keys(le[g]).map(ce.add.bind(ce));Object.keys(le[w]).map(ce.add.bind(ce));var Ya=[].concat(rt,me(ce),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(qt.map(function(e){return"".concat(e,"x")})).concat(Fa.map(function(e){return"w-".concat(e)})),ie=Y.FontAwesomeConfig||{};function Ua(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(y&&typeof y.querySelector=="function"){var Ha=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ha.forEach(function(e){var t=et(e,2),a=t[0],n=t[1],r=Wa(Ua(a));r!=null&&(ie[n]=r)})}var Jt={styleDefault:"solid",familyDefault:"classic",cssPrefix:Kt,replacementClass:Bt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ie.familyPrefix&&(ie.cssPrefix=ie.familyPrefix);var ae=m(m({},Jt),ie);ae.autoReplaceSvg||(ae.observeMutations=!1);var v={};Object.keys(Jt).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){ae[e]=a,oe.forEach(function(n){return n(v)})},get:function(){return ae[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,oe.forEach(function(a){return a(v)})},get:function(){return ae.cssPrefix}});Y.FontAwesomeConfig=v;var oe=[];function Ga(e){return oe.push(e),function(){oe.splice(oe.indexOf(e),1)}}var $=Ye,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ka(e){if(!(!e||!D)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=y.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return y.head.insertBefore(t,n),e}}var Ba="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ue(){for(var e=12,t="";e-- >0;)t+=Ba[Math.random()*62|0];return t}function ne(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function it(e){return e.classList?ne(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xa(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Qt(e[a]),'" ')},"").trim()}function Te(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function ot(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function Va(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:f,path:u}}function qa(e){var t=e.transform,a=e.width,n=a===void 0?Ye:a,r=e.height,i=r===void 0?Ye:r,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&Gt?f+="translate(".concat(t.x/$-n/2,"em, ").concat(t.y/$-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):f+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),f+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Ja=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zt(){var e=Kt,t=Bt,a=v.cssPrefix,n=v.replacementClass,r=Ja;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var yt=!1;function Le(){v.autoAddCss&&!yt&&(Ka(Zt()),yt=!0)}var Qa={mixout:function(){return{dom:{css:Zt,insertCss:Le}}},hooks:function(){return{beforeDOMElementCreation:function(){Le()},beforeI2svg:function(){Le()}}}},R=Y||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var C=R[L],ea=[],Za=function e(){y.removeEventListener("DOMContentLoaded",e),Pe=1,ea.map(function(t){return t()})},Pe=!1;D&&(Pe=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Pe||y.addEventListener("DOMContentLoaded",Za));function en(e){D&&(Pe?setTimeout(e,0):ea.push(e))}function ve(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Qt(e):"<".concat(t," ").concat(Xa(n),">").concat(i.map(ve).join(""),"</").concat(t,">")}function xt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Re=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=a,f,u,c;for(n===void 0?(f=1,c=t[i[0]]):(f=0,c=n);f<o;f++)u=i[f],c=s(c,t[u],u,t);return c};function tn(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=e.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function We(e){var t=tn(e);return t.length===1?t[0].toString(16):null}function an(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function wt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function He(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=wt(t);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(e,wt(t)):C.styles[e]=m(m({},C.styles[e]||{}),i),e==="fas"&&He("fa",t)}var we,ke,Ae,Q=C.styles,nn=C.shims,rn=(we={},O(we,g,Object.values(fe[g])),O(we,w,Object.values(fe[w])),we),st=null,ta={},aa={},na={},ra={},ia={},on=(ke={},O(ke,g,Object.keys(se[g])),O(ke,w,Object.keys(se[w])),ke);function sn(e){return~Ya.indexOf(e)}function ln(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!sn(r)?r:null}var oa=function(){var t=function(i){return Re(Q,function(o,s,f){return o[f]=Re(s,i,{}),o},{})};ta=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),aa=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ia=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in Q||v.autoFetchSvg,n=Re(nn,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});na=n.names,ra=n.unicodes,st=Ie(v.styleDefault,{family:v.familyDefault})};Ga(function(e){st=Ie(e.styleDefault,{family:v.familyDefault})});oa();function lt(e,t){return(ta[e]||{})[t]}function fn(e,t){return(aa[e]||{})[t]}function X(e,t){return(ia[e]||{})[t]}function sa(e){return na[e]||{prefix:null,iconName:null}}function cn(e){var t=ra[e],a=lt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function U(){return st}var ft=function(){return{prefix:null,iconName:null,rest:[]}};function Ie(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?g:a,r=se[n][e],i=le[n][e]||le[n][r],o=e in C.styles?e:null;return i||o||null}var kt=(Ae={},O(Ae,g,Object.keys(fe[g])),O(Ae,w,Object.keys(fe[w])),Ae);function Ce(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(t={},O(t,g,"".concat(v.cssPrefix,"-").concat(g)),O(t,w,"".concat(v.cssPrefix,"-").concat(w)),t),o=null,s=g;(e.includes(i[g])||e.some(function(u){return kt[g].includes(u)}))&&(s=g),(e.includes(i[w])||e.some(function(u){return kt[w].includes(u)}))&&(s=w);var f=e.reduce(function(u,c){var d=ln(v.cssPrefix,c);if(Q[c]?(c=rn[s].includes(c)?La[s][c]:c,o=c,u.prefix=c):on[s].indexOf(c)>-1?(o=c,u.prefix=Ie(c,{family:s})):d?u.iconName=d:c!==v.replacementClass&&c!==i[g]&&c!==i[w]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var h=o==="fa"?sa(u.iconName):{},b=X(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||b||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Q.far&&Q.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},ft());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(Q.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var un=function(){function e(){ka(this,e),this.definitions={}}return Na(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=m(m({},a.definitions[s]||{}),o[s]),He(s,o[s]);var f=fe[g][s];f&&He(f,o[s]),oa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][f]=u}),a}}]),e}(),At=[],Z={},te={},mn=Object.keys(te);function dn(e,t){var a=t.mixoutsTo;return At=e,Z={},Object.keys(te).forEach(function(n){mn.indexOf(n)===-1&&delete te[n]}),At.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),Oe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}n.provides&&n.provides(te)}),a}function Ge(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Z[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function q(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Z[e]||[];r.forEach(function(i){i.apply(null,a)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,t):void 0}function Ke(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||U();if(t)return t=X(a,t)||t,xt(la.definitions,a,t)||xt(C.styles,a,t)}var la=new un,vn=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,q("noAuto")},hn={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(q("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,en(function(){bn({autoReplaceSvgRoot:a}),q("watch",t)})}},pn={icon:function(t){if(t===null)return null;if(Oe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:X(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ie(t[0]);return{prefix:n,iconName:X(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Ra))){var r=Ce(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:X(i,t)||t}}}},I={noAuto:vn,config:v,dom:hn,parse:pn,library:la,findIconDefinition:Ke,toHtml:ve},bn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?y:a;(Object.keys(C.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&I.dom.i2svg({node:n})};function _e(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ve(n)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var n=y.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function gn(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ot(o)&&a.found&&!n.found){var s=a.width,f=a.height,u={x:s/f/2,y:.5};r.style=Te(m(m({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function yn(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:n}]}]}function ct(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,u=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,b=h===void 0?!1:h,A=n.found?n:a,E=A.width,N=A.height,P=r==="fak",k=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),j={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(N)})},T=P&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/N*16*.0625,"em")}:{};b&&(j.attributes[V]=""),f&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(c||ue())},children:[f]}),delete j.attributes.title);var S=m(m({},j),{},{prefix:r,iconName:i,main:a,mask:n,maskId:u,transform:o,symbol:s,styles:m(m({},T),d.styles)}),H=n.found&&a.found?z("generateAbstractMask",S)||{children:[],attributes:{}}:z("generateAbstractIcon",S)||{children:[],attributes:{}},G=H.children,Me=H.attributes;return S.children=G,S.attributes=Me,s?yn(S):gn(S)}function Nt(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,u=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[V]="");var c=m({},o.styles);ot(r)&&(c.transform=qa({transform:r,startCentered:!0,width:a,height:n}),c["-webkit-transform"]=c.transform);var d=Te(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function xn(e){var t=e.content,a=e.title,n=e.extra,r=m(m(m({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=Te(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var ze=C.styles;function Be(e){var t=e[0],a=e[1],n=e.slice(4),r=et(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var wn={found:!1,width:512,height:512};function kn(e,t){!Xt&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xe(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=U()),new Promise(function(n,r){if(z("missingIconAbstract"),a==="fa"){var i=sa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ze[t]&&ze[t][e]){var o=ze[t][e];return n(Be(o))}kn(e,t),n(m(m({},wn),{},{icon:v.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var jt=function(){},Ve=v.measurePerformance&&he&&he.mark&&he.measure?he:{mark:jt,measure:jt},re='FA "6.5.2"',An=function(t){return Ve.mark("".concat(re," ").concat(t," begins")),function(){return fa(t)}},fa=function(t){Ve.mark("".concat(re," ").concat(t," ends")),Ve.measure("".concat(re," ").concat(t),"".concat(re," ").concat(t," begins"),"".concat(re," ").concat(t," ends"))},ut={begin:An,end:fa},Ne=function(){};function Ot(e){var t=e.getAttribute?e.getAttribute(V):null;return typeof t=="string"}function Nn(e){var t=e.getAttribute?e.getAttribute(at):null,a=e.getAttribute?e.getAttribute(nt):null;return t&&a}function jn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function On(){if(v.autoReplaceSvg===!0)return je.replace;var e=je[v.autoReplaceSvg];return e||je.replace}function Pn(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function Sn(e){return y.createElement(e)}function ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Pn:Sn:a;if(typeof e=="string")return y.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(ca(o,{ceFn:n}))}),r}function En(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var je={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(ca(r),a)}),a.getAttribute(V)===null&&v.keepOriginalSource){var n=y.createComment(En(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~it(a).indexOf(v.replacementClass))return je.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return ve(s)}).join(`
`);a.setAttribute(V,""),a.innerHTML=o}};function Pt(e){e()}function ua(e,t){var a=typeof t=="function"?t:Ne;if(e.length===0)a();else{var n=Pt;v.mutateApproach===_a&&(n=Y.requestAnimationFrame||Pt),n(function(){var r=On(),i=ut.begin("mutate");e.map(r),i(),a()})}}var mt=!1;function ma(){mt=!0}function qe(){mt=!1}var Se=null;function St(e){if(bt&&v.observeMutations){var t=e.treeCallback,a=t===void 0?Ne:t,n=e.nodeCallback,r=n===void 0?Ne:n,i=e.pseudoElementsCallback,o=i===void 0?Ne:i,s=e.observeMutationsRoot,f=s===void 0?y:s;Se=new bt(function(u){if(!mt){var c=U();ne(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ot(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ot(d.target)&&~$a.indexOf(d.attributeName))if(d.attributeName==="class"&&Nn(d.target)){var h=Ce(it(d.target)),b=h.prefix,A=h.iconName;d.target.setAttribute(at,b||c),A&&d.target.setAttribute(nt,A)}else jn(d.target)&&r(d.target)})}}),D&&Se.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tn(){Se&&Se.disconnect()}function In(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function Cn(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Ce(it(e));return r.prefix||(r.prefix=U()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=fn(r.prefix,e.innerText)||lt(r.prefix,We(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function _n(e){var t=ne(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return v.autoA11y&&(a?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(n||ue()):(t["aria-hidden"]="true",t.focusable="false")),t}function Mn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Cn(e),n=a.iconName,r=a.prefix,i=a.rest,o=_n(e),s=Ge("parseNodeAttributes",{},e),f=t.styleParser?In(e):[];return m({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ln=C.styles;function da(e){var t=v.autoReplaceSvg==="nest"?Et(e,{styleParser:!1}):Et(e);return~t.extra.classes.indexOf(Vt)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}var W=new Set;rt.map(function(e){W.add("fa-".concat(e))});Object.keys(se[g]).map(W.add.bind(W));Object.keys(se[w]).map(W.add.bind(W));W=me(W);function Tt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=y.documentElement.classList,n=function(d){return a.add("".concat(gt,"-").concat(d))},r=function(d){return a.remove("".concat(gt,"-").concat(d))},i=v.autoFetchSvg?W:rt.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ln));i.includes("fa")||i.push("fa");var o=[".".concat(Vt,":not([").concat(V,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ne(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var f=ut.begin("onTree"),u=s.reduce(function(c,d){try{var h=da(d);h&&c.push(h)}catch(b){Xt||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){ua(h,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),f(),c()})}).catch(function(h){f(),d(h)})})}function Rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;da(e).then(function(a){a&&ua([a],t)})}function zn(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ke(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ke(r||{})),e(n,m(m({},a),{},{mask:r}))}}var Dn=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?M:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.title,h=d===void 0?null:d,b=a.titleId,A=b===void 0?null:b,E=a.classes,N=E===void 0?[]:E,P=a.attributes,k=P===void 0?{}:P,j=a.styles,T=j===void 0?{}:j;if(t){var S=t.prefix,H=t.iconName,G=t.icon;return _e(m({type:"icon"},t),function(){return q("beforeDOMElementCreation",{iconDefinition:t,params:a}),v.autoA11y&&(h?k["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(A||ue()):(k["aria-hidden"]="true",k.focusable="false")),ct({icons:{main:Be(G),mask:f?Be(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:m(m({},M),r),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:k,styles:T,classes:N}})})}},Fn={mixout:function(){return{icon:zn(Dn)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Tt,a.nodeCallback=Rn,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?y:n,i=a.callback,o=i===void 0?function(){}:i;return Tt(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,o=n.titleId,s=n.prefix,f=n.transform,u=n.symbol,c=n.mask,d=n.maskId,h=n.extra;return new Promise(function(b,A){Promise.all([Xe(r,s),c.iconName?Xe(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var N=et(E,2),P=N[0],k=N[1];b([a,ct({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=Te(s);f.length>0&&(r.style=f);var u;return ot(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},$n={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return _e({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(me(i)).join(" ")},children:o}]})}}}},Yn={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,f=n.attributes,u=f===void 0?{}:f,c=n.styles,d=c===void 0?{}:c;return _e({type:"counter",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:n}),xn({content:a.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(me(s))}})})}}}},Un={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?M:r,o=n.title,s=o===void 0?null:o,f=n.classes,u=f===void 0?[]:f,c=n.attributes,d=c===void 0?{}:c,h=n.styles,b=h===void 0?{}:h;return _e({type:"text",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:n}),Nt({content:a,transform:m(m({},M),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(me(u))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,i=n.transform,o=n.extra,s=null,f=null;if(Gt){var u=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();s=c.width/u,f=c.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Nt({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Wn=new RegExp('"',"ug"),It=[1105920,1112319];function Hn(e){var t=e.replace(Wn,""),a=an(t,0),n=a>=It[0]&&a<=It[1],r=t.length===2?t[0]===t[1]:!1;return{value:We(r?t[0]:t),isSecondary:n||r}}function Ct(e,t){var a="".concat(Ca).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=ne(e.children),o=i.filter(function(G){return G.getAttribute(Ue)===t})[0],s=Y.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(za),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),n();if(f&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?w:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?le[h][f[2].toLowerCase()]:Da[h][u],A=Hn(d),E=A.value,N=A.isSecondary,P=f[0].startsWith("FontAwesome"),k=lt(b,E),j=k;if(P){var T=cn(E);T.iconName&&T.prefix&&(k=T.iconName,b=T.prefix)}if(k&&!N&&(!o||o.getAttribute(at)!==b||o.getAttribute(nt)!==j)){e.setAttribute(a,j),o&&e.removeChild(o);var S=Mn(),H=S.extra;H.attributes[Ue]=t,Xe(k,b).then(function(G){var Me=ct(m(m({},S),{},{icons:{main:G,mask:ft()},prefix:b,iconName:j,extra:H,watchable:!0})),F=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=Me.map(function(xa){return ve(xa)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Gn(e){return Promise.all([Ct(e,"::before"),Ct(e,"::after")])}function Kn(e){return e.parentNode!==document.head&&!~Ma.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ue)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _t(e){if(D)return new Promise(function(t,a){var n=ne(e.querySelectorAll("*")).filter(Kn).map(Gn),r=ut.begin("searchPseudoElements");ma(),Promise.all(n).then(function(){r(),qe(),t()}).catch(function(){r(),qe(),a()})})}var Bn={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=_t,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?y:n;v.searchPseudoElements&&_t(r)}}},Mt=!1,Xn={mixout:function(){return{dom:{unwatch:function(){ma(),Mt=!0}}}},hooks:function(){return{bootstrap:function(){St(Ge("mutationObserverCallbacks",{}))},noAuto:function(){Tn()},watch:function(a){var n=a.observeMutationsRoot;Mt?qe():St(Ge("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Lt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Vn={mixout:function(){return{parse:{transform:function(a){return Lt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Lt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:h};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),b.path)}]}]}}}},De={x:0,y:0,width:"100%",height:"100%"};function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qn(e){return e.tag==="g"?e.children:[e]}var Jn={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?Ce(r.split(" ").map(function(o){return o.trim()})):ft();return i.prefix||(i.prefix=U()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,u=i.width,c=i.icon,d=o.width,h=o.icon,b=Va({transform:f,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:m(m({},De),{},{fill:"white"})},E=c.children?{children:c.children.map(Rt)}:{},N={tag:"g",attributes:m({},b.inner),children:[Rt(m({tag:c.tag,attributes:m(m({},c.attributes),b.path)},E))]},P={tag:"g",attributes:m({},b.outer),children:[N]},k="mask-".concat(s||ue()),j="clip-".concat(s||ue()),T={tag:"mask",attributes:m(m({},De),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,P]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:qn(h)},T]};return n.push(S,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(k,")")},De)}),{children:n,attributes:r}}}},Qn={provides:function(t){var a=!1;Y.matchMedia&&(a=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Zn={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},er=[Qa,Fn,$n,Yn,Un,Bn,Xn,Vn,Jn,Qn,Zn];dn(er,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Je=I.parse;I.findIconDefinition;I.toHtml;var tr=I.icon;I.layer;I.text;I.counter;var va={exports:{}},ar="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nr=ar,rr=nr;function ha(){}function pa(){}pa.resetWarningCache=ha;var ir=function(){function e(n,r,i,o,s,f){if(f!==rr){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:pa,resetWarningCache:ha};return a.PropTypes=a,a};va.exports=ir();var or=va.exports;const p=wa(or);function zt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?zt(Object(a),!0).forEach(function(n){ee(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):zt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Ee(e){"@babel/helpers - typeof";return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ee(e)}function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function sr(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function lr(e,t){if(e==null)return{};var a=sr(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Qe(e){return fr(e)||cr(e)||ur(e)||mr()}function fr(e){if(Array.isArray(e))return Ze(e)}function cr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ur(e,t){if(e){if(typeof e=="string")return Ze(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ze(e,t)}}function Ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function mr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(e){var t,a=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,b=e.inverse,A=e.border,E=e.listItem,N=e.flip,P=e.size,k=e.rotation,j=e.pull,T=(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":b,"fa-border":A,"fa-li":E,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},ee(t,"fa-".concat(P),typeof P<"u"&&P!==null),ee(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),ee(t,"fa-pull-".concat(j),typeof j<"u"&&j!==null),ee(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function vr(e){return e=e-0,e===e}function ba(e){return vr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,a){return a?a.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var hr=["style"];function pr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function br(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=ba(a.slice(0,n)),i=a.slice(n+1).trim();return r.startsWith("webkit")?t[pr(r)]=i:t[r]=i,t},{})}function ga(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(f){return ga(e,f)}),r=Object.keys(t.attributes||{}).reduce(function(f,u){var c=t.attributes[u];switch(u){case"class":f.attrs.className=c,delete t.attributes.class;break;case"style":f.attrs.style=br(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=c:f.attrs[ba(u)]=c}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=lr(a,hr);return r.attrs.style=_(_({},r.attrs.style),o),e.apply(void 0,[t.tag,_(_({},r.attrs),s)].concat(Qe(n)))}var ya=!1;try{ya=!0}catch{}function gr(){if(!ya&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e){if(e&&Ee(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Je.icon)return Je.icon(e);if(e===null)return null;if(e&&Ee(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ee({},e,t):{}}var Ft={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},K=$t.forwardRef(function(e,t){var a=_(_({},Ft),e),n=a.icon,r=a.mask,i=a.symbol,o=a.className,s=a.title,f=a.titleId,u=a.maskId,c=Dt(n),d=Fe("classes",[].concat(Qe(dr(a)),Qe((o||"").split(" ")))),h=Fe("transform",typeof a.transform=="string"?Je.transform(a.transform):a.transform),b=Fe("mask",Dt(r)),A=tr(c,_(_(_(_({},d),h),b),{},{symbol:i,title:s,titleId:f,maskId:u}));if(!A)return gr("Could not find icon",c),null;var E=A.abstract,N={ref:t};return Object.keys(a).forEach(function(P){Ft.hasOwnProperty(P)||(N[P]=a[P])}),yr(E[0],N)});K.displayName="FontAwesomeIcon";K.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var yr=ga.bind(null,$t.createElement),xr={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]},wr={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},kr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ar={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Nr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const jr=()=>l.jsx("div",{className:"w-full font-sans",children:l.jsxs("footer",{className:"flex text-white flex-wrap justify-between bg-hijauNew",children:[l.jsxs("div",{className:"flex flex-col items-start w-full md:w-1/3 p-5 lg:pl-20",children:[l.jsxs("div",{className:"flex flex-col justify-center items-center lg:items-start lg:justify-start w-full mb-10 lg:mb-2",children:[l.jsx("img",{className:"w-auto h-20 mb-4",src:"/Logo.png",alt:"TajukSmartTourismLogo"}),l.jsx("h1",{className:"text-xl text-center",children:"Tajuk Smart Tourism - Tajuk"})]}),l.jsxs("p",{className:"text-sm lg:text-lg mb-2",children:[l.jsx("strong",{children:"Alamat: "}),"Tajuk Kec. Getasan, Kabupaten Semarang Jawa Tengah 50774"]}),l.jsxs("p",{className:"text-sm lg:text-lg mb-2",children:[l.jsx("strong",{children:"Telepon:"}),l.jsxs("a",{href:"https://wa.me/6283831597088",target:"_blank",children:[" ","083831597088"]})]})]}),l.jsxs("div",{className:"flex flex-col items-center md:items-start justify-start w-full md:w-1/3 lg:w-1/4 p-5",children:[l.jsx("p",{className:"text-lg lg:text-4xl font-bold text-center md:text-left",children:"Jelajahi Keindahan Temukan Ketenangan"}),l.jsx("br",{}),l.jsx("h4",{className:"text-sm lg:text-lg mb-3",children:"Ikuti Kami"}),l.jsxs("div",{className:"flex space-x-3 lg:space-x-5",children:[l.jsx("a",{href:"https://www.facebook.com/login.php/",target:"_blank",rel:"noopener noreferrer",children:l.jsx(K,{icon:xr,className:"text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"})}),l.jsx("a",{href:"",children:l.jsx(K,{icon:Nr,className:"text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"})}),l.jsx(K,{icon:kr,className:"text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"}),l.jsx(K,{icon:wr,className:"text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"}),l.jsx(K,{icon:Ar,className:"text-white cursor-pointer hover:text-aqua text-xl lg:text-2xl"})]})]}),l.jsx("div",{className:"flex flex-col items-center lg:justify-start md:items-end lg:items-start mb-5 w-full md:w-1/3 lg:w-1/4 p-5 text-center md:text-right lg:text-left",children:l.jsxs("div",{className:"flex flex-row md:flex-col flex-wrap justify-center md:justify-start space-x-4 md:space-x-0 md:space-y-4",children:[l.jsx(x,{className:"text-sm lg:text-lg mb-2 md:mb-0 hover:text-color1",href:"/ProfileDesa",children:"Tentang Kami"}),l.jsx("span",{className:"block md:hidden",children:" /"}),l.jsx(x,{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1",href:"404.html",children:"Informasi"}),l.jsx("span",{className:"block md:hidden",children:" /"}),l.jsx(x,{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1",href:"/DungKluruk",children:"Destinasi"}),l.jsx("span",{className:"block md:hidden",children:" /"}),l.jsx("a",{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1",href:"/PasarJawi",children:"Event"}),l.jsx("span",{className:"block md:hidden",children:" /"}),l.jsx("a",{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1",href:"/Paket",children:"Paket"}),l.jsx("span",{className:"block md:hidden",children:" /"}),l.jsx("a",{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-color1",href:"/admin",target:"_blank",rel:"noopener noreferrer",children:"Login"})]})}),l.jsx("div",{className:"w-full flex justify-center items-center bg-black bg-opacity-20 p-4",children:l.jsx("p",{className:"text-sm text-center text-white",children:"© 2024, Tajuk Smart Tourism - Tajuk X Udinus"})})]})}),Pr=jr;function Sr(){const[e,t]=J.useState(!1),[a,n]=J.useState(!1),[r,i]=J.useState(null),o=J.useRef(null),s=()=>{t(!e)},f=()=>{window.scrollY>50?n(!0):n(!1)},u=c=>{o.current&&!o.current.contains(c.target)&&setIsDropdownOpen(!1)};return J.useEffect(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)})),J.useEffect(()=>(window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}),[]),l.jsxs(l.Fragment,{children:[e&&l.jsx("div",{className:"fixed inset-0 bg-white opacity-50 z-40",onClick:()=>t(!1)}),l.jsx("div",{className:`navbar-main fixed top-0 w-full z-50 shadow-outline transition-colors duration-1 ${a?"bg-hijauNew shadow-lg":"bg-hijauNew opacity-85 shadow-lg"}`,children:l.jsxs("div",{className:"navbar lg:px-20 text-black fontFamily-sans",children:[l.jsxs("div",{className:"navbar-start",children:[l.jsxs("div",{className:"dropdown",ref:o,children:[l.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",onClick:s,children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),l.jsxs("ul",{tabIndex:0,className:`menu menu-2xl dropdown-content z-50 shadow w-52 h-screen bg-colorBg ${e?"block":"hidden"}`,style:{left:"-1rem",top:"3.5rem"},children:[l.jsx("li",{children:l.jsx(x,{className:"font-bold text-black",href:"/",children:"Home"})}),l.jsx("li",{children:l.jsxs("details",{children:[l.jsx("summary",{className:"whitespace-normal break-words font-bold text-black",children:"Destinasi"}),l.jsxs("ul",{className:"p-2",children:[l.jsx("li",{children:l.jsx(x,{href:"/Destinasi/DungKluruk",children:"DungKluruk"})}),l.jsx("li",{children:l.jsx(x,{href:"/Destinasi/Sokowolu",children:"Sokowolu"})}),l.jsx("li",{children:l.jsx(x,{href:"/Destinasi/Ngaduman",children:"Ngaduman"})}),l.jsx("li",{children:l.jsx(x,{href:"/Destinasi/GPass",children:"G-Pass"})})]})]})}),l.jsx("li",{children:l.jsx(x,{className:"whitespace-normal break-words font-bold",href:"/Paket",children:"Paket"})}),l.jsx("li",{children:l.jsxs("details",{children:[l.jsx("summary",{className:"whitespace-normal break-words font-bold",children:"Informasi"}),l.jsxs("ul",{className:"p-2",children:[l.jsx("li",{children:l.jsx("a",{className:"whitespace-normal break-words",href:"/Informasi/Berita",children:"Berita"})}),l.jsx("li",{children:l.jsx(x,{className:"whitespace-normal break-words",href:"/Informasi/Gallery",children:"Galeri"})}),l.jsx("li",{children:l.jsx(x,{className:"whitespace-normal break-words",href:"/Informasi/Produk",children:"Produk"})})]})]})}),l.jsx("li",{children:l.jsxs("details",{children:[l.jsx("summary",{className:"whitespace-normal break-words font-bold",children:"Tentang Kami"}),l.jsxs("ul",{className:"p-2",children:[l.jsx("li",{children:l.jsx(x,{className:"whitespace-normal break-words px-4",href:"/TentangKami/ProfileDesa",children:l.jsx("span",{children:"Profil Desa"})})}),l.jsx("li",{children:l.jsx("a",{className:"whitespace-normal break words",href:"/TentangKami/Geografi",children:"Geografi"})})]})]})}),l.jsx("li",{children:l.jsx(x,{className:"whitespace-normal break-words font-bold",href:"/Contacts",children:"Kontak Kami"})})]})]}),l.jsx(x,{className:"text-xl",href:"/",children:l.jsx("img",{src:"/Logo.png",alt:"Logo Tajuk",className:"h-8 md:h-10 lg:h-12"})})]}),l.jsx("div",{className:"navbar-center hidden text-white lg:flex font-serif",children:l.jsxs("ul",{className:"menu menu-horizontal px-1",children:[l.jsx("li",{className:"font-bold ",onMouseEnter:()=>i("home"),onMouseLeave:()=>i(null),children:l.jsx(x,{className:"hover:bg-putih hover:text-black",href:"/",children:"Home"})}),l.jsx("li",{className:` ${r==="destinasi"?"text-white":""}`,onMouseEnter:()=>i("destinasi"),onMouseLeave:()=>i(null),children:l.jsxs("details",{open:r==="destinasi",children:[l.jsx("summary",{className:"hover:text-black hover:bg-putih font-bold",children:"Destinasi"}),l.jsxs("ul",{className:"w-auto top-5 left-5 bg-green-100 rounded-none text-black",children:[l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih",href:"/Destinasi/DungKluruk",children:"DungKluruk"})}),l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih",href:"/Destinasi/Sokowolu",children:"Sokowolu"})}),l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih",href:"/Destinasi/Ngaduman",children:"Ngaduman"})}),l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih",href:"/Destinasi/GPass",children:"G-Pass"})})]})]})}),l.jsx("li",{className:`font-bold ${r==="paket"?"text-white":""}`,onMouseEnter:()=>i("paket"),onMouseLeave:()=>i(null),children:l.jsx(x,{className:"hover:bg-putih hover:text-black",href:"/Paket",children:"Paket"})}),l.jsx("li",{className:` ${r==="informasi"?"text-white":""}`,onMouseEnter:()=>i("informasi"),onMouseLeave:()=>i(null),children:l.jsxs("details",{open:r==="informasi",children:[l.jsx("summary",{className:"whitespace-normal break-words font-bold hover:bg-putih hover:text-black",children:"Informasi"}),l.jsxs("ul",{className:"w-auto bg-green-100 top-5 left-5 rounded-none text-black",children:[l.jsx("li",{children:l.jsx("a",{className:"hover:bg-putih whitespace-normal break-words",href:"/Informasi/Berita",children:"Berita"})}),l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih whitespace-normal break-words",href:"/Informasi/Gallery",children:"Galeri"})}),l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih whitespace-normal break-words",href:"/Informasi/Produk",children:"Produk"})})]})]})}),l.jsx("li",{className:` ${r==="tentangKami"?"text-white":""}`,onMouseEnter:()=>i("tentangKami"),onMouseLeave:()=>i(null),children:l.jsxs("details",{open:r==="tentangKami",children:[l.jsx("summary",{className:"hover:bg-putih hover:text-black font-bold",children:"Tentang Kami"}),l.jsxs("ul",{className:"w-auto top-5 left-5 bg-green-100 rounded-none text-black",children:[l.jsx("li",{children:l.jsx(x,{className:"hover:bg-putih whitespace-normal break-words",href:"/TentangKami/ProfileDesa",children:"Profil Desa"})}),l.jsx("li",{children:l.jsx("a",{className:"hover:bg-putih whitespace-normal break-words",href:"/TentangKami/Geografi",children:"Geografi"})})]})]})}),l.jsx("li",{onMouseEnter:()=>i("kontakKami"),onMouseLeave:()=>i(null),children:l.jsx(x,{className:"hover:bg-putih font-bold hover:text-black",href:"/Contacts",children:"Kontak Kami"})})]})}),l.jsx("div",{className:"navbar-end",children:l.jsx("a",{className:"btn",href:"https://feby-akliji23.github.io/AR-BETA_V01/",children:"AR"})})]})})]})}export{Pr as F,Sr as N};
