(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{26669:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(23311)}])},64612:(e,a,t)=>{"use strict";t.d(a,{A:()=>u});var s=t(74848),l=t(96540),i=t(91106),r=t.n(i);let n=e=>{let{currentRoute:a}=e,t={logo:"/assets/images/my-profile-img.jpg",siteName:"ARGOSTA",siteDescription:"Game Engine Developer",siteDegree:"M.Sc. Computer Science"},l={twitter:"https://twitter.com/argostapala",linkedin:"https://linkedin.com/in/arg1998",github:"https://github.com/arg1998",youtube:"https://youtube.com/@argostapala"};return(0,s.jsxs)("div",{className:"sidebar",children:[(0,s.jsxs)("div",{className:"personal-info",children:[t.logo&&(0,s.jsx)("div",{className:"profile-img",children:(0,s.jsx)("img",{src:t.logo,alt:t.siteName,className:"img-fluid rounded-circle"})}),(0,s.jsx)("h1",{className:"sitename",children:t.siteName}),(0,s.jsx)("h3",{className:"SiteDescription",children:t.siteDescription}),(0,s.jsx)("p",{className:"degree",children:t.siteDegree})]}),(0,s.jsx)("nav",{id:"navmenu",className:"navmenu",children:(0,s.jsx)("ul",{children:[{path:"/",label:"Home",icon:"bi-house"},{path:"/about",label:"About Me",icon:"bi-person"},{path:"/projects",label:"Projects",icon:"bi-braces"},{path:"/blog",label:"Blog",icon:"bi-journal-text"},{path:"/resume",label:"Resume",icon:"bi-file-earmark-person"},{path:"/contact",label:"Contact Me",icon:"bi-envelope"}].map(e=>(0,s.jsx)("li",{className:e.path=="/".concat(null==a?void 0:a.split("/")[1])?"active-menu":null,children:(0,s.jsxs)(r(),{href:e.path,children:[(0,s.jsx)("i",{className:"navicon ".concat(e.icon)}),e.label]})},e.path))})}),(0,s.jsxs)("div",{className:"social-links text-center",children:[l.twitter&&(0,s.jsx)("a",{href:l.twitter,target:"_blank",rel:"noopener noreferrer",className:"twitter",children:(0,s.jsx)("i",{className:"bi bi-twitter-x"})}),l.linkedin&&(0,s.jsx)("a",{href:l.linkedin,target:"_blank",rel:"noopener noreferrer",className:"linkedin",children:(0,s.jsx)("i",{className:"bi bi-linkedin"})}),l.github&&(0,s.jsx)("a",{href:l.github,target:"_blank",rel:"noopener noreferrer",className:"github",children:(0,s.jsx)("i",{className:"bi bi-github"})}),l.youtube&&(0,s.jsx)("a",{href:l.youtube,target:"_blank",rel:"noopener noreferrer",className:"youtube",children:(0,s.jsx)("i",{className:"bi bi-youtube"})})]})]})};var c=t(13368),o=t.n(c);let d=e=>{let{title:a,description:t,keywords:l}=e;return(0,s.jsxs)(o(),{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1"}),(0,s.jsx)("title",{children:a}),(0,s.jsx)("meta",{name:"description",content:t||""}),(0,s.jsx)("meta",{name:"keywords",content:l||""}),(0,s.jsx)("link",{rel:"icon",href:"/assets/images/favicon.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"/assets/images/apple-touch-icon.png"})]})},u=e=>{let{children:a,currentRoute:t,pageTitle:i}=e,[r,c]=(0,l.useState)(!1),o=(0,l.useRef)(null),u=(0,l.useRef)(null),m=(0,l.useRef)(null),h="";return("/"==t||"/home"==t)&&(h="shake-once"),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{title:i||"ARGOSTA"}),(0,s.jsxs)("div",{className:"main-container",children:[(0,s.jsx)("div",{id:"sidebar-container",ref:o,children:(0,s.jsx)(n,{currentRoute:t})}),(0,s.jsxs)("div",{id:"content-container",ref:u,children:[(0,s.jsx)("div",{id:"sidebar-toggle",className:"menu-button  ".concat(h),onClick:()=>{c(e=>!e),o.current&&u.current&&m.current&&(r?(o.current.classList.remove("show-sidebar"),u.current.classList.remove("hide-content"),m.current.classList.remove("bi-x"),m.current.classList.add("bi-list")):(o.current.classList.add("show-sidebar"),u.current.classList.add("hide-content"),m.current.classList.add("bi-x"),m.current.classList.remove("bi-list")))},children:(0,s.jsx)("i",{id:"sidebar-toggle-icon",className:"bi bi-list",ref:m})}),(0,s.jsx)("div",{id:"content-area",children:a})]})]})]})}},88806:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s={all:{value:"all",label:"All Tags"},cpp:{value:"cpp",label:"C++"},ezego:{value:"ezego",label:"eZeGo"},performance:{value:"performance",label:"Performance"},devJounral:{value:"devJounral",label:"Dev Journal"},poetry:{value:"poetry",label:"Poetry"}}},23311:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>g});var s=t(74848),l=t(96540),i=t(25929),r=t(64612),n=t(64053),c=t(32079);let o=e=>{let{onFilterBarUpdate:a,TagSource:t}=e,[i,r]=(0,l.useState)(null),[o,d]=(0,l.useState)(""),[u,m]=(0,l.useState)(null),[h,g]=(0,l.useState)(!1);(0,l.useEffect)(()=>{a({searchQuery:o||null,selectedDate:u,selectedTag:i})},[u,i,h]);let p=Object.values(t),b=()=>{r(null)},x=()=>{g(e=>!e)},j=()=>{r(null),d(""),m(null),g(e=>!e)},v=new Date,f=new Date(2025,0,1);return(0,s.jsx)("div",{id:"filter-bar-contianer",children:(0,s.jsxs)("div",{id:"filter-bar",children:[(0,s.jsxs)("div",{className:"search-container",children:[(0,s.jsx)("button",{id:"search-button",className:"bi bi-search",onClick:x}),(0,s.jsx)("input",{type:"text",id:"search-input",autoComplete:"off",placeholder:"Search Posts...",value:o,onChange:e=>{var a;d(null===(a=e.target)||void 0===a?void 0:a.value)},onKeyUp:e=>{"Enter"===e.key&&x()}}),(0,s.jsx)("button",{id:"reset-filters-mobile",onClick:j,children:(0,s.jsx)("i",{className:"bi bi-backspace"})})]}),(0,s.jsxs)("div",{className:"tag-date-reset-container",children:[(0,s.jsx)(n.A,{oneTap:!0,format:"MMM yyyy",placeholder:"Date",editable:!1,style:{minWidth:120},shouldDisableDate:e=>e<f||e>v,onSelect:e=>{m(e)},onClean:()=>{m(null)},value:u}),(0,s.jsx)(c.A,{data:p,style:{minWidth:140},value:i,placeholder:"Tags",searchable:!1,onSelect:e=>{e==t.all.value?b():r(e)},onClean:b}),(0,s.jsxs)("button",{id:"reset-filters",className:"reset-btn",onClick:j,children:[(0,s.jsx)("i",{className:"bi bi-backspace"})," Clear"]})]})]})})};var d=t(88806),u=t(97147);let m=e=>{let{postData:a}=e;return(0,s.jsxs)("div",{className:"blog-row",children:[(0,s.jsx)("div",{className:"blog-card-left-border"}),(0,s.jsxs)("div",{className:"blog-card",children:[(0,s.jsxs)("div",{className:"blog-card-img",children:[(0,s.jsx)("img",{src:a.imageUri,className:"card-img-top",alt:a.imageAlt}),a.tags&&Object.values(a.tags).length>0&&(0,s.jsx)("div",{className:"post-tags",children:a.tags.map((e,a)=>{let t=d.A[e];return t?(0,s.jsx)("span",{className:"single-post-tag",children:t.label},a):null})})]}),(0,s.jsxs)("div",{className:"blog-card-body",children:[(0,s.jsx)("h5",{className:"blog-card-title",children:a.fancyTitle}),(0,s.jsx)("p",{className:"blog-card-text",children:a.excerpt}),(0,s.jsxs)("div",{className:"blog-card-footer",children:[(0,s.jsx)("p",{className:"publish-date",children:(0,s.jsx)("small",{children:(0,u.Y)(new Date(a.date))})}),(0,s.jsx)("a",{href:"/blog/".concat(a.slug),className:"btn btn-primary read-more",children:"Read More"})]})]})]})]})},h=Object.values(JSON.parse('{"cplusplusAndPerformance":{"slug":"cplusplus-and-performance","fancyTitle":"C++ and Performance","imageUri":"/blog/colorful-image.jpg","imageAlt":"","date":1740358055908,"active":true,"excerpt":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","tags":[]},"somethingIsInTheAir":{"slug":"something-is-in-the-air","fancyTitle":"Wow, Something is in the air","imageUri":"/blog/No_Image_Available.jpg","imageAlt":"","date":1740358084227,"active":true,"excerpt":"","tags":[]},"testScrollBar":{"slug":"test-scroll-bar","fancyTitle":"Testing Scroll Bar","imageUri":"/blog/No_Image_Available.jpg","imageAlt":"","date":1740358098771,"active":true,"excerpt":"","tags":[]},"markdownTest":{"slug":"markdown-test","fancyTitle":"Testing React Markdown with Plugins","imageUri":"/blog/colorful-image.jpg","imageAlt":"","date":1740444938003,"active":true,"excerpt":"","tags":["cpp","performance"]},"finalMarkdownTest":{"slug":"final-markdown-test","fancyTitle":"Final Markdown Test","imageUri":"/blog/No_Image_Available.jpg","imageAlt":"","date":1740450648470,"active":true,"excerpt":"","tags":[]}}')),g=()=>{let[e,a]=(0,l.useState)({}),[t,n]=(0,l.useState)(!0),c=(()=>{let a=(e,a)=>e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth(),t=h;return e.selectedTag&&(t=t.filter(a=>a.tags.includes(e.selectedTag))),e.selectedDate&&(t=t.filter(t=>a(new Date(t.date),e.selectedDate))),e.searchQuery&&(t=new i.A(t,{keys:["fancyTitle","excerpt"],threshold:.3,includeScore:!0}).search(e.searchQuery).map(e=>e.item)),t})();return t?c.sort((e,a)=>a.date-e.date):c.sort((e,a)=>e.date-a.date),(0,s.jsxs)(r.A,{currentRoute:"/blog",pageTitle:"ARGOSTA → Blog",children:[(0,s.jsx)(o,{onFilterBarUpdate:e=>{a(e)},TagSource:d.A}),(0,s.jsx)("div",{id:"posts-container",className:"blog-container",children:c.map(e=>(0,s.jsx)(m,{postData:e},e.date))})]})}},97147:(e,a,t)=>{"use strict";t.d(a,{Y:()=>s});let s=e=>e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},e=>{var a=a=>e(e.s=a);e.O(0,[111,987,636,593,792],()=>a(26669)),_N_E=e.O()}]);