import{b as y,o as a,c as l,d as c,r as b,e as k,f as I,g as A,u as E,h as R,i as j,j as B,F as H,k as P,l as F,m as L}from"./app-be1439f6.js";const N={},T={class:"hero"};function V(x,n){return a(),l("div",T,n[0]||(n[0]=[c("div",{class:"container flex flex-col"},[c("h1",{class:"hero__headline"},"Articles"),c("p",{class:"hero__description"}," Explore my articles on academic learning, 🔬 research projects, 💻 development progress, and 💡 random thoughts. Enjoy the journey! ")],-1)]))}const $=y(N,[["render",V],["__scopeId","data-v-f5b77914"]]);const z={class:"container",id:"main-content"},i="Articles • F R Rakib",d="Here you can find my recent writings, blog, and research.",C={__name:"index",setup(x){const n=b(null);k();const{getRoutes:v}=I(),w=A(()=>v().filter(e=>e.path.startsWith("/articles/")&&e.name).sort((e,o)=>e.meta.frontmatter.published_at<o.meta.frontmatter.published_at?1:-1).map(e=>{var o,s,r,t,p,m,u,f,h,g;return{id:(s=(o=e.meta)==null?void 0:o.frontmatter)==null?void 0:s.id,articleId:e.name,title:(t=(r=e.meta)==null?void 0:r.frontmatter)==null?void 0:t.title,date:(m=(p=e.meta)==null?void 0:p.frontmatter)==null?void 0:m.published_at,path:e.path,excerpt:(f=(u=e.meta)==null?void 0:u.frontmatter)==null?void 0:f.excerpt,tags:(g=(h=e.meta)==null?void 0:h.frontmatter)==null?void 0:g.tags}}));E({title:i,meta:[{name:"description",content:d},{property:"og:type",content:"article"},{property:"og:title",content:i},{property:"og:description",content:d},{property:"twitter:title",content:i},{property:"twitter:description",content:d}]});const _=()=>{var o,s;let e;(s=(o=n==null?void 0:n.value)==null?void 0:o.style)==null||s.setProperty("--state","running"),window.clearTimeout(e),e=setTimeout(()=>{var r,t;(t=(r=n==null?void 0:n.value)==null?void 0:r.style)==null||t.setProperty("--state","paused")},2e3)};return R(()=>{window.addEventListener("scroll",_)}),j(()=>{window.removeEventListener("scroll",_)}),(e,o)=>{const s=$,r=L;return a(),l("main",{class:"main",ref_key:"main",ref:n},[B(s),c("section",z,[(a(!0),l(H,null,P(w.value,t=>(a(),F(r,{key:t.id,title:t.title,date:new Date(t.date),href:t.path,articleId:t.articleId,excerpt:t.excerpt,tags:t.tags,size:"long"},null,8,["title","date","href","articleId","excerpt","tags"]))),128))])],512)}}},M=y(C,[["__scopeId","data-v-2d823a4a"]]);export{M as default};
