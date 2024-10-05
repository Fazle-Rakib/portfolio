import{o as c,l as v,w as m,d as e,D as N,b as x,c as p,j as o,s as w,E as V,z as u,y as H,G as j,u as F,e as I,n as z,g as E,h as G,H as M,p as R,I as i,F as T,J as q,K as J,L as K,M as P}from"./app-be1439f6.js";const Q={__name:"ShareButton",props:{link:{type:String,required:!0},title:{type:String}},setup(_){const t=_,n=async()=>{await window.navigator.share({title:t.title??document.title,url:t.link})};return(l,s)=>{const r=N;return c(),v(r,{type:"button",variant:"outline",onClick:n,circle:""},{icon:m(()=>s[0]||(s[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("title",null,"Share"),e("circle",{cx:"18",cy:"5",r:"3"}),e("circle",{cx:"6",cy:"12",r:"3"}),e("circle",{cx:"18",cy:"19",r:"3"}),e("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),e("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})],-1)])),_:1})}}};const W={props:["articleUrl"]},X={class:"article-controls"};function Y(_,t,n,l,s,r){const a=V,d=Q;return c(),p("div",X,[o(a,{to:"/articles"},{default:m(()=>t[0]||(t[0]=[w("View other articles")])),_:1}),o(d,{link:n.articleUrl},null,8,["link"])])}const Z=x(W,[["render",Y],["__scopeId","data-v-89889404"]]);const tt={props:{title:{type:String},datetime:{type:String},displayDate:{type:String},crosspostedOn:{type:String},crosspostLink:{type:String},tags:{type:Array}}},et={class:"article-heading"},nt={class:"article-info"},ot=["datetime"],st={key:0,class:"article-source"},at=["href"];function ct(_,t,n,l,s,r){const a=j;return c(),p("div",et,[e("h1",null,u(n.title),1),e("p",nt,[e("time",{datetime:n.datetime},u(n.displayDate),9,ot),n.crosspostedOn&&n.crosspostLink?(c(),p("span",st,[t[0]||(t[0]=w(" Originally posted on ")),e("a",{href:n.crosspostLink,target:"_blank",rel:"noopener noreferrer"},u(n.crosspostedOn),9,at)])):H("",!0),o(a,{tags:n.tags},null,8,["tags"])])])}const rt=x(tt,[["render",ct],["__scopeId","data-v-b815735e"]]);const it={id:"main-content"},_t={class:"article"},lt={class:"container"},pt={ref:"articleBody",class:"article-body"},mt={__name:"article",setup(_){var g,y,h,f,k;F({link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"}]});const t=I(),n=(g=t.meta.frontmatter)==null?void 0:g.title,l=(y=t.meta.frontmatter)==null?void 0:y.tags.split(","),s=(h=t.meta.frontmatter)==null?void 0:h.crosspostedOn,r=(f=t.meta.frontmatter)==null?void 0:f.crosspostLink,a=(k=t.meta.frontmatter)==null?void 0:k.published_at,d=`${z.siteUrl}${t.path}`,b=E(()=>new Date(a).toLocaleString(["en-US"],{day:"2-digit",month:"short",year:"numeric"}));return G(()=>{M().observe()}),(S,dt)=>{const $=J,L=K,B=rt,D=Z,C=R("router-view"),O=P;return c(),p(T,null,[o($),o(L),e("main",it,[e("article",_t,[o(B,{title:i(n),tags:i(l),crosspostedOn:i(s),crosspostLink:i(r),datetime:i(a),displayDate:b.value},null,8,["title","tags","crosspostedOn","crosspostLink","datetime","displayDate"]),o(D,{articleUrl:d}),e("section",lt,[e("div",pt,[o(C,null,{default:m(({Component:A,route:U})=>[(c(),v(q(A),{key:U.path,class:"article-body-content text-justify"}))]),_:1})],512)])])]),o(O)],64)}}};export{mt as default};
