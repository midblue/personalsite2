import{a as p,i as u,r as m,b as h,o as n,e as c,F as f,f as v,l as e,h as r,t as s,s as I,v as x,x as y}from"./entry.1b282f1e.js";import"./app.config.8fe53bf3.js";const i=o=>(I("data-v-ce838807"),o=o(),x(),o),S={class:"flex tripholder"},b=["src"],k=i(()=>e("br",null,null,-1)),D=i(()=>e("br",null,null,-1)),w={class:"sub"},F=i(()=>e("summary",null,"Raw Data",-1)),B=p({__name:"[tripId]",setup(o){const l=u(),{tripId:d}=l.params,_=m({});return h(()=>{fetch(`/api/trips/${d}`).then(a=>a.json()).then(a=>_.value=a)}),(a,C)=>(n(),c("div",S,[(n(!0),c(f,null,v(_.value,t=>(n(),c("div",{key:t.packageName,class:"stage marbot"},[e("img",{src:t.imgPath},null,8,b),e("div",null,[r(s(new Date(t.weather.timeThere).toLocaleString())+" ",1),k,r(" "+s(t.locationData.distanceToCityInKm.toFixed(0))+"km outside of "+s(t.locationData.nearestCity)+" ",1),D,r(" "+s(t.hoursFromStart)+" hours from start ",1)]),e("details",w,[F,r(" "+s(t),1)])]))),128))]))}});const g=y(B,[["__scopeId","data-v-ce838807"]]);export{g as default};
