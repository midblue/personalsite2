import{_ as r}from"./nuxt-link.cc89e58d.js";import{a as s,r as _,b as c,e as u,f as i,u as p,F as l,o as a,c as m,w as f,h as d,t as x}from"./entry.e8279a84.js";const v=s({__name:"index",setup(h){let n=_([]);return c(()=>{fetch("/virtual-roadtrip/api/trips/").then(e=>e.json()).then(e=>n.value=e)}),(e,k)=>{const o=r;return a(!0),u(l,null,i(p(n),t=>(a(),m(o,{to:`/trip/${t}`,key:t},{default:f(()=>[d(x(t),1)]),_:2},1032,["to"]))),128)}}});export{v as default};
