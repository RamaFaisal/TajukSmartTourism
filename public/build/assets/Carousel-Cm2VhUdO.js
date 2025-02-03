import{r as b,j}from"./app-Cq7dhWiT.js";const X="Left",Y="Right",C="Up",B="Down",O={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},D={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},L="mousemove",R="mouseup",K="touchend",_="touchmove",$="touchstart";function A(c,r,s,i){return c>r?s>0?Y:X:i>0?B:C}function z(c,r){if(r===0)return c;const s=Math.PI/180*r,i=c[0]*Math.cos(s)+c[1]*Math.sin(s),a=c[1]*Math.cos(s)-c[0]*Math.sin(s);return[i,a]}function F(c,r){const s=n=>{const t="touches"in n;t&&n.touches.length>1||c((e,o)=>{o.trackMouse&&!t&&(document.addEventListener(L,i),document.addEventListener(R,m));const{clientX:l,clientY:g}=t?n.touches[0]:n,f=z([l,g],o.rotationAngle);return o.onTouchStartOrOnMouseDown&&o.onTouchStartOrOnMouseDown({event:n}),Object.assign(Object.assign(Object.assign({},e),D),{initial:f.slice(),xy:f,start:n.timeStamp||0})})},i=n=>{c((t,e)=>{const o="touches"in n;if(o&&n.touches.length>1)return t;if(n.timeStamp-t.start>e.swipeDuration)return t.swiping?Object.assign(Object.assign({},t),{swiping:!1}):t;const{clientX:l,clientY:g}=o?n.touches[0]:n,[f,E]=z([l,g],e.rotationAngle),T=f-t.xy[0],p=E-t.xy[1],v=Math.abs(T),w=Math.abs(p),M=(n.timeStamp||0)-t.start,N=Math.sqrt(v*v+w*w)/(M||1),P=[T/(M||1),p/(M||1)],U=A(v,w,T,p),k=typeof e.delta=="number"?e.delta:e.delta[U.toLowerCase()]||O.delta;if(v<k&&w<k&&!t.swiping)return t;const x={absX:v,absY:w,deltaX:T,deltaY:p,dir:U,event:n,first:t.first,initial:t.initial,velocity:N,vxvy:P};x.first&&e.onSwipeStart&&e.onSwipeStart(x),e.onSwiping&&e.onSwiping(x);let y=!1;return(e.onSwiping||e.onSwiped||e[`onSwiped${U}`])&&(y=!0),y&&e.preventScrollOnSwipe&&e.trackTouch&&n.cancelable&&n.preventDefault(),Object.assign(Object.assign({},t),{first:!1,eventData:x,swiping:!0})})},a=n=>{c((t,e)=>{let o;if(t.swiping&&t.eventData){if(n.timeStamp-t.start<e.swipeDuration){o=Object.assign(Object.assign({},t.eventData),{event:n}),e.onSwiped&&e.onSwiped(o);const l=e[`onSwiped${o.dir}`];l&&l(o)}}else e.onTap&&e.onTap({event:n});return e.onTouchEndOrOnMouseUp&&e.onTouchEndOrOnMouseUp({event:n}),Object.assign(Object.assign(Object.assign({},t),D),{eventData:o})})},u=()=>{document.removeEventListener(L,i),document.removeEventListener(R,m)},m=n=>{u(),a(n)},h=(n,t)=>{let e=()=>{};if(n&&n.addEventListener){const o=Object.assign(Object.assign({},O.touchEventOptions),t.touchEventOptions),l=[[$,s,o],[_,i,Object.assign(Object.assign({},o),t.preventScrollOnSwipe?{passive:!1}:{})],[K,a,o]];l.forEach(([g,f,E])=>n.addEventListener(g,f,E)),e=()=>l.forEach(([g,f])=>n.removeEventListener(g,f))}return e},d={ref:n=>{n!==null&&c((t,e)=>{if(t.el===n)return t;const o={};return t.el&&t.el!==n&&t.cleanUpTouch&&(t.cleanUpTouch(),o.cleanUpTouch=void 0),e.trackTouch&&n&&(o.cleanUpTouch=h(n,e)),Object.assign(Object.assign(Object.assign({},t),{el:n}),o)})}};return r.trackMouse&&(d.onMouseDown=s),[d,h]}function G(c,r,s,i){return!r.trackTouch||!c.el?(c.cleanUpTouch&&c.cleanUpTouch(),Object.assign(Object.assign({},c),{cleanUpTouch:void 0})):c.cleanUpTouch?r.preventScrollOnSwipe!==s.preventScrollOnSwipe||r.touchEventOptions.passive!==s.touchEventOptions.passive?(c.cleanUpTouch(),Object.assign(Object.assign({},c),{cleanUpTouch:i(c.el,r)})):c:Object.assign(Object.assign({},c),{cleanUpTouch:i(c.el,r)})}function V(c){const{trackMouse:r}=c,s=b.useRef(Object.assign({},D)),i=b.useRef(Object.assign({},O)),a=b.useRef(Object.assign({},i.current));a.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},O),c);let u;for(u in O)i.current[u]===void 0&&(i.current[u]=O[u]);const[m,h]=b.useMemo(()=>F(S=>s.current=S(s.current,i.current),{trackMouse:r}),[r]);return s.current=G(s.current,i.current,a.current,h),m}const I=["https://drive.google.com/thumbnail?id=1iUFsaecxCYEbc60h9l6Sm2VOJuKy_tnE&sz=w2000","https://drive.google.com/thumbnail?id=12_5kV2kbcMarszeGgDiLv7dDX3UVeBK_&sz=w2000","https://drive.google.com/thumbnail?id=1bsUBzBF7_pbMg_qCmymPkkK8gj29x2Qx&sz=w2000","https://drive.google.com/thumbnail?id=114fGKGqQf6djYIP-JL2Ks-3DzSRLovn9&sz=w2000","https://drive.google.com/thumbnail?id=1k9vBYV43kBww9T_NSgxFdfd7hzEnXRdZ&sz=w2000"],q=()=>{const[c,r]=b.useState(0),s=I.length,i=b.useRef(null),a=()=>{r(d=>(d-1+s)%s)},u=()=>{r(d=>(d+1)%s)},m=V({onSwipedLeft:()=>{u(),S()},onSwipedRight:()=>{a(),S()},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),h=()=>{i.current=setInterval(u,5e3)},S=()=>{clearInterval(i.current),h()};return b.useEffect(()=>(h(),()=>clearInterval(i.current)),[]),j.jsxs("div",{...m,className:"fixed w-full h-full flex flex-col overflow-hidden",children:[j.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-60 z-10"}),j.jsx("div",{className:"flex transition-transform duration-1000 ease-in-out z-0",style:{transform:`translateX(-${c*100}%)`},children:I.map((d,n)=>j.jsx("div",{className:"w-full h-[550px] md:h-full lg:h-[790px] md:h-[790px] flex-shrink-0",children:j.jsx("img",{src:d,alt:`Slide ${n+1}`,className:"w-full h-full object-cover"})},n))})]})},J=q;export{J as C};
