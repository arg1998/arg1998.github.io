(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{26669:(e,s,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return a(99962)}])},64612:(e,s,a)=>{"use strict";a.d(s,{A:()=>u});var t=a(74848),i=a(96540),l=a(91106),r=a.n(l);let n=e=>{let{currentRoute:s}=e,a={logo:"/assets/images/my-profile-img.jpg",siteName:"ARGOSTA",siteDescription:"Game Engine Developer",siteDegree:"M.Sc. Computer Science"},i={twitter:"https://twitter.com/argostapala",linkedin:"https://linkedin.com/in/arg1998",github:"https://github.com/arg1998",youtube:"https://youtube.com/@argostapala"};return(0,t.jsxs)("div",{className:"sidebar",children:[(0,t.jsxs)("div",{className:"personal-info",children:[a.logo&&(0,t.jsx)("div",{className:"profile-img",children:(0,t.jsx)("img",{src:a.logo,alt:a.siteName,className:"img-fluid rounded-circle"})}),(0,t.jsx)("h1",{className:"sitename",children:a.siteName}),(0,t.jsx)("h3",{className:"SiteDescription",children:a.siteDescription}),(0,t.jsx)("p",{className:"degree",children:a.siteDegree})]}),(0,t.jsx)("nav",{id:"navmenu",className:"navmenu",children:(0,t.jsx)("ul",{children:[{path:"/",label:"Home",icon:"bi-house"},{path:"/about",label:"About Me",icon:"bi-person"},{path:"/projects",label:"Projects",icon:"bi-braces"},{path:"/blog",label:"Blog",icon:"bi-journal-text"},{path:"/resume",label:"Resume",icon:"bi-file-earmark-person"},{path:"/contact",label:"Contact Me",icon:"bi-envelope"}].map(e=>(0,t.jsx)("li",{className:e.path==s?"active-menu":null,children:(0,t.jsxs)(r(),{href:e.path,children:[(0,t.jsx)("i",{className:"navicon ".concat(e.icon)}),e.label]})},e.path))})}),(0,t.jsxs)("div",{className:"social-links text-center",children:[i.twitter&&(0,t.jsx)("a",{href:i.twitter,target:"_blank",rel:"noopener noreferrer",className:"twitter",children:(0,t.jsx)("i",{className:"bi bi-twitter-x"})}),i.linkedin&&(0,t.jsx)("a",{href:i.linkedin,target:"_blank",rel:"noopener noreferrer",className:"linkedin",children:(0,t.jsx)("i",{className:"bi bi-linkedin"})}),i.github&&(0,t.jsx)("a",{href:i.github,target:"_blank",rel:"noopener noreferrer",className:"github",children:(0,t.jsx)("i",{className:"bi bi-github"})}),i.youtube&&(0,t.jsx)("a",{href:i.youtube,target:"_blank",rel:"noopener noreferrer",className:"youtube",children:(0,t.jsx)("i",{className:"bi bi-youtube"})})]})]})};var c=a(13368),o=a.n(c);let d=e=>{let{title:s,description:a,keywords:i}=e;return(0,t.jsxs)(o(),{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1"}),(0,t.jsx)("title",{children:s}),(0,t.jsx)("meta",{name:"description",content:a||""}),(0,t.jsx)("meta",{name:"keywords",content:i||""}),(0,t.jsx)("link",{rel:"icon",href:"/assets/images/favicon.png"}),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"/assets/images/apple-touch-icon.png"})]})},u=e=>{let{children:s,currentRoute:a,pageTitle:l}=e,[r,c]=(0,i.useState)(!1),o=(0,i.useRef)(null),u=(0,i.useRef)(null),h=(0,i.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{title:l||"ARGOSTA"}),(0,t.jsx)("div",{className:"background-image",children:(0,t.jsx)("img",{src:"/assets/images/bg-dark.png",alt:"Background"})}),(0,t.jsxs)("div",{className:"main-container",children:[(0,t.jsx)("div",{id:"sidebar-container",ref:o,children:(0,t.jsx)(n,{currentRoute:a})}),(0,t.jsxs)("div",{id:"content-container",ref:u,children:[(0,t.jsx)("div",{id:"sidebar-toggle",className:"menu-button",onClick:()=>{c(e=>!e),o.current&&u.current&&h.current&&(r?(o.current.classList.remove("show-sidebar"),u.current.classList.remove("hide-content"),h.current.classList.remove("bi-x"),h.current.classList.add("bi-list")):(o.current.classList.add("show-sidebar"),u.current.classList.add("hide-content"),h.current.classList.add("bi-x"),h.current.classList.remove("bi-list")))},children:(0,t.jsx)("i",{id:"sidebar-toggle-icon",className:"bi bi-list",ref:h})}),s]})]})]})}},99962:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var t=a(74848),i=a(96540),l=a(64612),r=a(32079),n=a(64053);let c={all:{value:"__ALL__",label:"All Tags"},cpp:{value:"__cpp__",label:"C++"},poetry:{value:"__poetry__",label:"Poetry"},ezego:{value:"__ezego__",label:"eZeGo"},devJounral:{value:"__dev_journal__",label:"Dev Journal"}},o=e=>{let{onFilterBarUpdate:s}=e,[a,l]=(0,i.useState)(null),[o,d]=(0,i.useState)(""),[u,h]=(0,i.useState)(null),[b,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{s({searchQuery:o||null,selectedDate:u,selectedTag:a})},[u,a,b]);let p=Object.values(c),g=()=>{l(null)},x=()=>{m(e=>!e)},j=new Date,v=new Date(2025,0,1);return(0,t.jsx)("div",{id:"filter-bar-contianer",children:(0,t.jsxs)("div",{id:"filter-bar",children:[(0,t.jsxs)("div",{className:"search-container",children:[(0,t.jsx)("button",{id:"search-button",className:"bi bi-search",onClick:x}),(0,t.jsx)("input",{type:"text",id:"search-input",autoComplete:"off",placeholder:"Search posts...",value:o,onChange:e=>{var s;d(null===(s=e.target)||void 0===s?void 0:s.value)},onKeyUp:e=>{"Enter"===e.key&&x()}})]}),(0,t.jsxs)("div",{className:"tag-date-reset-container",children:[(0,t.jsx)(r.A,{data:p,style:{minWidth:100,maxWidth:160},value:a,placeholder:"Tags",searchable:!1,onSelect:e=>{e==c.all.value?g():l(e)},onClean:g}),(0,t.jsx)(n.A,{oneTap:!0,format:"MMMM yyyy",placeholder:"Published Date",editable:!1,style:{minWidth:100,maxWidth:160},shouldDisableDate:e=>e<v||e>j,onSelect:e=>{h(e)},value:u}),(0,t.jsxs)("button",{id:"reset-filters",className:"reset-btn",onClick:()=>{l(null),d(""),h(null)},children:[(0,t.jsx)("i",{className:"bi bi-trash"})," Reset"]})]})]})})},d=()=>(0,t.jsx)(l.A,{currentRoute:"/blog",pageTitle:"ARGOSTA → Blog",children:(0,t.jsx)(o,{onFilterBarUpdate:e=>{console.log(e)}})})}},e=>{var s=s=>e(e.s=s);e.O(0,[111,435,636,593,792],()=>s(26669)),_N_E=e.O()}]);