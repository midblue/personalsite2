import{_ as c}from"./nuxt-link.61416c59.js";import{a as l,r as i,b as u,e as s,F as d,f as m,u as p,o as n,c as f,w as x,h as r,t as a,i as g}from"./entry.669f185c.js";const h={class:"index"},y=l({__name:"index",setup(k){let o=i([]);return u(()=>{fetch("/virtual-roadtrip/trips.json").then(t=>t.json()).then(t=>o.value=t)}),(t,v)=>{const _=c;return n(),s("div",h,[(n(!0),s(d,null,m(p(o),e=>(n(),f(_,{to:`/trip/${e.slug}`,key:e.slug},{default:x(()=>[r("h1",null,a(e.label),1),r("p",null," Starting from "+a(new Date(e.date).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"}))+" on "+a(new Date(e.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)]),_:2},1032,["to"]))),128))])}}});const b=g(y,[["__scopeId","data-v-b344fa55"]]);export{b as default};
