(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{26669:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(23311)}])},88806:(e,a,t)=>{"use strict";t.d(a,{A:()=>s});let s={all:{value:"all",label:"All Tags"},cpp:{value:"cpp",label:"C++"},ezego:{value:"ezego",label:"eZeGo"},web_dev:{value:"web_dev",label:"Web Dev"},nextjs:{value:"nextjs",label:"NextJs"},performance:{value:"performance",label:"Performance"},devJounral:{value:"devJounral",label:"Dev Journal"},poetry:{value:"poetry",label:"Poetry"}}},23311:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var s=t(74848),l=t(96540),r=t(25929),i=t(2504),n=t(64053),c=t(32079);let o=e=>{let{onFilterBarUpdate:a,TagSource:t}=e,[r,i]=(0,l.useState)(null),[o,d]=(0,l.useState)(""),[u,g]=(0,l.useState)(null),[b,p]=(0,l.useState)(!1);(0,l.useEffect)(()=>{a({searchQuery:o||null,selectedDate:u,selectedTag:r})},[u,r,b]);let h=Object.values(t),m=()=>{i(null)},x=()=>{p(e=>!e)},v=()=>{i(null),d(""),g(null),p(e=>!e)},j=new Date,f=new Date(2025,0,1);return(0,s.jsx)("div",{id:"filter-bar-contianer",children:(0,s.jsxs)("div",{id:"filter-bar",children:[(0,s.jsxs)("div",{className:"search-container",children:[(0,s.jsx)("button",{id:"search-button",className:"bi bi-search",onClick:x}),(0,s.jsx)("input",{type:"text",id:"search-input",autoComplete:"off",placeholder:"Search Posts...",value:o,onChange:e=>{var a;d(null===(a=e.target)||void 0===a?void 0:a.value)},onKeyUp:e=>{"Enter"===e.key&&x()}}),(0,s.jsx)("button",{id:"reset-filters-mobile",onClick:v,children:(0,s.jsx)("i",{className:"bi bi-backspace"})})]}),(0,s.jsxs)("div",{className:"tag-date-reset-container",children:[(0,s.jsx)(n.A,{oneTap:!0,format:"MMM yyyy",placeholder:"Date",editable:!1,style:{minWidth:120},shouldDisableDate:e=>e<f||e>j,onSelect:e=>{g(e)},onClean:()=>{g(null)},value:u}),(0,s.jsx)(c.A,{data:h,style:{minWidth:140},value:r,placeholder:"Tags",searchable:!1,onSelect:e=>{e==t.all.value?m():i(e)},onClean:m}),(0,s.jsxs)("button",{id:"reset-filters",className:"reset-btn",onClick:v,children:[(0,s.jsx)("i",{className:"bi bi-backspace"})," Clear"]})]})]})})};var d=t(88806),u=t(3329);let g=e=>{let{postData:a}=e,t=!!a.imageUri;if(!t)throw Error("A post must have an image");return(0,s.jsxs)("div",{className:"blog-row",children:[(0,s.jsx)("div",{className:"blog-card-left-border"}),(0,s.jsxs)("div",{className:"blog-card",children:[(0,s.jsxs)("div",{className:"blog-card-img",children:[t&&(0,s.jsx)("img",{src:a.imageUri,className:"card-img-top",alt:a.imageAlt}),a.tags&&Object.values(a.tags).length>0&&(0,s.jsx)("div",{className:"post-tags",children:a.tags.map((e,a)=>{let t=d.A[e];return t?(0,s.jsx)("span",{className:"single-post-tag",children:t.label},a):null})})]}),(0,s.jsxs)("div",{className:"blog-card-body",children:[(0,s.jsx)("h5",{className:"blog-card-title",children:a.fancyTitle}),(0,s.jsx)("p",{className:"blog-card-text",children:a.excerpt}),(0,s.jsxs)("div",{className:"blog-card-footer",children:[(0,s.jsx)("p",{className:"publish-date",children:(0,s.jsx)("small",{children:(0,u.Y)(new Date(a.date))})}),(0,s.jsx)("a",{href:"/blog/".concat(a.slug),className:"btn btn-primary read-more",children:"Read More"})]})]})]})]})},b=Object.values(JSON.parse('{"nextjsOnGithubPages":{"active":true,"slug":"nextjs-on-github-pages","URI":"/blog/nextjs-on-github-pages","URL":"https://www.argosta.me/blog/nextjs-on-github-pages","fancyTitle":"How I built my website using NextJs and GitHub Pages","imageUri":"/blog/nextjs-on-github-pages/banner.jpg","imageAlt":"","date":1741202783616,"excerpt":"Here, you can read about the process, decisions, tools, and struggles I encountered while building my own personal website from scratch using NextJs and GitHub Pages.","tags":["web_dev","nextjs","github"]},"statefulCppPart1":{"active":true,"slug":"stateful-cpp-part-1","URI":"/blog/stateful-cpp-part-1","URL":"https://wwwargosta.me/blog/stateful-cpp-part-1","fancyTitle":"Stateful C++ - Part 1","imageUri":"/blog/stateful-cpp-part-1/card.jpg","imageAlt":"","date":1742341758908,"excerpt":"In the first part of this \\"Stateful C++\\" series, we implement a basic state management system in C++ capable of Undo/Redo behaviors that is efficient and easy to use, and extendable. We also explore other methods of state management ","tags":[]}}')).filter(e=>e.active),p=()=>{let[e,a]=(0,l.useState)({}),[t,n]=(0,l.useState)(!0),c=(()=>{let a=(e,a)=>e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth(),t=b;return e.selectedTag&&(t=t.filter(a=>a.tags.includes(e.selectedTag))),e.selectedDate&&(t=t.filter(t=>a(new Date(t.date),e.selectedDate))),e.searchQuery&&(t=new r.A(t,{keys:["fancyTitle","excerpt"],threshold:.3,includeScore:!0}).search(e.searchQuery).map(e=>e.item)),t})();return t?c.sort((e,a)=>a.date-e.date):c.sort((e,a)=>e.date-a.date),(0,s.jsxs)(i.A,{currentRoute:"/blog",pageTitle:"ARGOSTA → Blog",pagePreviewData:{description:"Software Engineer | M.Sc. Computer Science",image:"https://www.argosta.me/assets/images/link_preview_img_1.jpeg",url:"https://www.argosta.me/blog"},children:[(0,s.jsx)(o,{onFilterBarUpdate:e=>{a(e)},TagSource:d.A}),(0,s.jsx)("div",{id:"posts-container",className:"blog-container",children:c.map(e=>(0,s.jsx)(g,{postData:e},e.date))})]})}},3329:(e,a,t)=>{"use strict";t.d(a,{Y:()=>s});let s=e=>e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},e=>{var a=a=>e(e.s=a);e.O(0,[111,987,504,636,593,792],()=>a(26669)),_N_E=e.O()}]);