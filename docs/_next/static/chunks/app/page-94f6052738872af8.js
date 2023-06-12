(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1971:function(e,t,n){Promise.resolve().then(n.bind(n,3815))},3815:function(e,t,n){"use strict";let r,o;n.r(t),n.d(t,{default:function(){return e6}});var l,i,a,s,u,c,d,f,m,p,h,g,v,y,E,w,b,x=n(9268),N=n(6006),S=n.t(N,2);function T(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}function L(...e){return e.filter(Boolean).join(" ")}var j=((l=j||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),P=((i=P||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function O({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:i}){let a=k(t,e);if(l)return C(a,n,r,i);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return C(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return T(e?0:1,{0:()=>null,1:()=>C({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return C(a,n,r,i)}function C(e,t={},n,r){let{as:o=n,children:l,refName:i="ref",...a}=D(e,["unmount","static"]),s=void 0!==e.ref?{[i]:e.ref}:{},u="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let c={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(o===N.Fragment&&Object.keys(R(a)).length>0){if(!(0,N.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=u.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>L(null==e?void 0:e.className(...t),a.className):L(null==e?void 0:e.className,a.className),n=t?{className:t}:{};return(0,N.cloneElement)(u,Object.assign({},k(u.props,R(D(a,["ref"]))),c,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(u.ref,s.ref),n))}return(0,N.createElement)(o,Object.assign({},D(a,["ref"]),o!==N.Fragment&&s,o!==N.Fragment&&c),u)}function k(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function F(e){var t;return Object.assign((0,N.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function R(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function D(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var A=Object.defineProperty,M=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t,n)=>(M(e,"symbol"!=typeof t?t+"":t,n),n);let I=new class{constructor(){_(this,"current",this.detect()),_(this,"handoffState","pending"),_(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},H=(e,t)=>{I.isServer?(0,N.useEffect)(e,t):(0,N.useLayoutEffect)(e,t)};function $(e){let t=(0,N.useRef)(e);return H(()=>{t.current=e},[e]),t}let W=function(e){let t=$(e);return N.useCallback((...e)=>t.current(...e),[t])},B=Symbol();function U(...e){let t=(0,N.useRef)(e);(0,N.useEffect)(()=>{t.current=e},[e]);let n=W(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[B]))?void 0:n}var q=((a=q||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a);function V(){let[e,t]=(0,N.useState)(I.isHandoffComplete);return e&&!1===I.isHandoffComplete&&t(!1),(0,N.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,N.useEffect)(()=>I.handoff(),[]),e}let Y=null!=(b=N.useId)?b:function(){let e=V(),[t,n]=N.useState(e?()=>I.nextId():null);return H(()=>{null===t&&n(I.nextId())},[t]),null!=t?""+t:void 0};var G=((s=G||{})[s.None=1]="None",s[s.Focusable=2]="Focusable",s[s.Hidden=4]="Hidden",s);let z=F(function(e,t){let{features:n=1,...r}=e;return O({ourProps:{ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function K(e){return I.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let X=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var J=((u=J||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),Q=((c=Q||{})[c.Error=0]="Error",c[c.Overflow=1]="Overflow",c[c.Success=2]="Success",c[c.Underflow=3]="Underflow",c),Z=((d=Z||{})[d.Previous=-1]="Previous",d[d.Next=1]="Next",d),ee=((f=ee||{})[f.Strict=0]="Strict",f[f.Loose=1]="Loose",f),et=((m=et||{})[m.Keyboard=0]="Keyboard",m[m.Mouse=1]="Mouse",m);function en(e){null==e||e.focus({preventScroll:!0})}function er(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l,i,a;let s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(X)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);o.length>0&&u.length>1&&(u=u.filter(e=>!o.includes(e))),r=null!=r?r:s.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,u.indexOf(r))-1;if(4&t)return Math.max(0,u.indexOf(r))+1;if(8&t)return u.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},m=0,p=u.length,h;do{if(m>=p||m+p<=0)return 0;let e=d+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(h=u[e])||h.focus(f),m+=c}while(h!==s.activeElement);return 6&t&&null!=(a=null==(i=null==(l=h)?void 0:l.matches)?void 0:i.call(l,"textarea,input"))&&a&&h.select(),2}function eo(e,t,n){let r=$(t);(0,N.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var el=((p=el||{})[p.Forwards=0]="Forwards",p[p.Backwards=1]="Backwards",p);function ei(){let e=(0,N.useRef)(!1);return H(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ea(...e){return(0,N.useMemo)(()=>K(...e),[...e])}function es(e,t,n,r){let o=$(n);(0,N.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}function eu(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}function ec(e,t){let n=(0,N.useRef)([]),r=W(e);(0,N.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}function ed(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){let n={current:!0};return eu(()=>{n.current&&e[0]()}),t.add(()=>{n.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=ed();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function ef(e){let t=W(e),n=(0,N.useRef)(!1);(0,N.useEffect)(()=>(n.current=!1,()=>{n.current=!0,eu(()=>{n.current&&t()})}),[t])}function em(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var ep=((h=ep||{})[h.None=1]="None",h[h.InitialFocus=2]="InitialFocus",h[h.TabLock=4]="TabLock",h[h.FocusLock=8]="FocusLock",h[h.RestoreFocus=16]="RestoreFocus",h[h.All=30]="All",h);let eh=Object.assign(F(function(e,t){let n,r=(0,N.useRef)(null),o=U(r,t),{initialFocus:l,containers:i,features:a=30,...s}=e;V()||(a=1);let u=ea(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,N.useRef)(eg.slice());return ec(([e],[n])=>{!0===n&&!1===e&&eu(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=eg.slice())},[e,eg,t]),W(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);ec(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&en(n())},[t]),ef(()=>{t&&en(n())})}({ownerDocument:u},!!(16&a));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,N.useRef)(null),l=ei();return ec(()=>{if(!r)return;let i=t.current;i&&eu(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(i.contains(t)){o.current=t;return}null!=n&&n.current?en(n.current):er(i,J.First)===Q.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:u,container:r,initialFocus:l},!!(2&a));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=ei();es(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let i=em(n);t.current instanceof HTMLElement&&i.add(t.current);let a=r.current;if(!a)return;let s=e.target;s&&s instanceof HTMLElement?ev(i,s)?(r.current=s,en(s)):(e.preventDefault(),e.stopPropagation(),en(a)):en(r.current)},!0)}({ownerDocument:u,container:r,containers:i,previousActiveElement:c},!!(8&a));let d=(n=(0,N.useRef)(0),eo("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),f=W(e=>{let t=r.current;t&&T(d.current,{[el.Forwards]:()=>{er(t,J.First,{skipElements:[e.relatedTarget]})},[el.Backwards]:()=>{er(t,J.Last,{skipElements:[e.relatedTarget]})}})}),m=function(){let[e]=(0,N.useState)(ed);return(0,N.useEffect)(()=>()=>e.dispose(),[e]),e}(),p=(0,N.useRef)(!1);return N.createElement(N.Fragment,null,!!(4&a)&&N.createElement(z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:G.Focusable}),O({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(p.current=!0,m.requestAnimationFrame(()=>{p.current=!1}))},onBlur(e){let t=em(i);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(ev(t,n)||(p.current?er(r.current,T(d.current,{[el.Forwards]:()=>J.Next,[el.Backwards]:()=>J.Previous})|J.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&en(e.target)))}},theirProps:s,defaultTag:"div",name:"FocusTrap"}),!!(4&a)&&N.createElement(z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:G.Focusable}))}),{features:ep}),eg=[];function ev(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&eg[0]!==e.target&&(eg.unshift(e.target),(eg=eg.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var ey=n(8431);let eE=(0,N.createContext)(!1);function ew(e){return N.createElement(eE.Provider,{value:e.force},e.children)}let eb=N.Fragment,ex=N.Fragment,eN=(0,N.createContext)(null),eS=(0,N.createContext)(null),eT=Object.assign(F(function(e,t){let n=(0,N.useRef)(null),r=U(function(e,t=!0){return Object.assign(e,{[B]:t})}(e=>{n.current=e}),t),o=ea(n),l=function(e){let t=(0,N.useContext)(eE),n=(0,N.useContext)(eN),r=ea(e),[o,l]=(0,N.useState)(()=>{if(!t&&null!==n||I.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,N.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,N.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[i]=(0,N.useState)(()=>{var e;return I.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),a=(0,N.useContext)(eS),s=V();return H(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),H(()=>{if(i&&a)return a.register(i)},[a,i]),ef(()=>{var e;l&&i&&(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))}),s&&l&&i?(0,ey.createPortal)(O({ourProps:{ref:r},theirProps:e,defaultTag:eb,name:"Portal"}),i):null}),{Group:F(function(e,t){let{target:n,...r}=e,o={ref:U(t)};return N.createElement(eN.Provider,{value:n},O({ourProps:o,theirProps:r,defaultTag:ex,name:"Popover.Group"}))})}),eL=(0,N.createContext)(null),ej=Object.assign(F(function(e,t){let n=Y(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,N.useContext)(eL);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=U(t);return H(()=>l.register(r),[r,l.register]),O({ourProps:{ref:i,...l.props,id:r},theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{}),eP=(0,N.createContext)(null);eP.displayName="OpenClosedContext";var eO=((g=eO||{})[g.Open=1]="Open",g[g.Closed=2]="Closed",g[g.Closing=4]="Closing",g[g.Opening=8]="Opening",g);let eC=(0,N.createContext)(()=>{});eC.displayName="StackContext";var ek=((v=ek||{})[v.Add=0]="Add",v[v.Remove=1]="Remove",v);function eF({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,N.useContext)(eC),i=W((...e)=>{null==t||t(...e),l(...e)});return H(()=>{let e=void 0===o||!0===o;return e&&i(0,n,r),()=>{e&&i(1,n,r)}},[i,n,r,o]),N.createElement(eC.Provider,{value:i},e)}function eR(e,t,n){let r=$(t);(0,N.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let{useState:eD,useEffect:eA,useLayoutEffect:eM,useDebugValue:e_}=S;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let eI=S.useSyncExternalStore,eH=(y={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:ed(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},i=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let l=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let n=t.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),i=e.querySelector(r);i&&!o(i)&&(l=i)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=o-(n.clientWidth-n.offsetWidth);t.style(n,"paddingRight",`${r}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach(({before:e})=>null==e?void 0:e(l)),i.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=y[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});eH.subscribe(()=>{let e=eH.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&eH.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&eH.dispatch("TEARDOWN",n)}});let e$=new Map,eW=new Map;function eB(e,t=!0){H(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=eW.get(r))?n:0;return eW.set(r,o+1),0!==o||(e$.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=eW.get(r))?e:1;if(1===t?eW.delete(r):eW.set(r,t-1),1!==t)return;let n=e$.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,e$.delete(r))}},[e,t])}var eU=((E=eU||{})[E.Open=0]="Open",E[E.Closed=1]="Closed",E),eq=((w=eq||{})[w.SetTitleId=0]="SetTitleId",w);let eV={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eY=(0,N.createContext)(null);function eG(e){let t=(0,N.useContext)(eY);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,eG),t}return t}function ez(e,t){return T(t.type,eV,e,t)}eY.displayName="DialogContext";let eK=j.RenderStrategy|j.Static,eX=Object.assign(F(function(e,t){var n;let r,o,l,i,a;let s=Y(),{id:u=`headlessui-dialog-${s}`,open:c,onClose:d,initialFocus:f,__demoMode:m=!1,...p}=e,[h,g]=(0,N.useState)(0),v=(0,N.useContext)(eP);void 0===c&&null!==v&&(c=(v&eO.Open)===eO.Open);let y=(0,N.useRef)(null),E=U(y,t),w=ea(y),b=e.hasOwnProperty("open")||null!==v,x=e.hasOwnProperty("onClose");if(!b&&!x)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!b)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!x)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);if("function"!=typeof d)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${d}`);let S=c?0:1,[L,j]=(0,N.useReducer)(ez,{titleId:null,descriptionId:null,panelRef:(0,N.createRef)()}),P=W(()=>d(!1)),C=W(e=>j({type:0,id:e})),k=!!V()&&!m&&0===S,F=h>1,R=null!==(0,N.useContext)(eY),[D,A]=(r=(0,N.useContext)(eS),o=(0,N.useRef)([]),l=W(e=>(o.current.push(e),r&&r.register(e),()=>i(e))),i=W(e=>{let t=o.current.indexOf(e);-1!==t&&o.current.splice(t,1),r&&r.unregister(e)}),a=(0,N.useMemo)(()=>({register:l,unregister:i,portals:o}),[l,i,o]),[o,(0,N.useMemo)(()=>function({children:e}){return N.createElement(eS.Provider,{value:a},e)},[a])]),{resolveContainers:M,mainTreeNodeRef:_,MainTreeNode:I}=function({defaultContainers:e=[],portals:t}={}){let n=(0,N.useRef)(null),r=ea(n),o=W(()=>{var o;let l=[];for(let t of e)null!==t&&(t instanceof HTMLElement?l.push(t):"current"in t&&t.current instanceof HTMLElement&&l.push(t.current));if(null!=t&&t.current)for(let e of t.current)l.push(e);for(let e of null!=(o=null==r?void 0:r.querySelectorAll("html > *, body > *"))?o:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(n.current)||l.some(t=>e.contains(t))||l.push(e));return l});return{resolveContainers:o,contains:W(e=>o().some(t=>t.contains(e))),mainTreeNodeRef:n,MainTreeNode:(0,N.useMemo)(()=>function(){return N.createElement(z,{features:G.Hidden,ref:n})},[n])}}({portals:D,defaultContainers:[null!=(n=L.panelRef.current)?n:y.current]}),$=F?"parent":"leaf",B=null!==v&&(v&eO.Closing)===eO.Closing,J=!R&&!B&&k;eB((0,N.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==w?void 0:w.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(_.current)&&e instanceof HTMLElement))?t:null},[_]),J);let Q=!!F||k;eB((0,N.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==w?void 0:w.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(_.current)&&e instanceof HTMLElement))?t:null},[_]),Q),function(e,t,n=!0){let r=(0,N.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(l)||n.composed&&n.composedPath().includes(e))return}return!function(e,t=0){var n;return e!==(null==(n=K(e))?void 0:n.body)&&T(t,{0:()=>e.matches(X),1(){let t=e;for(;null!==t;){if(t.matches(X))return!0;t=t.parentElement}return!1}})}(l,ee.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,N.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,N.useRef)(null);eR("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eR("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),eo("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(M,P,!(!k||F));let Z=!(F||0!==S);es(null==w?void 0:w.defaultView,"keydown",e=>{Z&&(e.defaultPrevented||e.key===q.Escape&&(e.preventDefault(),e.stopPropagation(),P()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=eI(eH.subscribe,eH.getSnapshot,eH.getSnapshot),(l=e?o.get(e):void 0)&&l.count,H(()=>{if(!(!e||!t))return eH.dispatch("PUSH",e,r),()=>eH.dispatch("POP",e,r)},[t,e])}(w,!(B||0!==S||R),M),(0,N.useEffect)(()=>{if(0!==S||!y.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&P()}});return e.observe(y.current),()=>e.disconnect()},[S,y,P]);let[et,en]=function(){let[e,t]=(0,N.useState)([]);return[e.length>0?e.join(" "):void 0,(0,N.useMemo)(()=>function(e){let n=W(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,N.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return N.createElement(eL.Provider,{value:r},e.children)},[t])]}(),er=(0,N.useMemo)(()=>[{dialogState:S,close:P,setTitleId:C},L],[S,L,P,C]),el=(0,N.useMemo)(()=>({open:0===S}),[S]),ei={ref:E,id:u,role:"dialog","aria-modal":0===S||void 0,"aria-labelledby":L.titleId,"aria-describedby":et};return N.createElement(eF,{type:"Dialog",enabled:0===S,element:y,onUpdate:W((e,t)=>{"Dialog"===t&&T(e,{[ek.Add]:()=>g(e=>e+1),[ek.Remove]:()=>g(e=>e-1)})})},N.createElement(ew,{force:!0},N.createElement(eT,null,N.createElement(eY.Provider,{value:er},N.createElement(eT.Group,{target:y},N.createElement(ew,{force:!1},N.createElement(en,{slot:el,name:"Dialog.Description"},N.createElement(eh,{initialFocus:f,containers:M,features:k?T($,{parent:eh.features.RestoreFocus,leaf:eh.features.All&~eh.features.FocusLock}):eh.features.None},N.createElement(A,null,O({ourProps:ei,theirProps:p,slot:el,defaultTag:"div",features:eK,visible:0===S,name:"Dialog"}))))))))),N.createElement(I,null))}),{Backdrop:F(function(e,t){let n=Y(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},i]=eG("Dialog.Backdrop"),a=U(t);(0,N.useEffect)(()=>{if(null===i.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[i.panelRef]);let s=(0,N.useMemo)(()=>({open:0===l}),[l]);return N.createElement(ew,{force:!0},N.createElement(eT,null,O({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:F(function(e,t){let n=Y(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},i]=eG("Dialog.Panel"),a=U(t,i.panelRef),s=(0,N.useMemo)(()=>({open:0===l}),[l]);return O({ourProps:{ref:a,id:r,onClick:W(e=>{e.stopPropagation()})},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:F(function(e,t){let n=Y(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:i}]=eG("Dialog.Overlay");return O({ourProps:{ref:U(t),id:r,"aria-hidden":!0,onClick:W(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}})},theirProps:o,slot:(0,N.useMemo)(()=>({open:0===l}),[l]),defaultTag:"div",name:"Dialog.Overlay"})}),Title:F(function(e,t){let n=Y(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=eG("Dialog.Title"),a=U(t);return(0,N.useEffect)(()=>(i(r),()=>i(null)),[r,i]),O({ourProps:{ref:a,id:r},theirProps:o,slot:(0,N.useMemo)(()=>({open:0===l}),[l]),defaultTag:"h2",name:"Dialog.Title"})}),Description:ej}),eJ=N.forwardRef(function({title:e,titleId:t,...n},r){return N.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?N.createElement("title",{id:t},e):null,N.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}),eQ=N.forwardRef(function({title:e,titleId:t,...n},r){return N.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?N.createElement("title",{id:t},e):null,N.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});var eZ=n(5846),e0=n.n(eZ);let e1=[];function e6(){let[e,t]=(0,N.useState)(!1);return(0,x.jsxs)("div",{className:"bg-white",children:[(0,x.jsxs)("header",{className:"absolute inset-x-0 top-0 z-50",children:[(0,x.jsxs)("nav",{className:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global",children:[(0,x.jsx)("div",{className:"flex lg:flex-1",children:(0,x.jsxs)("a",{href:"#",className:"-m-1.5 p-1.5",children:[(0,x.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,x.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})]})}),(0,x.jsx)("div",{className:"flex lg:hidden",children:(0,x.jsxs)("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>t(!0),children:[(0,x.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,x.jsx)(eJ,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,x.jsx)("div",{className:"hidden lg:flex lg:gap-x-12",children:e1.map(e=>(0,x.jsx)("a",{href:e.href,className:"text-sm font-semibold leading-6 text-gray-900",children:e.name},e.name))}),(0,x.jsx)("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:(0,x.jsxs)(e0(),{href:"/auth/login",className:"text-sm font-semibold leading-6 text-gray-900",children:["Log in ",(0,x.jsx)("span",{"aria-hidden":"true",children:"→"})]})})]}),(0,x.jsxs)(eX,{as:"div",className:"lg:hidden",open:e,onClose:t,children:[(0,x.jsx)("div",{className:"fixed inset-0 z-50"}),(0,x.jsxs)(eX.Panel,{className:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",children:[(0,x.jsxs)("div",{className:"flex items-center justify-between",children:[(0,x.jsxs)("a",{href:"#",className:"-m-1.5 p-1.5",children:[(0,x.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,x.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})]}),(0,x.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:()=>t(!1),children:[(0,x.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,x.jsx)(eQ,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,x.jsx)("div",{className:"mt-6 flow-root",children:(0,x.jsxs)("div",{className:"-my-6 divide-y divide-gray-500/10",children:[(0,x.jsx)("div",{className:"space-y-2 py-6",children:e1.map(e=>(0,x.jsx)("a",{href:e.href,className:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",children:e.name},e.name))}),(0,x.jsx)("div",{className:"py-6",children:(0,x.jsx)(e0(),{href:"/auth/login",className:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",children:"Log in"})})]})})]})]})]}),(0,x.jsxs)("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:[(0,x.jsx)("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:(0,x.jsx)("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),(0,x.jsx)("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:(0,x.jsxs)("div",{className:"text-center",children:[(0,x.jsx)("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",children:"Simplify Data Collection"}),(0,x.jsx)("p",{className:"mt-6 text-lg leading-8 text-gray-600",children:"DynamicForm+ is a user-friendly web application that simplifies data collection through customizable forms, ensuring secure storage and easy management of your collected data. With intuitive design and powerful features like data export and form customization, DynamicForm+ empowers you to efficiently collect and analyze data for your research, business, education, or personal projects."}),(0,x.jsx)("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:(0,x.jsx)(e0(),{href:"/auth/login",className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Get started"})})]})})]})]})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,l={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=u,t.jsxs=u},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[846,667,488,744],function(){return e(e.s=1971)}),_N_E=e.O()}]);