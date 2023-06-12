"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{8268:function(e,t,n){n.d(t,{ZP:function(){return g},Ki:function(){return u},Jz:function(){return c},kS:function(){return p},Hz:function(){return m},pc:function(){return d}});var o=n(7539),a=n(2740);async function s(e,t){let n=await fetch((0,a.l)()+"login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(200!==n.status){let e=await n.json();throw Error(e.error)}return await n.json()}async function r(){let e=await fetch((0,a.l)()+"whoami/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});if(200!==e.status){let t=await e.json();throw Error(t.error)}return await e.json()}async function i(e){let t=await fetch((0,a.l)()+"signup/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(200!==t.status){let e=await t.json();throw Error(e.error)}return await t.json()}let l={isAuthenticated:!1,loading:!0,userDetails:{},status:"idle",signUpError:"",loginError:""},c=(0,o.hg)("auth/login",async(e,t)=>await s(e,t)),u=(0,o.hg)("auth/whoami",async(e,t)=>await r(e,t)),d=(0,o.hg)("auth/signup",async e=>await i(e)),f=(0,o.oM)({name:"auth",initialState:l,reducers:{logout:e=>{localStorage.clear();let t={...l};return t.loading=!1,t}},extraReducers:e=>{e.addCase(c.pending,e=>{e.status="loading",e.loginError="",localStorage.clear()}).addCase(c.fulfilled,(e,t)=>{e.status="idle",e.isAuthenticated=!0,console.log(t),e.userDetails=t.payload,localStorage.setItem("token",e.userDetails.token)}).addCase(c.rejected,(e,t)=>{e.status="idle",e.loginError=t.error.message,localStorage.clear()}).addCase(u.pending,e=>{e.loading=!0}).addCase(u.fulfilled,(e,t)=>{e.loading=!1,e.isAuthenticated=!0,e.userDetails=t.payload}).addCase(u.rejected,(e,t)=>{e.loading=!1,localStorage.clear()}).addCase(d.pending,e=>{e.status="loading",e.signUpError=""}).addCase(d.fulfilled,(e,t)=>{e.status="idle",e.isAuthenticated=!0,console.log(t),e.userDetails=t.payload,localStorage.setItem("token",e.userDetails.token)}).addCase(d.rejected,(e,t)=>{e.status="idle",e.signUpError=t.error.message})}}),{logout:p}=f.actions,m=e=>e.auth;var g=f.reducer},8679:function(e,t,n){n.d(t,{ZP:function(){return h},ap:function(){return d},Gu:function(){return u},Jo:function(){return g},vw:function(){return f}});var o=n(7539),a=n(2740);async function s(e){let t=await fetch((0,a.l)()+"users/"+e+"/forms",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});if(200!==t.status)throw Error("unable to fetch forms!");return await t.json()}async function r(e,t){let n=await fetch((0,a.l)()+"users/"+e+"/forms/"+t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});if(200!==n.status)throw Error("unable to fetch form!");return await n.json()}async function i(e,t){let n=await fetch((0,a.l)()+"users/"+t+"/forms",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(e)});if(200!==n.status)throw Error("unable to upsert form!");return await n.json()}var l=n(474);let c={data:[],detailForm:void 0,successUpsert:!1,status:"init",upsertError:"",fetchError:""},u=(0,o.hg)("forms/fetch",async e=>await s(e)),d=(0,o.hg)("forms/fetch_by_id",async e=>{let{username:t,id:n}=e;return await r(t,n)}),f=(0,o.hg)("forms/upsert",async e=>{let{data:t,username:n}=e;return await i(t,n)}),p=(0,o.oM)({name:"forms",initialState:c,reducers:{clear:e=>c},extraReducers:e=>{e.addCase(u.pending,e=>{e.status="loading",e.fetchError=""}).addCase(u.fulfilled,(e,t)=>{e.status="idle",e.data=t.payload}).addCase(u.rejected,(e,t)=>{e.status="idle",e.fetchError=t.error.message}).addCase(d.pending,e=>{e.status="loading",e.fetchError="",e.detailForm=void 0}).addCase(d.fulfilled,(e,t)=>{e.status="idle",e.detailForm=t.payload}).addCase(d.rejected,(e,t)=>{e.status="idle",e.fetchError=t.error.message}).addCase(f.pending,e=>{e.status="loading",e.upsertError=""}).addCase(f.fulfilled,(e,t)=>{e.status="idle";let n=e.data.filter(e=>e.id!==t.payload.id);n.push(t.payload),e.data=n,(0,l.Am)("success",{autoClose:2e3,type:"success"})}).addCase(f.rejected,(e,t)=>{e.status="idle",e.upsertError=t.error.message})}}),{logout:m}=p.actions,g=e=>e.forms;var h=p.reducer},2740:function(e,t,n){function o(){return"http://training.pacificescience.com/sgadidesi/project/"}function a(){return"http://training.pacificescience.com/sgadidesi/dynamicform/"}n.d(t,{j:function(){return a},l:function(){return o}})},474:function(e,t,n){n.d(t,{Ix:function(){return b},Am:function(){return k}});var o=n(6006),a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(a&&(a+=" "),a+=o);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(o&&(o+=" "),o+=t);return o};let s=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||r(e)||i(e)||s(e);function u(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=e,p=a?`${t}--${l}`:t,m=a?`${n}--${l}`:n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=p.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}(e,u,r):u()};f||(c?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[f]),o.createElement(o.Fragment,null,i)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let f={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},p=e=>{let{theme:t,type:n,...a}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...a})},m={info:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function E(e){let{delay:t,isRunning:n,closeToast:s,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e,h=l||d&&0===f,y={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};d&&(y.transform=`scaleX(${f})`);let E=a("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),v=i(c)?c({rtl:p,type:r,defaultClassName:E}):a(E,c);return o.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:v,style:y,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&s()}})}let v=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:r}=function(e){let[t,n]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",b),document.addEventListener("touchmove",C),document.addEventListener("touchend",b);let n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=g(t.nativeEvent),l.y=h(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(l.boundingRect){let{top:n,bottom:o,left:a,right:s}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=a&&l.x<=s&&l.y>=n&&l.y<=o?T():v()}}function v(){n(!0)}function T(){n(!1)}function C(n){let o=r.current;l.canDrag&&o&&(l.didMove=!0,t&&T(),l.x=g(n),l.y=h(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function b(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",b);let t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(r.current&&r.current.addEventListener("d",v,{once:!0}),i(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",v),window.addEventListener("blur",T)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",T))}),[e.pauseOnFocusLoss]);let I={onMouseDown:y,onTouchStart:y,onMouseUp:E,onTouchEnd:E};return u&&d&&(I.onMouseEnter=T,I.onMouseLeave=v),m&&(I.onClick=e=>{p&&p(e),l.canCloseOnClick&&f()}),{playToast:v,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:I}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:v,position:T,className:C,style:b,bodyClassName:I,bodyStyle:w,progressClassName:_,progressStyle:O,updateId:L,role:N,progress:R,rtl:k,toastId:A,deleteToast:S,isIn:M,isLoading:P,iconOut:j,closeOnClick:x,theme:D}=e,z=a("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":x}),$=i(C)?C({rtl:k,position:T,type:f,defaultClassName:z}):a(z,C),B=!!R||!u,F={closeToast:m,type:f,theme:D},H=null;return!1===l||(H=i(l)?l(F):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,F):y(F)),o.createElement(v,{isIn:M,done:S,position:T,preventExitTransition:n,nodeRef:s},o.createElement("div",{id:A,onClick:d,className:$,...r,style:b,ref:s},o.createElement("div",{...M&&{role:N},className:i(I)?I({type:f}):a("Toastify__toast-body",I),style:w},null!=j&&o.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},j),o.createElement("div",null,c)),H,o.createElement(E,{...L&&!B?{key:`pb-${L}`}:{},rtl:k,theme:D,delay:u,isRunning:t,isIn:M,closeToast:m,hide:p,type:f,style:O,className:_,controlledProgress:B,progress:R||0})))},T=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},C=u(T("bounce",!0)),b=(u(T("slide",!0)),u(T("zoom")),u(T("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:p}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,a]=(0,o.useState)([]),u=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,g=e=>-1!==n.indexOf(e),h=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:e=>p.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=h.props;!n||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function E(e){a(t=>null==e?[]:t.filter(t=>t!==e))}function v(){let{toastContent:e,toastProps:t,staleId:n}=h.queue.shift();C(e,t,n)}function T(e,n){var a,g;let{delay:y,staleId:T,...b}=n;if(!c(e)||!u.current||h.props.enableMultiContainer&&b.containerId!==h.props.containerId||p.has(b.toastId)&&null==b.updateId)return;let{toastId:I,updateId:w,data:_}=b,{props:O}=h,L=()=>E(I),N=null==w;N&&h.count++;let R={...O,style:O.toastStyle,key:h.toastKey++,...Object.fromEntries(Object.entries(b).filter(e=>{let[t,n]=e;return null!=n})),toastId:I,updateId:w,data:_,closeToast:L,isIn:!1,className:l(b.className||O.toastClassName),bodyClassName:l(b.bodyClassName||O.bodyClassName),progressClassName:l(b.progressClassName||O.progressClassName),autoClose:!b.isLoading&&(a=b.autoClose,g=O.autoClose,!1===a||s(a)&&a>0?a:g),deleteToast(){let e=d(p.get(I),"removed");p.delete(I),f.emit(4,e);let n=h.queue.length;if(h.count=null==I?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),n>0){let e=null==I?h.props.limit:1;if(1===n||1===e)h.displayedToast++,v();else{let t=e>n?n:e;h.displayedToast=t;for(let e=0;e<t;e++)v()}}else t()}};R.iconOut=function(e){let{theme:t,type:n,isLoading:a,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):r(l)||s(l)?c=l:a?c=m.spinner():n in m&&(c=m[n](u))),c}(R),i(b.onOpen)&&(R.onOpen=b.onOpen),i(b.onClose)&&(R.onClose=b.onClose),R.closeButton=O.closeButton,!1===b.closeButton||c(b.closeButton)?R.closeButton=b.closeButton:!0===b.closeButton&&(R.closeButton=!c(O.closeButton)||O.closeButton);let k=e;(0,o.isValidElement)(e)&&!r(e.type)?k=(0,o.cloneElement)(e,{closeToast:L,toastProps:R,data:_}):i(e)&&(k=e({closeToast:L,toastProps:R,data:_})),O.limit&&O.limit>0&&h.count>O.limit&&N?h.queue.push({toastContent:k,toastProps:R,staleId:T}):s(y)?setTimeout(()=>{C(k,R,T)},y):C(k,R,T)}function C(e,t,n){let{toastId:o}=t;n&&p.delete(n);let s={content:e,props:t};p.set(o,s),a(e=>[...e,o].filter(e=>e!==n)),f.emit(4,d(s,null==s.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(h.containerId=e.containerId,f.cancelEmit(3).on(0,T).on(1,e=>u.current&&E(e)).on(5,y).emit(2,h),()=>{p.clear(),f.emit(3,h)}),[]),(0,o.useEffect)(()=>{h.props=e,h.isToastActive=g,h.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:g}}(e),{className:g,style:h,rtl:y,containerId:E}=e;return(0,o.useEffect)(()=>{t&&(t.current=u.current)},[]),o.createElement("div",{ref:u,className:"Toastify",id:E},n((e,t)=>{let n=t.length?{...h}:{...h,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=a("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return i(g)?g({position:e,rtl:y,defaultClassName:t}):a(t,l(g))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:a,props:s}=e;return o.createElement(v,{...s,isIn:p(s.toastId),style:{...s.style,"--nth":n+1,"--len":t.length},key:`toast-${s.key}`},a)}))}))}));b.displayName="ToastContainer",b.defaultProps={position:"top-right",transition:C,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let I,w=new Map,_=[],O=1;function L(e,t){return w.size>0?f.emit(0,e,t):_.push({content:e,options:t}),t.toastId}function N(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||s(t.toastId))?t.toastId:""+O++}}function R(e){return(t,n)=>L(t,N(e,n))}function k(e,t){return L(e,N("default",t))}k.loading=(e,t)=>L(e,N("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),k.promise=function(e,t,n){let o,{pending:a,error:s,success:l}=t;a&&(o=r(a)?k.loading(a,n):k.loading(a.render,{...n,...a}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,a)=>{if(null==t)return void k.dismiss(o);let s={type:e,...c,...n,data:a},i=r(t)?{render:t}:t;return o?k.update(o,{...s,...i}):k(i.render,{...s,...i}),a},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",s,e)),d},k.success=R("success"),k.info=R("info"),k.error=R("error"),k.warning=R("warning"),k.warn=k.warning,k.dark=(e,t)=>L(e,N("default",{theme:"dark",...t})),k.dismiss=e=>{w.size>0?f.emit(1,e):_=_.filter(t=>null!=e&&t.options.toastId!==e)},k.clearWaitingQueue=function(e){return void 0===e&&(e={}),f.emit(5,e)},k.isActive=e=>{let t=!1;return w.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},k.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=w.get(n||I);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:a}=n,s={delay:100,...o,...t,toastId:t.toastId||e,updateId:""+O++};s.toastId!==e&&(s.staleId=e);let r=s.render||a;delete s.render,L(r,s)}},0)},k.done=e=>{k.update(e,{progress:1})},k.onChange=e=>(f.on(4,e),()=>{f.off(4,e)}),k.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},k.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f.on(2,e=>{I=e.containerId||e,w.set(I,e),_.forEach(e=>{f.emit(0,e.content,e.options)}),_=[]}).on(3,e=>{w.delete(e.containerId||e),0===w.size&&f.off(0).off(1).off(5)})}}]);