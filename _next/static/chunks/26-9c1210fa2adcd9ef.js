"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6648:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(5601),o=n.n(r)},7138:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(231),o=n.n(r)},5601:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return u}});let r=n(9920),o=n(497),i=n(8173),a=r._(n(1241));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=i.Image},5835:function(e,t,n){let r,o,i,a,u,s,l,d,c,f,p,v;n.d(t,{OK:function(){return eK},v0:function(){return eU},td:function(){return e$},x4:function(){return eV},nP:function(){return eB}});let m=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},g=e=>e&&"window"in e&&e.window===e?e:m(e).defaultView||window;var b=n(2265);let h=null,y=new Set,E=new Map,w=!1,T=!1,P={Tab:!0,Escape:!0};function x(e,t){for(let n of y)n(e,t)}function F(e){var t,n;w=!0,e.metaKey||(t=/^Mac/i,!("undefined"!=typeof window&&null!=window.navigator&&t.test((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.platform)||window.navigator.platform))&&e.altKey)||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(h="keyboard",x("keyboard",e))}function A(e){h="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(w=!0,x("pointer",e))}function L(e){var t,n;(0===e.mozInputSource&&e.isTrusted?0:(t=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(n=window.navigator.userAgentData)||void 0===n?void 0:n.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent))&&e.pointerType)?"click"!==e.type||1!==e.buttons:0!==e.detail||e.pointerType)||(w=!0,h="virtual")}function S(e){e.target!==window&&e.target!==document&&(w||T||(h="virtual",x("virtual",e)),w=!1,T=!1)}function I(){w=!1,T=!0}function k(e){if("undefined"==typeof window||E.get(g(e)))return;let t=g(e),n=m(e),r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){w=!0,r.apply(this,arguments)},n.addEventListener("keydown",F,!0),n.addEventListener("keyup",F,!0),n.addEventListener("click",L,!0),t.addEventListener("focus",S,!0),t.addEventListener("blur",I,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",A,!0),n.addEventListener("pointermove",A,!0),n.addEventListener("pointerup",A,!0)):(n.addEventListener("mousedown",A,!0),n.addEventListener("mousemove",A,!0),n.addEventListener("mouseup",A,!0)),t.addEventListener("beforeunload",()=>{M(e)},{once:!0}),E.set(t,{focus:r})}let M=(e,t)=>{let n=g(e),r=m(e);t&&r.removeEventListener("DOMContentLoaded",t),E.has(n)&&(n.HTMLElement.prototype.focus=E.get(n).focus,r.removeEventListener("keydown",F,!0),r.removeEventListener("keyup",F,!0),r.removeEventListener("click",L,!0),n.removeEventListener("focus",S,!0),n.removeEventListener("blur",I,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",A,!0),r.removeEventListener("pointermove",A,!0),r.removeEventListener("pointerup",A,!0)):(r.removeEventListener("mousedown",A,!0),r.removeEventListener("mousemove",A,!0),r.removeEventListener("mouseup",A,!0)),E.delete(n))};function N(){return"pointer"!==h}"undefined"!=typeof document&&function(e){let t;let n=m(void 0);"loading"!==n.readyState?k(void 0):(t=()=>{k(void 0)},n.addEventListener("DOMContentLoaded",t)),()=>M(e,t)}();let O=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),C="undefined"!=typeof document?b.useLayoutEffect:()=>{};class D{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function H(e){let t=(0,b.useRef)({isFocused:!1,observer:null});C(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=function(e){let t=(0,b.useRef)(null);return C(()=>{t.current=e},[e]),(0,b.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}(t=>{null==e||e(t)});return(0,b.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new D("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function R(e={}){var t,n,r;let{autoFocus:o=!1,isTextInput:i,within:a}=e,u=(0,b.useRef)({isFocused:!1,isFocusVisible:o||N()}),[s,l]=(0,b.useState)(!1),[d,c]=(0,b.useState)(()=>u.current.isFocused&&u.current.isFocusVisible),f=(0,b.useCallback)(()=>c(u.current.isFocused&&u.current.isFocusVisible),[]),p=(0,b.useCallback)(e=>{u.current.isFocused=e,l(e),f()},[f]);t=e=>{u.current.isFocusVisible=e,f()},n=[],r={isTextInput:i},k(),(0,b.useEffect)(()=>{let e=(e,n)=>{(function(e,t,n){var r;let o="undefined"!=typeof window?g(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!=typeof window?g(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?g(null==n?void 0:n.target).HTMLElement:HTMLElement,u="undefined"!=typeof window?g(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!O.has(null==n?void 0:null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof i||(null==n?void 0:n.target)instanceof a&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof u&&!P[n.key])})(!!(null==r?void 0:r.isTextInput),e,n)&&t(N())};return y.add(e),()=>{y.delete(e)}},n);let{focusProps:v}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e,i=(0,b.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0},[r,o]),a=H(i),u=(0,b.useCallback)(e=>{let t=m(e.target);e.target===e.currentTarget&&t.activeElement===e.target&&(n&&n(e),o&&o(!0),a(e))},[o,n,a]);return{focusProps:{onFocus:!t&&(n||o||r)?u:void 0,onBlur:!t&&(r||o)?i:void 0}}}({isDisabled:a,onFocusChange:p}),{focusWithinProps:h}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,i=(0,b.useRef)({isFocusWithin:!1}),a=(0,b.useCallback)(e=>{i.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(e),o&&o(!1))},[n,o,i]),u=H(a),s=(0,b.useCallback)(e=>{i.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),o&&o(!0),i.current.isFocusWithin=!0,u(e))},[r,o,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:s,onBlur:a}}}({isDisabled:!a,onFocusWithinChange:p});return{isFocused:s,isFocusVisible:d,focusProps:a?h:v}}let j=!1,W=0;function _(){j=!0,setTimeout(()=>{j=!1},50)}function U(e){"touch"===e.pointerType&&_()}function $(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",U):document.addEventListener("touchend",_),W++,()=>{--W>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",U):document.removeEventListener("touchend",_))}}var B=Object.defineProperty,V=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t,n)=>(V(e,"symbol"!=typeof t?t+"":t,n),n);class q{constructor(){K(this,"current",this.detect()),K(this,"handoffState","pending"),K(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let G=new q;function z(e){return G.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function X(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}let Y=(e,t)=>{G.isServer?(0,b.useEffect)(e,t):(0,b.useLayoutEffect)(e,t)};function Z(e){let t=(0,b.useRef)(e);return Y(()=>{t.current=e},[e]),t}let J=function(e){let t=Z(e);return b.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])};function Q(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let ee=Symbol();function et(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=(0,b.useRef)(t);(0,b.useEffect)(()=>{r.current=t},[t]);let o=J(e=>{for(let t of r.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[ee]))?void 0:o}function en(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function er(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,er),i}var eo=((r=eo||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),ei=((o=ei||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function ea(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:i,visible:a=!0,name:u,mergeRefs:s}=e;s=null!=s?s:es;let l=el(n,t);if(a)return eu(l,r,o,u,s);let d=null!=i?i:0;if(2&d){let{static:e=!1,...t}=l;if(e)return eu(t,r,o,u,s)}if(1&d){let{unmount:e=!0,...t}=l;return er(e?0:1,{0:()=>null,1:()=>eu({...t,hidden:!0,style:{display:"none"}},r,o,u,s)})}return eu(l,r,o,u,s)}function eu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,{as:i=n,children:a,refName:u="ref",...s}=ep(e,["unmount","static"]),l=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`));if(e)for(let e of(c["data-headlessui-state"]=n.join(" "),n))c[`data-${e}`]=""}if(i===b.Fragment&&(Object.keys(ef(s)).length>0||Object.keys(ef(c)).length>0)){if(!(0,b.isValidElement)(d)||Array.isArray(d)&&d.length>1){if(Object.keys(ef(s)).length>0)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(ef(s)).concat(Object.keys(ef(c))).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`))}else{let e=d.props,t=null==e?void 0:e.className,n="function"==typeof t?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return en(t(...n),s.className)}:en(t,s.className),r=el(d.props,ef(ep(s,["ref"])));for(let e in c)e in r&&delete c[e];return(0,b.cloneElement)(d,Object.assign({},r,c,l,{ref:o(d.ref,l.ref)},n?{className:n}:{}))}}return(0,b.createElement)(i,Object.assign({},ep(s,["ref"]),i!==b.Fragment&&l,i!==b.Fragment&&c),d)}function es(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function el(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])for(let e in o)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(o[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function ed(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];for(let e in o)Object.assign(r,{[e](){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(let t of o[e])null==t||t(...n)}});return r}function ec(e){var t;return Object.assign((0,b.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function ef(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function ep(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var ev=((i=ev||{})[i.None=1]="None",i[i.Focusable=2]="Focusable",i[i.Hidden=4]="Hidden",i);let em=ec(function(e,t){var n;let{features:r=1,...o}=e;return ea({ourProps:{ref:t,"aria-hidden":(2&r)==2||(null!=(n=o["aria-hidden"])?n:void 0),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}},theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})});function eg(e){let t,{onFocus:n}=e,[r,o]=(0,b.useState)(!0),i=(t=(0,b.useRef)(!1),Y(()=>(t.current=!0,()=>{t.current=!1}),[]),t);return r?b.createElement(em,{as:"button",type:"button",features:ev.Focusable,onFocus:e=>{e.preventDefault();let t,r=50;t=requestAnimationFrame(function e(){if(r--<=0){t&&cancelAnimationFrame(t);return}if(n()){if(cancelAnimationFrame(t),!i.current)return;o(!1);return}t=requestAnimationFrame(e)})}}):null}let eb=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),eh=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ey=((a=ey||{})[a.First=1]="First",a[a.Previous=2]="Previous",a[a.Next=4]="Next",a[a.Last=8]="Last",a[a.WrapAround=16]="WrapAround",a[a.NoScroll=32]="NoScroll",a[a.AutoFocus=64]="AutoFocus",a),eE=((u=eE||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),ew=((s=ew||{})[s.Previous=-1]="Previous",s[s.Next=1]="Next",s),eT=((l=eT||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l),eP=((d=eP||{})[d.Keyboard=0]="Keyboard",d[d.Mouse=1]="Mouse",d);function ex(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function eF(e,t){var n,r,o;let{sorted:i=!0,relativeTo:a=null,skipElements:u=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?i?ex(e):e:64&t?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(eh)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e):function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(eb)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);u.length>0&&l.length>1&&(l=l.filter(e=>!u.some(t=>null!=t&&"current"in t?(null==t?void 0:t.current)===e:t===e))),a=null!=a?a:s.activeElement;let d=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(a))-1;if(4&t)return Math.max(0,l.indexOf(a))+1;if(8&t)return l.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,v=l.length,m;do{if(p>=v||p+v<=0)return 0;let e=c+p;if(16&t)e=(e+v)%v;else{if(e<0)return 3;if(e>=v)return 1}null==(m=l[e])||m.focus(f),p+=d}while(m!==s.activeElement);return 6&t&&null!=(o=null==(r=null==(n=m)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&o&&m.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let eA=b.createContext(null);function eL(e){let{children:t}=e,n=b.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return b.createElement(eA.Provider,{value:n},t)}function eS(e){let t=b.useContext(eA);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=b.useId(),[r,o]=t.current.get(e,n);return b.useEffect(()=>o,[]),r}var eI=((c=eI||{}).Space=" ",c.Enter="Enter",c.Escape="Escape",c.Backspace="Backspace",c.Delete="Delete",c.ArrowLeft="ArrowLeft",c.ArrowUp="ArrowUp",c.ArrowRight="ArrowRight",c.ArrowDown="ArrowDown",c.Home="Home",c.End="End",c.PageUp="PageUp",c.PageDown="PageDown",c.Tab="Tab",c),ek=((f=ek||{})[f.Forwards=0]="Forwards",f[f.Backwards=1]="Backwards",f),eM=((p=eM||{})[p.Less=-1]="Less",p[p.Equal=0]="Equal",p[p.Greater=1]="Greater",p),eN=((v=eN||{})[v.SetSelectedIndex=0]="SetSelectedIndex",v[v.RegisterTab=1]="RegisterTab",v[v.UnregisterTab=2]="UnregisterTab",v[v.RegisterPanel=3]="RegisterPanel",v[v.UnregisterPanel=4]="UnregisterPanel",v);let eO={0(e,t){var n;let r=ex(e.tabs,e=>e.current),o=ex(e.panels,e=>e.current),i=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),a={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=er(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>er(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===i.length)return a;let o=er(n,{0:()=>r.indexOf(i[0]),1:()=>r.indexOf(i[i.length-1])});return{...a,selectedIndex:-1===o?e.selectedIndex:o}}let u=r.slice(0,t.index),s=[...r.slice(t.index),...u].find(e=>i.includes(e));if(!s)return a;let l=null!=(n=r.indexOf(s))?n:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...a,selectedIndex:l}},1(e,t){if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],r=ex([...e.tabs,t.tab],e=>e.current),o=e.selectedIndex;return e.info.current.isControlled||-1===(o=r.indexOf(n))&&(o=e.selectedIndex),{...e,tabs:r,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:ex([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},eC=(0,b.createContext)(null);function eD(e){let t=(0,b.useContext)(eC);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eD),t}return t}eC.displayName="TabsDataContext";let eH=(0,b.createContext)(null);function eR(e){let t=(0,b.useContext)(eH);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eR),t}return t}function ej(e,t){return er(t.type,eO,e,t)}eH.displayName="TabsActionsContext";let eW=eo.RenderStrategy|eo.Static,e_=ec(function(e,t){var n,r;let o=(0,b.useId)(),{id:i=`headlessui-tabs-tab-${o}`,disabled:a=!1,autoFocus:u=!1,...s}=e,{orientation:l,activation:d,selectedIndex:c,tabs:f,panels:p}=eD("Tab"),v=eR("Tab"),m=eD("Tab"),g=(0,b.useRef)(null),h=et(g,t);Y(()=>v.registerTab(g),[v,g]);let y=eS("tabs"),E=f.indexOf(g);-1===E&&(E=y);let w=E===c,T=J(e=>{var t;let n=e();if(n===eE.Success&&"auto"===d){let e=null==(t=z(g))?void 0:t.activeElement,n=m.tabs.findIndex(t=>t.current===e);-1!==n&&v.change(n)}return n}),P=J(e=>{let t=f.map(e=>e.current).filter(Boolean);if(e.key===eI.Space||e.key===eI.Enter){e.preventDefault(),e.stopPropagation(),v.change(E);return}switch(e.key){case eI.Home:case eI.PageUp:return e.preventDefault(),e.stopPropagation(),T(()=>eF(t,ey.First));case eI.End:case eI.PageDown:return e.preventDefault(),e.stopPropagation(),T(()=>eF(t,ey.Last))}if(T(()=>er(l,{vertical:()=>e.key===eI.ArrowUp?eF(t,ey.Previous|ey.WrapAround):e.key===eI.ArrowDown?eF(t,ey.Next|ey.WrapAround):eE.Error,horizontal:()=>e.key===eI.ArrowLeft?eF(t,ey.Previous|ey.WrapAround):e.key===eI.ArrowRight?eF(t,ey.Next|ey.WrapAround):eE.Error}))===eE.Success)return e.preventDefault()}),x=(0,b.useRef)(!1),F=J(()=>{var e;x.current||(x.current=!0,null==(e=g.current)||e.focus({preventScroll:!0}),v.change(E),X(()=>{x.current=!1}))}),A=J(e=>{e.preventDefault()}),{isFocusVisible:L,focusProps:S}=R({autoFocus:u}),{isHovered:I,hoverProps:k}=function(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[i,a]=(0,b.useState)(!1),u=(0,b.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,b.useEffect)($,[]);let{hoverProps:s,triggerHoverEnd:l}=(0,b.useMemo)(()=>{let e=(e,r)=>{if(u.pointerType=r,o||"touch"===r||u.isHovered||!e.currentTarget.contains(e.target))return;u.isHovered=!0;let i=e.currentTarget;u.target=i,t&&t({type:"hoverstart",target:i,pointerType:r}),n&&n(!0),a(!0)},i=(e,t)=>{if(u.pointerType="",u.target=null,"touch"===t||!u.isHovered)return;u.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),a(!1)},s={};return"undefined"!=typeof PointerEvent?(s.onPointerEnter=t=>{j&&"mouse"===t.pointerType||e(t,t.pointerType)},s.onPointerLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,e.pointerType)}):(s.onTouchStart=()=>{u.ignoreEmulatedMouseEvents=!0},s.onMouseEnter=t=>{u.ignoreEmulatedMouseEvents||j||e(t,"mouse"),u.ignoreEmulatedMouseEvents=!1},s.onMouseLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,"mouse")}),{hoverProps:s,triggerHoverEnd:i}},[t,n,r,o,u]);return(0,b.useEffect)(()=>{o&&l({currentTarget:u.target},u.pointerType)},[o]),{hoverProps:s,isHovered:i}}({isDisabled:a}),{pressed:M,pressProps:N}=function(){let{disabled:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,b.useRef)(null),[n,r]=(0,b.useState)(!1),o=function(){let[e]=(0,b.useState)(function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o=setTimeout(...t);return n.add(()=>clearTimeout(o))},microTask(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let o={current:!0};return X(()=>{o.current&&t[0]()}),n.add(()=>{o.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.includes(e)||t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n});return(0,b.useEffect)(()=>()=>e.dispose(),[e]),e}(),i=J(()=>{t.current=null,r(!1),o.dispose()}),a=J(e=>{if(o.dispose(),null===t.current){t.current=e.currentTarget,r(!0);{let n=z(e.currentTarget);o.addEventListener(n,"pointerup",i,!1),o.addEventListener(n,"pointermove",e=>{if(t.current){var n,o;let i,a;r((i=e.width/2,a=e.height/2,n={top:e.clientY-a,right:e.clientX+i,bottom:e.clientY+a,left:e.clientX-i},o=t.current.getBoundingClientRect(),!(!n||!o||n.right<o.left||n.left>o.right||n.bottom<o.top||n.top>o.bottom)))}},!1),o.addEventListener(n,"pointercancel",i,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:a,onPointerUp:i,onClick:i}}}({disabled:a}),O=(0,b.useMemo)(()=>({selected:w,hover:I,active:M,focus:L,autofocus:u,disabled:a}),[w,I,L,M,u,a]);return ea({ourProps:ed({ref:h,onKeyDown:P,onMouseDown:A,onClick:F,id:i,role:"tab",type:function(e,t){let[n,r]=(0,b.useState)(()=>Q(e));return Y(()=>{r(Q(e))},[e.type,e.as]),Y(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,g),"aria-controls":null==(r=null==(n=p[E])?void 0:n.current)?void 0:r.id,"aria-selected":w,tabIndex:w?0:-1,disabled:a||void 0,autoFocus:u},S,k,N),theirProps:s,slot:O,defaultTag:"button",name:"Tabs.Tab"})}),eU=ec(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:o=!1,onChange:i,selectedIndex:a=null,...u}=e,s=r?"vertical":"horizontal",l=o?"manual":"auto",d=null!==a,c=Z({isControlled:d}),f=et(t),[p,v]=(0,b.useReducer)(ej,{info:c,selectedIndex:null!=a?a:n,tabs:[],panels:[]}),m=(0,b.useMemo)(()=>({selectedIndex:p.selectedIndex}),[p.selectedIndex]),g=Z(i||(()=>{})),h=Z(p.tabs),y=(0,b.useMemo)(()=>({orientation:s,activation:l,...p}),[s,l,p]),E=J(e=>(v({type:1,tab:e}),()=>v({type:2,tab:e}))),w=J(e=>(v({type:3,panel:e}),()=>v({type:4,panel:e}))),T=J(e=>{P.current!==e&&g.current(e),d||v({type:0,index:e})}),P=Z(d?e.selectedIndex:p.selectedIndex),x=(0,b.useMemo)(()=>({registerTab:E,registerPanel:w,change:T}),[]);return Y(()=>{v({type:0,index:null!=a?a:n})},[a]),Y(()=>{if(void 0===P.current||p.tabs.length<=0)return;let e=ex(p.tabs,e=>e.current);e.some((e,t)=>p.tabs[t]!==e)&&T(e.indexOf(p.tabs[P.current]))}),b.createElement(eL,null,b.createElement(eH.Provider,{value:x},b.createElement(eC.Provider,{value:y},y.tabs.length<=0&&b.createElement(eg,{onFocus:()=>{var e,t;for(let n of h.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),ea({ourProps:{ref:f},theirProps:u,slot:m,defaultTag:"div",name:"Tabs"}))))}),e$=ec(function(e,t){let{orientation:n,selectedIndex:r}=eD("Tab.List");return ea({ourProps:{ref:et(t),role:"tablist","aria-orientation":n},theirProps:e,slot:(0,b.useMemo)(()=>({selectedIndex:r}),[r]),defaultTag:"div",name:"Tabs.List"})}),eB=ec(function(e,t){let{selectedIndex:n}=eD("Tab.Panels");return ea({ourProps:{ref:et(t)},theirProps:e,slot:(0,b.useMemo)(()=>({selectedIndex:n}),[n]),defaultTag:"div",name:"Tabs.Panels"})}),eV=ec(function(e,t){var n,r,o,i;let a=(0,b.useId)(),{id:u=`headlessui-tabs-panel-${a}`,tabIndex:s=0,...l}=e,{selectedIndex:d,tabs:c,panels:f}=eD("Tab.Panel"),p=eR("Tab.Panel"),v=(0,b.useRef)(null),m=et(v,t);Y(()=>p.registerPanel(v),[p,v]);let g=eS("panels"),h=f.indexOf(v);-1===h&&(h=g);let y=h===d,{isFocusVisible:E,focusProps:w}=R(),T=(0,b.useMemo)(()=>({selected:y,focus:E}),[y,E]),P=ed({ref:m,id:u,role:"tabpanel","aria-labelledby":null==(r=null==(n=c[h])?void 0:n.current)?void 0:r.id,tabIndex:y?s:-1},w);return y||null!=(o=l.unmount)&&!o||null!=(i=l.static)&&i?ea({ourProps:P,theirProps:l,slot:T,defaultTag:"div",features:eW,visible:y,name:"Tabs.Panel"}):b.createElement(em,{as:"span","aria-hidden":"true",...P})}),eK=Object.assign(e_,{Group:eU,List:e$,Panels:eB,Panel:eV})},4839:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);