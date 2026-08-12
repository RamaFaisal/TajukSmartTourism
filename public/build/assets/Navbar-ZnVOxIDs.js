import{g as Oa,R as Ue,j as f,a as G,r as at,q as ja}from"./app-DKHcW9hj.js";function de(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?de(Object(a),!0).forEach(function(n){O(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jt(t)}function Sa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pa(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Ea(t,e,a){return e&&Pa(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function te(t,e){return Ca(t)||_a(t,e)||He(t,e)||Ra()}function mt(t){return Ta(t)||Ia(t)||He(t)||La()}function Ta(t){if(Array.isArray(t))return $t(t)}function Ca(t){if(Array.isArray(t))return t}function Ia(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _a(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(n.push(o.value),!(e&&n.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return n}}function He(t,e){if(t){if(typeof t=="string")return $t(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $t(t,e)}}function $t(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function La(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ra(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ve=function(){},ee={},Ge={},Be=null,Ke={mark:ve,measure:ve};try{typeof window<"u"&&(ee=window),typeof document<"u"&&(Ge=document),typeof MutationObserver<"u"&&(Be=MutationObserver),typeof performance<"u"&&(Ke=performance)}catch{}var Ma=ee.navigator||{},pe=Ma.userAgent,be=pe===void 0?"":pe,$=ee,y=Ge,he=Be,pt=Ke;$.document;var z=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Xe=~be.indexOf("MSIE")||~be.indexOf("Trident/"),bt,ht,gt,yt,xt,L="___FONT_AWESOME___",Yt=16,Ve="fa",qe="svg-inline--fa",X="data-fa-i2svg",Wt="data-fa-pseudo-element",za="data-fa-pseudo-element-pending",ae="data-prefix",ne="data-icon",ge="fontawesome-i2svg",Da="async",Fa=["HTML","HEAD","STYLE","SCRIPT"],Ze=function(){try{return!0}catch{return!1}}(),g="classic",x="sharp",re=[g,x];function dt(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[g]}})}var st=dt((bt={},O(bt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(bt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bt)),lt=dt((ht={},O(ht,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(ht,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ht)),ft=dt((gt={},O(gt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(gt,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gt)),$a=dt((yt={},O(yt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(yt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yt)),Ya=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Je="fa-layers-text",Wa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ua=dt((xt={},O(xt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(xt,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xt)),Qe=[1,2,3,4,5,6,7,8,9,10],Ha=Qe.concat([11,12,13,14,15,16,17,18,19,20]),Ga=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(lt[g]).map(ct.add.bind(ct));Object.keys(lt[x]).map(ct.add.bind(ct));var Ba=[].concat(re,mt(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Qe.map(function(t){return"".concat(t,"x")})).concat(Ha.map(function(t){return"w-".concat(t)})),rt=$.FontAwesomeConfig||{};function Ka(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Va=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Va.forEach(function(t){var e=te(t,2),a=e[0],n=e[1],r=Xa(Ka(a));r!=null&&(rt[n]=r)})}var ta={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ve,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var tt=m(m({},ta),rt);tt.autoReplaceSvg||(tt.observeMutations=!1);var v={};Object.keys(ta).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(a){tt[t]=a,it.forEach(function(n){return n(v)})},get:function(){return tt[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){tt.cssPrefix=e,it.forEach(function(a){return a(v)})},get:function(){return tt.cssPrefix}});$.FontAwesomeConfig=v;var it=[];function qa(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var F=Yt,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Za(t){if(!(!t||!z)){var e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=y.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return y.head.insertBefore(e,n),t}}var Ja="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var t=12,e="";t-- >0;)e+=Ja[Math.random()*62|0];return e}function et(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function ie(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ea(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qa(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(ea(t[a]),'" ')},"").trim()}function Tt(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function oe(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function tn(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function en(t){var e=t.transform,a=t.width,n=a===void 0?Yt:a,r=t.height,i=r===void 0?Yt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Xe?l+="translate(".concat(e.x/F-n/2,"em, ").concat(e.y/F-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):l+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),l+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var an=`:root, :host {
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
}`;function aa(){var t=Ve,e=qe,a=v.cssPrefix,n=v.replacementClass,r=an;if(a!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var ye=!1;function Rt(){v.autoAddCss&&!ye&&(Za(aa()),ye=!0)}var nn={mixout:function(){return{dom:{css:aa,insertCss:Rt}}},hooks:function(){return{beforeDOMElementCreation:function(){Rt()},beforeI2svg:function(){Rt()}}}},R=$||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var C=R[L],na=[],rn=function t(){y.removeEventListener("DOMContentLoaded",t),St=1,na.map(function(e){return e()})},St=!1;z&&(St=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),St||y.addEventListener("DOMContentLoaded",rn));function on(t){z&&(St?setTimeout(t,0):na.push(t))}function vt(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ea(t):"<".concat(e," ").concat(Qa(n),">").concat(i.map(vt).join(""),"</").concat(e,">")}function xe(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var Mt=function(e,a,n,r){var i=Object.keys(e),o=i.length,s=a,l,c,u;for(n===void 0?(l=1,u=e[i[0]]):(l=0,u=n);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function sn(t){for(var e=[],a=0,n=t.length;a<n;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=t.charCodeAt(a++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),a--)}else e.push(r)}return e}function Ut(t){var e=sn(t);return e.length===1?e[0].toString(16):null}function ln(t,e){var a=t.length,n=t.charCodeAt(e),r;return n>=55296&&n<=56319&&a>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function we(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Ht(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=we(e);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,we(e)):C.styles[t]=m(m({},C.styles[t]||{}),i),t==="fas"&&Ht("fa",e)}var wt,kt,At,q=C.styles,fn=C.shims,cn=(wt={},O(wt,g,Object.values(ft[g])),O(wt,x,Object.values(ft[x])),wt),se=null,ra={},ia={},oa={},sa={},la={},un=(kt={},O(kt,g,Object.keys(st[g])),O(kt,x,Object.keys(st[x])),kt);function mn(t){return~Ba.indexOf(t)}function dn(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!mn(r)?r:null}var fa=function(){var e=function(i){return Mt(q,function(o,s,l){return o[l]=Mt(s,i,{}),o},{})};ra=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),ia=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),la=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in q||v.autoFetchSvg,n=Mt(fn,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});oa=n.names,sa=n.unicodes,se=Ct(v.styleDefault,{family:v.familyDefault})};qa(function(t){se=Ct(t.styleDefault,{family:v.familyDefault})});fa();function le(t,e){return(ra[t]||{})[e]}function vn(t,e){return(ia[t]||{})[e]}function K(t,e){return(la[t]||{})[e]}function ca(t){return oa[t]||{prefix:null,iconName:null}}function pn(t){var e=sa[t],a=le("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y(){return se}var fe=function(){return{prefix:null,iconName:null,rest:[]}};function Ct(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?g:a,r=st[n][t],i=lt[n][t]||lt[n][r],o=t in C.styles?t:null;return i||o||null}var ke=(At={},O(At,g,Object.keys(ft[g])),O(At,x,Object.keys(ft[x])),At);function It(t){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(e={},O(e,g,"".concat(v.cssPrefix,"-").concat(g)),O(e,x,"".concat(v.cssPrefix,"-").concat(x)),e),o=null,s=g;(t.includes(i[g])||t.some(function(c){return ke[g].includes(c)}))&&(s=g),(t.includes(i[x])||t.some(function(c){return ke[x].includes(c)}))&&(s=x);var l=t.reduce(function(c,u){var d=dn(v.cssPrefix,u);if(q[u]?(u=cn[s].includes(u)?$a[s][u]:u,o=u,c.prefix=u):un[s].indexOf(u)>-1?(o=u,c.prefix=Ct(u,{family:s})):d?c.iconName=d:u!==v.replacementClass&&u!==i[g]&&u!==i[x]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var p=o==="fa"?ca(c.iconName):{},h=K(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||h||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!q.far&&q.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},fe());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(q.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Y()||"fas"),l}var bn=function(){function t(){Sa(this,t),this.definitions={}}return Ea(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=m(m({},a.definitions[s]||{}),o[s]),Ht(s,o[s]);var l=ft[g][s];l&&Ht(l,o[s]),fa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];a[s]||(a[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(a[s][d]=c)}),a[s][l]=c}),a}}]),t}(),Ae=[],Z={},Q={},hn=Object.keys(Q);function gn(t,e){var a=e.mixoutsTo;return Ae=t,Z={},Object.keys(Q).forEach(function(n){hn.indexOf(n)===-1&&delete Q[n]}),Ae.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),jt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}n.provides&&n.provides(Q)}),a}function Gt(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(n))}),e}function V(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=Z[t]||[];r.forEach(function(i){i.apply(null,a)})}function M(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,e):void 0}function Bt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||Y();if(e)return e=K(a,e)||e,xe(ua.definitions,a,e)||xe(C.styles,a,e)}var ua=new bn,yn=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,V("noAuto")},xn={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(V("beforeI2svg",e),M("pseudoElements2svg",e),M("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,on(function(){kn({autoReplaceSvgRoot:a}),V("watch",e)})}},wn={icon:function(e){if(e===null)return null;if(jt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ct(e[0]);return{prefix:n,iconName:K(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(Ya))){var r=It(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=Y();return{prefix:i,iconName:K(i,e)||e}}}},T={noAuto:yn,config:v,dom:xn,parse:wn,library:ua,findIconDefinition:Bt,toHtml:vt},kn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?y:a;(Object.keys(C.styles).length>0||v.autoFetchSvg)&&z&&v.autoReplaceSvg&&T.dom.i2svg({node:n})};function _t(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return vt(n)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var n=y.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function An(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(oe(o)&&a.found&&!n.found){var s=a.width,l=a.height,c={x:s/l/2,y:.5};r.style=Tt(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Nn(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:n}]}]}function ce(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,p=t.watchable,h=p===void 0?!1:p,k=n.found?n:a,P=k.width,A=k.height,j=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),N={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(A)})},E=j&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/A*16*.0625,"em")}:{};h&&(N.attributes[X]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||ut())},children:[l]}),delete N.attributes.title);var S=m(m({},N),{},{prefix:r,iconName:i,main:a,mask:n,maskId:c,transform:o,symbol:s,styles:m(m({},E),d.styles)}),U=n.found&&a.found?M("generateAbstractMask",S)||{children:[],attributes:{}}:M("generateAbstractIcon",S)||{children:[],attributes:{}},H=U.children,Lt=U.attributes;return S.children=H,S.attributes=Lt,s?Nn(S):An(S)}function Ne(t){var e=t.content,a=t.width,n=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[X]="");var u=m({},o.styles);oe(r)&&(u.transform=en({transform:r,startCentered:!0,width:a,height:n}),u["-webkit-transform"]=u.transform);var d=Tt(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function On(t){var e=t.content,a=t.title,n=t.extra,r=m(m(m({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=Tt(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var zt=C.styles;function Kt(t){var e=t[0],a=t[1],n=t.slice(4),r=te(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:a,icon:o}}var jn={found:!1,width:512,height:512};function Sn(t,e){!Ze&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Xt(t,e){var a=e;return e==="fa"&&v.styleDefault!==null&&(e=Y()),new Promise(function(n,r){if(M("missingIconAbstract"),a==="fa"){var i=ca(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&zt[e]&&zt[e][t]){var o=zt[e][t];return n(Kt(o))}Sn(t,e),n(m(m({},jn),{},{icon:v.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var Oe=function(){},Vt=v.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Oe,measure:Oe},nt='FA "6.5.2"',Pn=function(e){return Vt.mark("".concat(nt," ").concat(e," begins")),function(){return ma(e)}},ma=function(e){Vt.mark("".concat(nt," ").concat(e," ends")),Vt.measure("".concat(nt," ").concat(e),"".concat(nt," ").concat(e," begins"),"".concat(nt," ").concat(e," ends"))},ue={begin:Pn,end:ma},Nt=function(){};function je(t){var e=t.getAttribute?t.getAttribute(X):null;return typeof e=="string"}function En(t){var e=t.getAttribute?t.getAttribute(ae):null,a=t.getAttribute?t.getAttribute(ne):null;return e&&a}function Tn(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Cn(){if(v.autoReplaceSvg===!0)return Ot.replace;var t=Ot[v.autoReplaceSvg];return t||Ot.replace}function In(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function _n(t){return y.createElement(t)}function da(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?In:_n:a;if(typeof t=="string")return y.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(da(o,{ceFn:n}))}),r}function Ln(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ot={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(da(r),a)}),a.getAttribute(X)===null&&v.keepOriginalSource){var n=y.createComment(Ln(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~ie(a).indexOf(v.replacementClass))return Ot.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return vt(s)}).join(`
`);a.setAttribute(X,""),a.innerHTML=o}};function Se(t){t()}function va(t,e){var a=typeof e=="function"?e:Nt;if(t.length===0)a();else{var n=Se;v.mutateApproach===Da&&(n=$.requestAnimationFrame||Se),n(function(){var r=Cn(),i=ue.begin("mutate");t.map(r),i(),a()})}}var me=!1;function pa(){me=!0}function qt(){me=!1}var Pt=null;function Pe(t){if(he&&v.observeMutations){var e=t.treeCallback,a=e===void 0?Nt:e,n=t.nodeCallback,r=n===void 0?Nt:n,i=t.pseudoElementsCallback,o=i===void 0?Nt:i,s=t.observeMutationsRoot,l=s===void 0?y:s;Pt=new he(function(c){if(!me){var u=Y();et(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!je(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&je(d.target)&&~Ga.indexOf(d.attributeName))if(d.attributeName==="class"&&En(d.target)){var p=It(ie(d.target)),h=p.prefix,k=p.iconName;d.target.setAttribute(ae,h||u),k&&d.target.setAttribute(ne,k)}else Tn(d.target)&&r(d.target)})}}),z&&Pt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rn(){Pt&&Pt.disconnect()}function Mn(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function zn(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=It(ie(t));return r.prefix||(r.prefix=Y()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=vn(r.prefix,t.innerText)||le(r.prefix,Ut(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Dn(t){var e=et(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return v.autoA11y&&(a?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(n||ut()):(e["aria-hidden"]="true",e.focusable="false")),e}function Fn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=zn(t),n=a.iconName,r=a.prefix,i=a.rest,o=Dn(t),s=Gt("parseNodeAttributes",{},t),l=e.styleParser?Mn(t):[];return m({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var $n=C.styles;function ba(t){var e=v.autoReplaceSvg==="nest"?Ee(t,{styleParser:!1}):Ee(t);return~e.extra.classes.indexOf(Je)?M("generateLayersText",t,e):M("generateSvgReplacementMutation",t,e)}var W=new Set;re.map(function(t){W.add("fa-".concat(t))});Object.keys(st[g]).map(W.add.bind(W));Object.keys(st[x]).map(W.add.bind(W));W=mt(W);function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=y.documentElement.classList,n=function(d){return a.add("".concat(ge,"-").concat(d))},r=function(d){return a.remove("".concat(ge,"-").concat(d))},i=v.autoFetchSvg?W:re.map(function(u){return"fa-".concat(u)}).concat(Object.keys($n));i.includes("fa")||i.push("fa");var o=[".".concat(Je,":not([").concat(X,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ue.begin("onTree"),c=s.reduce(function(u,d){try{var p=ba(d);p&&u.push(p)}catch(h){Ze||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(p){va(p,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(p){l(),d(p)})})}function Yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ba(t).then(function(a){a&&va([a],e)})}function Wn(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Bt(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Bt(r||{})),t(n,m(m({},a),{},{mask:r}))}}var Un=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?_:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,c=a.maskId,u=c===void 0?null:c,d=a.title,p=d===void 0?null:d,h=a.titleId,k=h===void 0?null:h,P=a.classes,A=P===void 0?[]:P,j=a.attributes,w=j===void 0?{}:j,N=a.styles,E=N===void 0?{}:N;if(e){var S=e.prefix,U=e.iconName,H=e.icon;return _t(m({type:"icon"},e),function(){return V("beforeDOMElementCreation",{iconDefinition:e,params:a}),v.autoA11y&&(p?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(k||ut()):(w["aria-hidden"]="true",w.focusable="false")),ce({icons:{main:Kt(H),mask:l?Kt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:U,transform:m(m({},_),r),symbol:o,title:p,maskId:u,titleId:k,extra:{attributes:w,styles:E,classes:A}})})}},Hn={mixout:function(){return{icon:Wn(Un)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Te,a.nodeCallback=Yn,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?y:n,i=a.callback,o=i===void 0?function(){}:i;return Te(r,o)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,o=n.titleId,s=n.prefix,l=n.transform,c=n.symbol,u=n.mask,d=n.maskId,p=n.extra;return new Promise(function(h,k){Promise.all([Xt(r,s),u.iconName?Xt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var A=te(P,2),j=A[0],w=A[1];h([a,ce({icons:{main:j,mask:w},prefix:s,iconName:r,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(k)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=Tt(s);l.length>0&&(r.style=l);var c;return oe(o)&&(c=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},Gn={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Bn={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,u=n.styles,d=u===void 0?{}:u;return _t({type:"counter",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:n}),On({content:a.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Kn={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_:r,o=n.title,s=o===void 0?null:o,l=n.classes,c=l===void 0?[]:l,u=n.attributes,d=u===void 0?{}:u,p=n.styles,h=p===void 0?{}:p;return _t({type:"text",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:n}),Ne({content:a,transform:m(m({},_),i),title:s,extra:{attributes:d,styles:h,classes:["".concat(v.cssPrefix,"-layers-text")].concat(mt(c))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.title,i=n.transform,o=n.extra,s=null,l=null;if(Xe){var c=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();s=u.width/c,l=u.height/c}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Ne({content:a.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Xn=new RegExp('"',"ug"),Ce=[1105920,1112319];function Vn(t){var e=t.replace(Xn,""),a=ln(e,0),n=a>=Ce[0]&&a<=Ce[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ut(r?e[0]:e),isSecondary:n||r}}function Ie(t,e){var a="".concat(za).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var i=et(t.children),o=i.filter(function(H){return H.getAttribute(Wt)===e})[0],s=$.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Wa),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),n();if(l&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?x:g,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?lt[p][l[2].toLowerCase()]:Ua[p][c],k=Vn(d),P=k.value,A=k.isSecondary,j=l[0].startsWith("FontAwesome"),w=le(h,P),N=w;if(j){var E=pn(P);E.iconName&&E.prefix&&(w=E.iconName,h=E.prefix)}if(w&&!A&&(!o||o.getAttribute(ae)!==h||o.getAttribute(ne)!==N)){t.setAttribute(a,N),o&&t.removeChild(o);var S=Fn(),U=S.extra;U.attributes[Wt]=e,Xt(w,h).then(function(H){var Lt=ce(m(m({},S),{},{icons:{main:H,mask:fe()},prefix:h,iconName:N,extra:U,watchable:!0})),D=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=Lt.map(function(Na){return vt(Na)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function qn(t){return Promise.all([Ie(t,"::before"),Ie(t,"::after")])}function Zn(t){return t.parentNode!==document.head&&!~Fa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _e(t){if(z)return new Promise(function(e,a){var n=et(t.querySelectorAll("*")).filter(Zn).map(qn),r=ue.begin("searchPseudoElements");pa(),Promise.all(n).then(function(){r(),qt(),e()}).catch(function(){r(),qt(),a()})})}var Jn={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=_e,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?y:n;v.searchPseudoElements&&_e(r)}}},Le=!1,Qn={mixout:function(){return{dom:{unwatch:function(){pa(),Le=!0}}}},hooks:function(){return{bootstrap:function(){Pe(Gt("mutationObserverCallbacks",{}))},noAuto:function(){Rn()},watch:function(a){var n=a.observeMutationsRoot;Le?qt():Pe(Gt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Re=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},tr={mixout:function(){return{parse:{transform:function(a){return Re(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Re(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),h.path)}]}]}}}},Dt={x:0,y:0,width:"100%",height:"100%"};function Me(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function er(t){return t.tag==="g"?t.children:[t]}var ar={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?It(r.split(" ").map(function(o){return o.trim()})):fe();return i.prefix||(i.prefix=Y()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,c=i.width,u=i.icon,d=o.width,p=o.icon,h=tn({transform:l,containerWidth:d,iconWidth:c}),k={tag:"rect",attributes:m(m({},Dt),{},{fill:"white"})},P=u.children?{children:u.children.map(Me)}:{},A={tag:"g",attributes:m({},h.inner),children:[Me(m({tag:u.tag,attributes:m(m({},u.attributes),h.path)},P))]},j={tag:"g",attributes:m({},h.outer),children:[A]},w="mask-".concat(s||ut()),N="clip-".concat(s||ut()),E={tag:"mask",attributes:m(m({},Dt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,j]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:er(p)},E]};return n.push(S,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(w,")")},Dt)}),{children:n,attributes:r}}}},nr={provides:function(e){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},rr={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},ir=[nn,Hn,Gn,Bn,Kn,Jn,Qn,tr,ar,nr,rr];gn(ir,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Zt=T.parse;T.findIconDefinition;T.toHtml;var or=T.icon;T.layer;T.text;T.counter;var ha={exports:{}},sr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lr=sr,fr=lr;function ga(){}function ya(){}ya.resetWarningCache=ga;var cr=function(){function t(n,r,i,o,s,l){if(l!==fr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ya,resetWarningCache:ga};return a.PropTypes=a,a};ha.exports=cr();var ur=ha.exports;const b=Oa(ur);function ze(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ze(Object(a),!0).forEach(function(n){J(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ze(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function J(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function mr(t,e){if(t==null)return{};var a={},n=Object.keys(t),r,i;for(i=0;i<n.length;i++)r=n[i],!(e.indexOf(r)>=0)&&(a[r]=t[r]);return a}function dr(t,e){if(t==null)return{};var a=mr(t,e),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function Jt(t){return vr(t)||pr(t)||br(t)||hr()}function vr(t){if(Array.isArray(t))return Qt(t)}function pr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function br(t,e){if(t){if(typeof t=="string")return Qt(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Qt(t,e)}}function Qt(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gr(t){var e,a=t.beat,n=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,p=t.fixedWidth,h=t.inverse,k=t.border,P=t.listItem,A=t.flip,j=t.size,w=t.rotation,N=t.pull,E=(e={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":h,"fa-border":k,"fa-li":P,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},J(e,"fa-".concat(j),typeof j<"u"&&j!==null),J(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),J(e,"fa-pull-".concat(N),typeof N<"u"&&N!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function yr(t){return t=t-0,t===t}function xa(t){return yr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var xr=["style"];function wr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function kr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,a){var n=a.indexOf(":"),r=xa(a.slice(0,n)),i=a.slice(n+1).trim();return r.startsWith("webkit")?e[wr(r)]=i:e[r]=i,e},{})}function wa(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(l){return wa(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=kr(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[xa(c)]=u}return l},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=dr(a,xr);return r.attrs.style=I(I({},r.attrs.style),o),t.apply(void 0,[e.tag,I(I({},r.attrs),s)].concat(Jt(n)))}var ka=!1;try{ka=!0}catch{}function Ar(){if(!ka&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function De(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zt.icon)return Zt.icon(t);if(t===null)return null;if(t&&Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ft(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}var Fe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ot=Ue.forwardRef(function(t,e){var a=I(I({},Fe),t),n=a.icon,r=a.mask,i=a.symbol,o=a.className,s=a.title,l=a.titleId,c=a.maskId,u=De(n),d=Ft("classes",[].concat(Jt(gr(a)),Jt((o||"").split(" ")))),p=Ft("transform",typeof a.transform=="string"?Zt.transform(a.transform):a.transform),h=Ft("mask",De(r)),k=or(u,I(I(I(I({},d),p),h),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!k)return Ar("Could not find icon",u),null;var P=k.abstract,A={ref:e};return Object.keys(a).forEach(function(j){Fe.hasOwnProperty(j)||(A[j]=a[j])}),Nr(P[0],A)});ot.displayName="FontAwesomeIcon";ot.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};var Nr=wa.bind(null,Ue.createElement),Or={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},jr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Sr={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Pr=()=>f.jsx("div",{className:"w-full font-sans",children:f.jsxs("footer",{className:"flex text-white flex-wrap justify-between bg-primary",children:[f.jsxs("div",{className:"flex flex-col items-start w-full md:w-1/3 p-5 lg:pl-20",children:[f.jsxs("div",{className:"flex flex-col justify-center items-center lg:items-start lg:justify-start w-full mb-10 lg:mb-2",children:[f.jsx("a",{href:"/",children:f.jsx("img",{className:"w-auto h-20 mb-4",src:"/Logo.png",alt:"TajukSmartTourismLogo"})}),f.jsx("h1",{className:"text-xl text-center",children:"Tajuk Smart Tourism - Tajuk"})]}),f.jsxs("p",{className:"text-sm lg:text-lg mb-2",children:[f.jsx("strong",{children:"Alamat: "}),"Tajuk Kec. Getasan, Kabupaten Semarang Jawa Tengah 50774"]}),f.jsxs("p",{className:"text-sm lg:text-lg mb-2",children:[f.jsx("strong",{children:"Telepon:"}),f.jsxs("a",{href:"https://wa.me/6283831597088",target:"_blank",children:[" ","083831597088"]})]})]}),f.jsxs("div",{className:"flex flex-col items-center md:items-start justify-start w-full md:w-1/3 lg:w-1/4 p-5",children:[f.jsx("p",{className:"text-lg lg:text-4xl font-bold text-center md:text-left",children:"Jelajahi Keindahan Temukan Ketenangan"}),f.jsx("br",{}),f.jsx("h4",{className:"text-sm lg:text-lg mb-3",children:"Ikuti Kami"}),f.jsxs("div",{className:"flex space-x-3 lg:space-x-5",children:[f.jsx("a",{href:"https://www.instagram.com/tajuksmarttourism.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",target:"_blank",children:f.jsx(ot,{icon:jr,className:"text-white cursor-pointer hover:text-accent text-xl lg:text-2xl"})}),f.jsx("a",{href:"https://www.tiktok.com/@tstbemfik?is_from_webapp=1&sender_device=pc",target:"_blank",children:f.jsx(ot,{icon:Or,className:"text-white cursor-pointer hover:text-accent text-xl lg:text-2xl"})}),f.jsx("a",{href:"https://www.youtube.com/@TajukSmartTourism",target:"_blank",children:f.jsx(ot,{icon:Sr,className:"text-white cursor-pointer hover:text-accent text-xl lg:text-2xl"})})]})]}),f.jsx("div",{className:"flex flex-col items-center lg:justify-start md:items-end lg:items-start mb-5 w-full md:w-1/3 lg:w-1/4 p-5 text-center md:text-right lg:text-left",children:f.jsxs("div",{className:"flex flex-row md:flex-col flex-wrap justify-center md:justify-start space-x-2 md:space-x-0 md:space-y-4",children:[f.jsx(G,{className:"text-sm lg:text-lg mb-2 md:mb-0 hover:text-accent",href:"/TentangKami/ProfileDesa",children:"Tentang Kami"}),f.jsx("span",{className:"block md:hidden",children:" /"}),f.jsx(G,{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-accent",href:"/Informasi/Berita",children:"Informasi"}),f.jsx("span",{className:"block md:hidden",children:" /"}),f.jsx("a",{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-accent",href:"/Paket",children:"Paket"}),f.jsx("span",{className:"block md:hidden",children:" /"}),f.jsx("a",{className:"text-sm lg:text-lg mb-2 lg:mb-5 md:mb-0 hover:text-accent",href:"/admin",target:"_blank",rel:"noopener noreferrer",children:"Login"})]})}),f.jsx("div",{className:"w-full flex justify-center items-center bg-black bg-opacity-20 p-4",children:f.jsx("p",{className:"text-sm text-center text-white",children:"© 2024, Tajuk Smart Tourism - Tajuk X Udinus"})})]})}),Ir=Pr,$e="https://feby-akliji23.github.io/AR-BETA_V01/",Ye=[{label:"Home",href:"/",exact:!0},{label:"Destinasi",children:[{label:"DungKluruk",href:"/Destinasi/DungKluruk"},{label:"Sokowolu",href:"/Destinasi/Sokowolu"},{label:"Ngaduman",href:"/Destinasi/Ngaduman"},{label:"G-Pass",href:"/Destinasi/GPass"}]},{label:"Paket",href:"/Paket"},{label:"Informasi",children:[{label:"Berita",href:"/Informasi/Berita"},{label:"Galeri",href:"/Informasi/Gallery"},{label:"Produk",href:"/Informasi/Produk"}]},{label:"Tentang Kami",children:[{label:"Profil Desa",href:"/TentangKami/ProfileDesa"},{label:"Geografi",href:"/TentangKami/Geografi"}]},{label:"Kontak Kami",href:"/Contacts"}],Aa=({className:t=""})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:f.jsx("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})}),Er=({className:t=""})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:f.jsx("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})}),We=({className:t=""})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),Tr=({item:t,active:e,currentPath:a})=>f.jsxs("div",{className:"group relative",children:[f.jsxs("button",{type:"button",className:`inline-flex h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 font-medium transition-colors duration-200 ${e?"bg-white/15 font-semibold text-white":"text-white/85 group-hover:bg-white/10 group-hover:text-white"}`,children:[t.label,f.jsx(Aa,{className:`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${e?"text-accent":"text-white/60"}`})]}),f.jsx("div",{className:"invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",children:f.jsxs("div",{className:"relative rounded-2xl bg-primary p-2 shadow-xl shadow-black/30 ring-1 ring-white/10",children:[f.jsx("span",{className:"absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-white/10 bg-primary"}),f.jsx("p",{className:"px-4 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50",children:t.label}),f.jsx("ul",{className:"space-y-0.5",children:t.children.map(n=>f.jsx("li",{children:f.jsxs(G,{href:n.href,className:`group/item flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${a.startsWith(n.href)?"bg-white/15 font-semibold text-accent":"text-white/85 hover:bg-white/10 hover:text-white"}`,children:[f.jsx("span",{children:n.label}),f.jsx(Er,{className:"h-4 w-4 -translate-x-1 text-current opacity-0 transition-all duration-150 group-hover/item:translate-x-0 group-hover/item:opacity-100"})]})},n.href))})]})})]});function _r(){const[t,e]=at.useState(!1),[a,n]=at.useState(!1),{url:r}=ja(),i=r.split("?")[0],o=s=>s.children?s.children.some(l=>i.startsWith(l.href)):s.exact?i===s.href:i.startsWith(s.href);return at.useEffect(()=>{const s=()=>e(window.scrollY>40);return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),at.useEffect(()=>{n(!1)},[i]),at.useEffect(()=>{if(!a)return;const s=document.body.style.overflowY;document.body.style.overflowY="hidden";const l=c=>{c.key==="Escape"&&n(!1)};return window.addEventListener("keydown",l),()=>{document.body.style.overflowY=s,window.removeEventListener("keydown",l)}},[a]),f.jsxs(f.Fragment,{children:[a&&f.jsx("div",{className:"fade-in fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden",onClick:()=>n(!1)}),f.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 font-sans text-white transition-all duration-300 ${a?"bg-primary shadow-lg shadow-black/20":t?"bg-primary/95 shadow-lg shadow-black/20 backdrop-blur-md":"bg-gradient-to-b from-primary/90 via-primary/40 to-transparent"}`,children:[f.jsxs("div",{className:"navbar px-4 lg:px-10 xl:px-16",children:[f.jsxs("div",{className:"navbar-start",children:[f.jsx("button",{type:"button",onClick:()=>n(s=>!s),"aria-label":a?"Tutup menu":"Buka menu","aria-expanded":a,className:"inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 [@media(hover:hover)]:hover:bg-white/10 lg:hidden",children:f.jsxs("span",{className:"relative block h-3.5 w-5",children:[f.jsx("span",{className:`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${a?"top-1.5 rotate-45":""}`}),f.jsx("span",{className:`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${a?"opacity-0":""}`}),f.jsx("span",{className:`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${a?"top-1.5 -rotate-45":""}`})]})}),f.jsx(G,{href:"/",className:"ml-2 shrink-0 transition-transform duration-200 hover:scale-105",children:f.jsx("img",{src:"/Logo.png",alt:"Logo Tajuk",className:"h-10 lg:h-12"})})]}),f.jsx("div",{className:"navbar-center hidden lg:flex",children:f.jsx("nav",{"aria-label":"Menu utama",className:"flex items-center gap-1",children:Ye.map(s=>s.children?f.jsx(Tr,{item:s,active:o(s),currentPath:i},s.label):f.jsx(G,{href:s.href,className:`flex h-9 items-center justify-center whitespace-nowrap rounded-full px-3 font-medium transition-colors duration-200 ${o(s)?"bg-white/15 font-semibold text-white":"text-white/85 hover:bg-white/10 hover:text-white"}`,children:s.label},s.label))})}),f.jsx("div",{className:"navbar-end",children:f.jsxs("a",{href:$e,target:"_blank",rel:"noopener noreferrer","aria-label":"Fitur AR",className:"group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white hover:text-primary",children:[f.jsx(We,{className:"h-4 w-4 transition-transform duration-200 group-hover:scale-110"}),f.jsx("span",{className:"hidden sm:inline",children:"AR"})]})})]}),a&&f.jsxs("div",{className:"mobile-menu-panel absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto rounded-b-2xl border-t border-white/10 bg-primary text-white shadow-2xl shadow-black/30 lg:hidden",children:[f.jsx("ul",{className:"divide-y divide-white/10 py-2",children:Ye.map(s=>s.children?f.jsx("li",{children:f.jsxs("details",{open:o(s),children:[f.jsxs("summary",{className:`flex cursor-pointer items-center justify-between px-6 py-4 text-base transition-colors hover:bg-white/10 ${o(s)?"font-semibold text-accent":"font-medium text-white/85"}`,children:[s.label,f.jsx(Aa,{className:"nav-chevron h-4 w-4 text-white/60"})]}),f.jsx("ul",{className:"bg-black/15 pb-2",children:s.children.map(l=>f.jsx("li",{children:f.jsx(G,{href:l.href,onClick:()=>n(!1),className:`flex items-center px-8 py-3 text-[15px] transition-colors ${i.startsWith(l.href)?"bg-white/15 font-semibold text-accent":"font-medium text-white/75 hover:bg-white/10 hover:text-white"}`,children:l.label})},l.href))})]})},s.label):f.jsx("li",{children:f.jsx(G,{href:s.href,onClick:()=>n(!1),className:`flex items-center justify-between px-6 py-4 text-base transition-colors ${o(s)?"bg-white/15 font-semibold text-accent":"font-medium text-white/85 hover:bg-white/10 hover:text-white"}`,children:s.label})},s.label))}),f.jsx("div",{className:"border-t border-white/10 p-4",children:f.jsxs("a",{href:$e,target:"_blank",rel:"noopener noreferrer",className:"flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent",children:[f.jsx(We,{className:"h-4 w-4"}),"Coba Fitur AR"]})})]})]})]})}export{Ir as F,_r as N};
