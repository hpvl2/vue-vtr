import{r as V,u as k,o as w,a as n,c as _,b as s,w as e,V as g,d as p,e as l,f as v,g as o,F as x,h as U,i as y,j as B,k as S,t as c,l as I,m,p as L,n as T,q as b}from"./index-fb4be264.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const N=r=>(L("data-v-79fa5c02"),r=r(),T(),r),$={class:"users"},D=N(()=>b("p",{class:"users__title"},"Users",-1)),E={__name:"Users",setup(r){const u=V({userList:[]}),i=k();w(async()=>{f()});async function f(){try{const t=await fetch("https://jsonplaceholder.typicode.com/users"),d=await t.json();if(u.userList=d,!t.ok){const a=`An error has occured: ${t.status} - ${t.statusText}`;throw new Error(a)}}catch(t){console.error(t)}}function h(t){i.push({name:"User",params:{id:t}})}function C(){i.push({name:"CreateUser"})}return(t,d)=>(n(),_("div",$,[s(g,null,{default:e(()=>[s(p,null,{default:e(()=>[s(l,{cols:"5",md:"9"},{default:e(()=>[D]),_:1}),s(l,{cols:"7",md:"3"},{default:e(()=>[s(v,{elevation:"1",height:"40",tile:"true",top:"true",outlined:"",class:"create-user mt-15 mb-15",onClick:C},{default:e(()=>[o("Create user")]),_:1})]),_:1})]),_:1}),s(p,null,{default:e(()=>[(n(!0),_(x,null,U(u.userList,a=>(n(),y(l,{cols:"12",md:"4",lg:"4",key:a.id},{default:e(()=>[s(B,{class:"user-card",elevation:"1",tile:"","max-width":"380","min-width":"350",height:"160",onClick:F=>h(a.id)},{default:e(()=>[s(S,{class:"title pt-6"},{default:e(()=>[o(c(a.name),1)]),_:2},1024),s(I,{class:"username"},{default:e(()=>[o("@"+c(a.username),1)]),_:2},1024),s(m,{class:"email mt-4"},{default:e(()=>[o(c(a.email),1)]),_:2},1024),s(m,{class:"phone"},{default:e(()=>[o(c(a.phone),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]))}},A=j(E,[["__scopeId","data-v-79fa5c02"]]);export{A as default};
