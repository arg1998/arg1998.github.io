(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{71871:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/url-preview-test",function(){return t(21159)}])},17985:(e,l,t)=>{"use strict";t.d(l,{A:()=>b});var a=t(74848),n=t(3441),s=t(7776),r=t(46800),i=t(24967),o=t(18183),c=t(49752),u=t(29212),d=t(9012),g=t(75651);t(34811),t(73736);let b=e=>{let{MarkdownFileContent:l,styles:t}=e;return(0,a.jsx)("div",{className:"blog-container-md",style:t,children:(0,a.jsx)(n.oz,{remarkPlugins:[r.A,o.A,s.A,i.A],rehypePlugins:[u.A,c.A,g.A,d.A],children:l})})}},76251:(e,l,t)=>{"use strict";t.d(l,{A:()=>r});var a=t(74848),n=t(88806),s=t(97147);let r=e=>{let{postData:l,bannerImage:t="",bannerImageMaxHeight:r=null,bannerImagePosition:i={x:.5,y:.5},drawBttomseparator:o=!1}=e;return(0,a.jsxs)("div",{id:"blog-post-banner-container",children:[(0,a.jsxs)("a",{className:"blog-post-back-btn",href:"/blog",children:[(0,a.jsx)("i",{className:"bi bi-arrow-left"})," Back to Blog"]}),(0,a.jsx)("h1",{className:"title",children:l.fancyTitle}),(0,a.jsxs)("div",{className:"blog-post-tag-date-container",children:[(0,a.jsx)("span",{className:"blog-post-banner-date",children:(0,s.Y)(new Date(l.date))}),(0,a.jsx)("div",{style:{display:"flex"},children:l.tags&&Object.values(l.tags).length>0&&(0,a.jsx)("div",{children:l.tags.map((e,l)=>{let t=n.A[e];return t?(0,a.jsx)("span",{className:"single-post-tag",children:t.label},l):null})})})]}),t&&(0,a.jsx)("img",{className:"blog-post-banner-image",src:t,alt:l.fancyTitle,style:{maxHeight:r||null,objectPosition:"".concat(100*i.x,"% ").concat(100*i.y,"%")}}),o&&(0,a.jsx)("hr",{})]})}},17788:(e,l,t)=>{"use strict";t.d(l,{A:()=>n});var a=t(74848);let n=e=>{let{children:l}=e;return(0,a.jsx)("div",{id:"blog-post-vertical-container",children:l})}},11987:(e,l,t)=>{"use strict";t.d(l,{A:()=>b});var a=t(74848),n=t(50756),s=t(15943),r=t(18185),i=t(7619),o=t.n(i),c=t(9012),u=t(77088),d=t(46800);let g=function(e){let l=!(arguments.length>1)||void 0===arguments[1]||arguments[1],t=Math.floor(Math.random()*(99999e7+1))+1e7;e.push("\n".concat(t));let a=(0,n.l)().use(d.A).use(s.A).use(r.A);return l&&(a=a.use(c.A)),a.use(o(),{position:"beforeend"}).use(u.A).processSync(e.join("\n")).toString().split("<p>".concat(t,"</p>"))[1]||""},b=e=>{let{markdownContents:l=null,showHeader:t,styles:n,generateReference:s=!0}=e;if(null==l||!l.length)return null;let r=g(l,s);return r?(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)("h1",{children:"Contents"}),(0,a.jsx)("div",{className:"blog-post-toc-container ".concat(!s&&"toc-disbaled-links"),dangerouslySetInnerHTML:{__html:r},style:n})]}):null}},88806:(e,l,t)=>{"use strict";t.d(l,{A:()=>a});let a={all:{value:"all",label:"All Tags"},cpp:{value:"cpp",label:"C++"},ezego:{value:"ezego",label:"eZeGo"},web_dev:{value:"web_dev",label:"Web Dev"},nextjs:{value:"nextjs",label:"NextJs"},performance:{value:"performance",label:"Performance"},devJounral:{value:"devJounral",label:"Dev Journal"},poetry:{value:"poetry",label:"Poetry"}}},21159:(e,l,t)=>{"use strict";t.r(l),t.d(l,{__N_SSG:()=>g,default:()=>b});var a=t(74848),n=t(86715),s=t(96540),r=t(18651),i=t(17788),o=t(76251),c=t(11987),u=t(17985);let d="# Testing Shared Links Preview On Social Media";var g=!0;let b=e=>{let{postData:l,socialPreviewData:t}=e;if(!l.active){let e=(0,n.useRouter)();return(0,s.useEffect)(()=>{e.replace("/404")},[]),null}return(0,a.jsx)(r.A,{currentRoute:l.URI,pageTitle:l.fancyTitle,pagePreviewData:t,children:(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{postData:l,bannerImage:""}),(0,a.jsx)(c.A,{markdownContents:[d],showHeader:!0,generateReference:!0}),(0,a.jsx)(u.A,{MarkdownFileContent:d})]})})}},97147:(e,l,t)=>{"use strict";t.d(l,{Y:()=>a});let a=e=>e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},e=>{var l=l=>e(e.s=l);e.O(0,[611,111,617,272,651,636,593,792],()=>l(71871)),_N_E=e.O()}]);