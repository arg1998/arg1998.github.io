(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[116],{48895:(e,l,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/nextjs-on-github-pages",function(){return t(59902)}])},17985:(e,l,t)=>{"use strict";t.d(l,{A:()=>b});var n=t(74848),a=t(3441),s=t(7776),r=t(46800),o=t(24967),c=t(18183),i=t(49752),u=t(29212),d=t(9012),g=t(75651);t(34811),t(73736);let b=e=>{let{MarkdownFileContent:l,styles:t}=e;return(0,n.jsx)("div",{className:"blog-container-md",style:t,children:(0,n.jsx)(a.oz,{remarkPlugins:[r.A,c.A,s.A,o.A],rehypePlugins:[u.A,i.A,g.A,d.A],children:l})})}},88806:(e,l,t)=>{"use strict";t.d(l,{A:()=>n});let n={all:{value:"all",label:"All Tags"},cpp:{value:"cpp",label:"C++"},ezego:{value:"ezego",label:"eZeGo"},web_dev:{value:"web_dev",label:"Web Dev"},nextjs:{value:"nextjs",label:"NextJs"},performance:{value:"performance",label:"Performance"},devJounral:{value:"devJounral",label:"Dev Journal"},poetry:{value:"poetry",label:"Poetry"}}},59902:(e,l,t)=>{"use strict";t.r(l),t.d(l,{__N_SSG:()=>_,default:()=>y});var n=t(74848),a=t(86715),s=t(96540),r=t(2504);let o=e=>{let{children:l}=e;return(0,n.jsx)("div",{id:"blog-post-vertical-container",children:l})};var c=t(88806),i=t(97147);let u=e=>{let{postData:l,bannerImage:t="",bannerImageMaxHeight:a=null,bannerImagePosition:s={x:.5,y:.5},drawBttomseparator:r=!1}=e;return(0,n.jsxs)("div",{id:"blog-post-banner-container",children:[(0,n.jsxs)("a",{className:"blog-post-back-btn",href:"/blog",children:[(0,n.jsx)("i",{className:"bi bi-arrow-left"})," Back to Blog"]}),(0,n.jsx)("h1",{className:"title",children:l.fancyTitle}),(0,n.jsxs)("div",{className:"blog-post-tag-date-container",children:[(0,n.jsx)("span",{className:"blog-post-banner-date",children:(0,i.Y)(new Date(l.date))}),(0,n.jsx)("div",{style:{display:"flex"},children:l.tags&&Object.values(l.tags).length>0&&(0,n.jsx)("div",{children:l.tags.map((e,l)=>{let t=c.A[e];return t?(0,n.jsx)("span",{className:"single-post-tag",children:t.label},l):null})})})]}),t&&(0,n.jsx)("img",{className:"blog-post-banner-image",src:t,alt:l.fancyTitle,style:{maxHeight:a||null,objectPosition:"".concat(100*s.x,"% ").concat(100*s.y,"%")}}),r&&(0,n.jsx)("hr",{})]})};var d=t(50756),g=t(15943),b=t(18185),p=t(7619),h=t.n(p),v=t(9012),x=t(77088),j=t(46800);let m=function(e){let l=!(arguments.length>1)||void 0===arguments[1]||arguments[1],t=Math.floor(Math.random()*(99999e7+1))+1e7;e.push("\n".concat(t));let n=(0,d.l)().use(j.A).use(g.A).use(b.A);return l&&(n=n.use(v.A)),n.use(h(),{position:"beforeend"}).use(x.A).processSync(e.join("\n")).toString().split("<p>".concat(t,"</p>"))[1]||""},f=e=>{let{markdownContents:l=null,showHeader:t,styles:a,generateReference:s=!0}=e;if(null==l||!l.length)return null;let r=m(l,s);return r?(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)("h1",{children:"Contents"}),(0,n.jsx)("div",{className:"blog-post-toc-container ".concat(!s&&"toc-disbaled-links"),dangerouslySetInnerHTML:{__html:r},style:a})]}):null};var A=t(17985),_=!0;let y=e=>{let{postData:l,socialPreviewData:t}=e;if(!l.active){let e=(0,a.useRouter)();return(0,s.useEffect)(()=>{e.replace("/404")},[]),null}return(0,n.jsx)(r.A,{currentRoute:l.URI,pageTitle:l.fancyTitle,pagePreviewData:t,children:(0,n.jsxs)(o,{children:[(0,n.jsx)(u,{postData:l,bannerImage:"banner.jpg"}),(0,n.jsx)(f,{markdownContents:[""],showHeader:!0,generateReference:!0}),(0,n.jsx)(A.A,{MarkdownFileContent:""})]})})}},97147:(e,l,t)=>{"use strict";t.d(l,{Y:()=>n});let n=e=>e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},e=>{var l=l=>e(e.s=l);e.O(0,[611,111,617,272,504,636,593,792],()=>l(48895)),_N_E=e.O()}]);