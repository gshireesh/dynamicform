(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2791:function(e,t,r){Promise.resolve().then(r.bind(r,7918))},7918:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var s=r(9268),n=r(8583),a=r.n(n);r(6356),r(2870);var o=r(7539),c=r(8268),u=r(8679),i=r(7379),l=r(7473);let d=(0,o.xC)({reducer:{auth:c.ZP,forms:u.ZP,collect:i.ZP,responses:l.ZP}});var f=r(6628),p=r(474);function h(e){let{children:t}=e;return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)(f.zt,{store:d,children:(0,s.jsxs)("body",{className:a().className,children:[t,(0,s.jsx)(p.Ix,{})]})})})}},7379:function(e,t,r){"use strict";r.d(t,{On:function(){return f},ZP:function(){return h},ap:function(){return i},Au:function(){return p},M7:function(){return l}});var s=r(7539),n=r(2740);async function a(e){let t=await fetch((0,n.l)()+"forms/"+e,{method:"GET",headers:{"Content-Type":"application/json"}});if(200!==t.status)throw Error("unable to fetch form!");return await t.json()}async function o(e,t){let r=await fetch((0,n.l)()+"forms/"+t+"/response",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(200!==r.status)throw Error("unable to create response!");return await r.json()}var c=r(474);let u={detailForm:void 0,successUpsert:!1,status:"init",upsertError:"",fetchError:""},i=(0,s.hg)("collect/fetch_by_id",async e=>await a(e)),l=(0,s.hg)("collect/upsert",async e=>{let{data:t,id:r}=e;return await o(t,r)}),d=(0,s.oM)({name:"collect",initialState:u,reducers:{clearCollect:e=>u},extraReducers:e=>{e.addCase(i.pending,e=>{e.status="loading",e.fetchError="",e.detailForm=void 0}).addCase(i.fulfilled,(e,t)=>{e.status="idle",e.detailForm=t.payload}).addCase(i.rejected,(e,t)=>{e.status="idle",e.fetchError=t.error.message}).addCase(l.pending,e=>{e.status="loading",e.successUpsert=!1,e.upsertError=""}).addCase(l.fulfilled,(e,t)=>{e.status="idle",e.successUpsert=!0,(0,c.Am)("success",{autoClose:2e3,type:"success"})}).addCase(l.rejected,(e,t)=>{e.status="idle",e.upsertError=t.error.message})}}),{clearCollect:f}=d.actions,p=e=>e.collect;var h=d.reducer},7473:function(e,t,r){"use strict";r.d(t,{DK:function(){return i},ZP:function(){return d},Ku:function(){return c},VM:function(){return l}});var s=r(7539),n=r(2740);async function a(e,t){let r=await fetch((0,n.l)()+"users/"+e+"/forms/"+t+"/responses",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});if(200!==r.status)throw Error("unable to fetch responses!");return await r.json()}let o={data:[],status:"init",fetchError:""},c=(0,s.hg)("responses/fetch",async e=>{let{username:t,id:r}=e;return await a(t,r)}),u=(0,s.oM)({name:"responses",initialState:o,reducers:{clearResponses:e=>o},extraReducers:e=>{e.addCase(c.pending,e=>{e.status="loading",e.fetchError=""}).addCase(c.fulfilled,(e,t)=>{e.status="idle",e.data=t.payload}).addCase(c.rejected,(e,t)=>{e.status="idle",e.fetchError=t.error.message})}}),{clearResponses:i}=u.actions,l=e=>e.responses;var d=u.reducer},2870:function(){},6356:function(){},8583:function(e){e.exports={style:{fontFamily:"'__Inter_c00bf1', '__Inter_Fallback_c00bf1'",fontStyle:"normal"},className:"__className_c00bf1"}}},function(e){e.O(0,[899,835,667,488,744],function(){return e(e.s=2791)}),_N_E=e.O()}]);