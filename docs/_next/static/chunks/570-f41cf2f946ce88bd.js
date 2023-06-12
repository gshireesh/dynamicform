"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[570],{4570:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var l=s(9268),a=s(6006);let i=a.forwardRef(function({title:e,titleId:t,...s},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",clipRule:"evenodd"}))}),n=a.forwardRef(function({title:e,titleId:t,...s},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",clipRule:"evenodd"}))});var r=s(6628),o=s(8268),d=s(8679);function c(e){let t={title:"",type:"short_text"},s=(0,r.v9)(o.Hz),c=(0,r.v9)(d.Jo),[m,u]=(0,a.useState)(""),[p,x]=(0,a.useState)(""),[h,g]=(0,a.useState)(""),[v,b]=(0,a.useState)([{...t}]),f=(0,r.I0)();(0,a.useEffect)(()=>{e.data&&(u(e.data.title),g(e.data.description),x(e.data.id),b(e.data.questions))},[]);let j={title:m,description:h,questions:v},y=(e,t,s)=>{v[t][s]=e.target.value,b([...v])},N=(e,t,s)=>{v[t].options[s]=e.target.value,b([...v])},w=e=>{v[e].options.push(""),b([...v])},_=(e,t)=>{v[e].options=v[e].options.filter((e,s)=>s!==t),b([...v])},C=e=>{b(v.filter((t,s)=>e!==s))},k=(e,t)=>{"multiple_choice"===e.target.value?v[t].options=[""]:delete v[t].options,v[t].type=e.target.value,b([...v])};return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=s.userDetails.id,l={...j};p&&(l.id=p),f((0,d.vw)({data:l,username:t}))},children:[(0,l.jsxs)("div",{className:"space-y-12 border-b px-10 pt-10",children:[(0,l.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,l.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Create your dynamic form"}),(0,l.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"This information will be used to create the form."}),(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium leading-6 text-gray-900",children:"Title"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600",children:(0,l.jsx)("input",{type:"text",name:"title",id:"title",value:m,required:!0,onChange:e=>u(e.target.value),autoComplete:"title",className:"form-control",placeholder:"Give a title to the form"})})})]}),(0,l.jsxs)("div",{className:"col-span-full",children:[(0,l.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium leading-6 text-gray-900",children:"Description"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"description",name:"description",required:!0,onChange:e=>g(e.target.value),rows:3,placeholder:"Write a few sentences describing the form",className:"form-control",value:h})})]})]})]}),(0,l.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,l.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Questions"}),(0,l.jsx)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Add questions as per requirement, you cannot modify questions after responses get started."}),v.map((e,t)=>{var s;return(0,l.jsxs)("div",{className:"mt-10 relative overflow-hidden grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 rounded-xl border border-dashed p-4 pt-8",children:[1!==v.length&&(0,l.jsx)("button",{type:"button",onClick:()=>C(t),className:"bg-red-500 text-white p-2 rounded-bl-xl text-sm absolute right-0",children:"remove"}),(0,l.jsxs)("div",{className:"sm:col-span-5",children:[(0,l.jsx)("label",{htmlFor:"question_title_"+t,className:"block text-sm font-medium leading-6 text-gray-900",children:"Describe Question"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("input",{type:"text",name:"title",required:!0,id:"question_title_"+t,value:e.title,onChange:e=>y(e,t,"title"),autoComplete:"title",className:"form-control"})})]}),(0,l.jsxs)("div",{className:"sm:col-span-1",children:[(0,l.jsx)("label",{htmlFor:"question_type_"+t,className:"block text-sm font-medium leading-6 text-gray-900",children:"Type"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsxs)("select",{id:"question_type_"+t,name:"type",autoComplete:"type",value:e.type,onChange:e=>k(e,t),className:"form-control",children:[(0,l.jsx)("option",{value:"short_text",children:"short text"}),(0,l.jsx)("option",{value:"long_text",children:"paragraph"}),(0,l.jsx)("option",{value:"multiple_choice",children:"multiple choice"})]})})]}),null==e?void 0:null===(s=e.options)||void 0===s?void 0:s.map((s,a)=>{var r;return(0,l.jsxs)("div",{className:"sm:col-span-3",children:[(0,l.jsx)("label",{htmlFor:"question_option_"+t+"_"+a,className:"block text-sm font-medium leading-6 text-gray-900",children:"Option"}),(0,l.jsxs)("div",{className:"mt-2 flex flex-row space-x-4",children:[(0,l.jsx)("input",{type:"text",name:"option",id:"question_option_"+t+"_"+a,autoComplete:"title",value:s,onChange:e=>N(e,t,a),className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}),(0!==a||1!==e.options.length)&&(0,l.jsx)("div",{className:"whitespace-nowrap",children:(0,l.jsx)("button",{onClick:()=>_(t,a),type:"button",className:"btn btn-danger text-sm",children:(0,l.jsx)(i,{className:"w-4"})})}),(null==e?void 0:null===(r=e.options)||void 0===r?void 0:r.length)===a+1&&(0,l.jsx)("div",{className:"whitespace-nowrap",children:(0,l.jsx)("button",{onClick:()=>w(t),type:"button",className:"btn btn-primary text-sm",children:(0,l.jsx)(n,{className:"w-4"})})})]})]},a)})]},t)}),(0,l.jsx)("div",{className:"mt-10",children:(0,l.jsx)("button",{onClick:()=>{b([...v,{...t}])},className:"btn btn-dark text-sm",type:"button",children:"Add question"})})]})]}),(0,l.jsx)("div",{className:"my-6 pr-10 flex items-center justify-end gap-x-6",children:(0,l.jsx)("button",{type:"submit",disabled:"idle"!==c.status,className:"btn btn-primary",children:p?"Update":"Create"})})]})})}}}]);