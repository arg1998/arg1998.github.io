(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{95233:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(61825)}])},46081:(e,t,i)=>{"use strict";i.d(t,{A:()=>g});var o=i(74848),n=i(3441),a=i(7776),r=i(46800),s=i(24967),l=i(18183),c=i(49752),p=i(29212),m=i(9012),d=i(75651);i(34811),i(73736);let g=e=>{let{MarkdownFileContent:t,styles:i,numberedHeadings:g=!1}=e;return g&&remarkPlugins.push(remarkNumberedHeadings),(0,o.jsx)("div",{className:"blog-container-md",style:i,children:(0,o.jsx)(n.oz,{remarkPlugins:[r.A,l.A,a.A,s.A],rehypePlugins:[p.A,c.A,d.A,m.A],children:t})})}},92714:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var o=i(74848),n=i(96540);let a=e=>{let{text:t,children:i,position:a="top"}=e,[r,s]=(0,n.useState)(!1);return(0,o.jsxs)("div",{className:"tooltip-wrapper",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[i,r&&(0,o.jsx)("div",{className:"tooltip-box ".concat(a),children:t})]})}},61825:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var o=i(74848),n=i(2504),a=i(46081),r=i(92714);let s=e=>{let{children:t,imagePath:i,title:n,imageStyles:a,languages:s,platforms:l,tools:c,topics:p,ribbonComponent:m,ribbonStyles:d,githubUrl:g,readMoreUri:h}=e,u=null!=s&&s.length>0||null!=l&&l.length>0||null!=c&&c.length>0||null!=p&&p.length>0,b=(!!h||!!g)&&u,y="#f55566",f="#ff5ba8",j="#ffd700";return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"project-grid-item",style:{borderBottomRightRadius:b?0:15,marginBottom:b?120:25},children:[(0,o.jsx)("div",{className:"project-grid-item-image-container",children:i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{className:"project-grid-item-image",src:i,style:a}),(0,o.jsx)("div",{className:"project-grid-item-image-gradient"}),m&&(0,o.jsxs)("div",{className:"project-grid-item-ribbon-container",style:d,children:[" ",m," "]})]})}),(0,o.jsxs)("div",{className:"project-grid-item-content-container",children:[(0,o.jsxs)("div",{className:"project-grid-item-content-description",children:[n&&(0,o.jsx)("p",{className:"project-grid-item-content-title",children:n}),t]}),(0,o.jsxs)("div",{className:"project-grid-item-content-extras-container",children:[u&&(0,o.jsxs)("div",{className:"project-grid-item-content-extras",children:[p&&(0,o.jsxs)("div",{className:"project-extra-topics-container project-extra-entry",children:[(0,o.jsx)("span",{children:"Topics"}),(0,o.jsx)("div",{className:"project-item-extra-horizontal-container",children:p.map((e,t)=>(0,o.jsx)("span",{style:{color:y,borderColor:y},className:"project-item-chips",children:e},t))})]}),c&&(0,o.jsxs)("div",{className:"project-extra-tools-container project-extra-entry",children:[(0,o.jsx)("span",{children:"Tools"}),(0,o.jsx)("div",{className:"project-item-extra-horizontal-container",children:c.map((e,t)=>(0,o.jsx)("span",{style:{color:f,borderColor:f},className:"project-item-chips",children:e},t))})]}),s&&(0,o.jsxs)("div",{className:"project-extra-languages-container project-extra-entry",children:[(0,o.jsx)("span",{children:"Languages"}),(0,o.jsx)("div",{className:"project-item-extra-horizontal-container",children:s.map((e,t)=>(0,o.jsx)("span",{style:{color:j,borderColor:j},className:"project-item-chips",children:e},t))})]}),l&&(0,o.jsxs)("div",{className:"project-extra-platforms-container project-extra-entry",children:[(0,o.jsx)("span",{children:"Platforms"}),(0,o.jsx)("div",{className:"project-item-extra-horizontal-container",children:l.map((e,t)=>{if(e.component&&e.tooltip)return(0,o.jsxs)(r.A,{text:e.tooltip,children:[" ",(0,o.jsx)(e.component,{className:"project-platform-svg-icon",color:"#33ccff"})," "]},t)})})]})]}),b&&(0,o.jsxs)("div",{className:"project-item-buttons",children:[g&&(0,o.jsxs)("a",{target:"_blank",className:"project-item-button-github ".concat(h?"":"github-expanded"),href:g,children:[" ",(0,o.jsx)("i",{className:"bi bi-github"}),(0,o.jsx)("span",{children:"Source Code"})]}),h&&(0,o.jsx)("a",{target:"_blank",className:"project-item-button-read-more ".concat(g?"":"read-more-expanded"),href:h,children:"Read More"}),(0,o.jsx)("div",{className:"project-item-corner-arch"})]})]})]})]})})};var l=i(16415);let c=e=>{let{styles:t}=e;return(0,o.jsxs)("div",{className:"ribbon ribbon-wip",style:t,children:[" ",(0,o.jsx)("i",{className:"bi bi-cone-striped"}),(0,o.jsx)("span",{children:" W.I.P "})]})},p=e=>{let{styles:t}=e;return(0,o.jsxs)("div",{className:"ribbon ribbon-educational",style:t,children:[" ",(0,o.jsx)("i",{className:"bi bi-circle-half"})," ",(0,o.jsx)("span",{children:"Demo"})," "]})},m=e=>{let{styles:t}=e;return(0,o.jsxs)("div",{className:"ribbon ribbon-archive",style:t,children:[" ",(0,o.jsx)("i",{className:"bi bi-archive-fill"})," ",(0,o.jsx)("span",{children:"Archived"})," "]})},d=()=>(0,o.jsx)(n.A,{currentRoute:"/projects",pageTitle:"ARGOSTA → Projects",pagePreviewData:{description:"Software Engineer | M.Sc. Computer Science",image:"https://www.argosta.me/assets/images/link_preview_img_1.jpeg",url:"https://www.argosta.me/proejcts"},children:(0,o.jsxs)("div",{className:"project-area-container",children:[(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(c,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"rgb(255, 102, 0)",border:"2px solid"},githubUrl:"https://github.com/arg1998/ezego",imagePath:"ezego.jpg",imageStyles:{objectPosition:"0% 93%",aspectRatio:4},languages:["C++ 17","Python"],topics:["Visualization","Cross-platform","Real-time","GUI","FOSS"],tools:["Dear ImGui","Tracy Profiler","CMake","Boost","RtMIDI"],platforms:[{component:l.lG,tooltip:"Windows"},{component:l.iT,tooltip:"Linux"},{component:l.ig,tooltip:"macOS"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:"# eZeGo!\r\n\r\n\r\n**eZeGo** is an interactive, real-time stage lighting software that enables intuitive music visualization. It is designed for use in both physical venues, from small rooms to large concerts, and virtual environments, including traditional 3D games and immersive VR/XR spaces.\r\n\r\neZeGo is built from the ground up with performance and responsiveness in mind. It supports all major platforms (Windows, Linux, macOS) and is free to use for personal and commercial use under the MIT license. ",styles:{fontSize:"13pt"}})}),(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(p,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"rgb(0, 217, 255)",border:"2px solid"},githubUrl:"https://github.com/arg1998/qosmit2d",imagePath:"qosmit2d.png",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Game Engine","ECS","2D","Real-time","Cross-platform"],tools:["SFML","Dear ImGui","Tracy Profiler","CMake"],languages:["C++ 17"],platforms:[{component:l.lG,tooltip:"Windows"},{component:l.iT,tooltip:"Linux"},{component:l.ig,tooltip:"macOS"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:'# Qosmit2D\r\n\r\n**Qosmit2D** is a simple 2D game engine written in C++ and <a target="_blank" href="https://www.sfml-dev.org/">SFML</a>. It uses Entity-Component-System for managing game objects. Currently Qosmit2D has implemented bellow systems:\r\n\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">ECS</span>** : to handle game objects (entities) within the game and their behavior (components) through centralized logic blocks (systems)\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Resource Manager</span>** : for loading and managing assets (images, sprites, audio files, etc) and scenes\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Input System</span>** : to process mouse and keyboard events and map them into Commands\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Audio Player</span>** : to play music and sound effects\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Collision Physics</span>** : to handle collision for simple 2D objects\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Animation</span>** : to drive simple transform and sprite animations\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Visual Debugger</span>** : to provide insights from various game engine system while the game is running\r\n- **<span style="color: color-mix(in srgb, var(--primary-color), white 60%);">Frame Profiler</span>** : used Tracy to profile runtime and memory usage of various parts of the engine \r\n\r\n> [!info]\r\n> I created this game engine as a learning experiment to explore various concepts discussed in the <a target="_blank" href="https://www.gameenginebook.com/">Game Engine Architecture</a> book and understand how different engine systems interact. It is not intended for production use at any scale.',styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{githubUrl:"https://github.com/arg1998/obsidian-svg-styler",imagePath:"svg-styler.png",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Obsidian.md","Plugin","SVG","GUI","Open-source"],tools:["Obsidian API","Chrome Dev Tools","VS Code"],languages:["JavaScript","HTML","CSS"],platforms:[{component:l.lG,tooltip:"Windows"},{component:l.iT,tooltip:"Linux"},{component:l.ig,tooltip:"macOS"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:"# Obsidian SVG Styler\r\n\r\nSVG Styler is a simple Obsidian community plugin designed to help you easily modify the style properties of SVG vector graphics directly within the editor. With this plugin, you can customize properties like color, border, opacity, and more. Supported drawable tags include: `path`, `line`, `rect`, `circle`, `ellipse`, and `polygon`.",styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(m,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"#fbff00",border:"2px solid"},githubUrl:"https://github.com/arg1998/LightKnight",imagePath:"lightknight.png",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Stage Lighting","Visualization","Music","Cross-platform","Real-time"],tools:["ElectronJs","Qt","Arduino","ReactJs","Redux","WaveSurfer","TinyColor","d3"],languages:["JavaScript","C/C++","HTML","CSS"],platforms:[{component:l.lG,tooltip:"Windows"},{component:l.iT,tooltip:"Linux"},{component:l.Mj,tooltip:"Arduino"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:'# LightKnight  \r\n\r\n**LightKnight** is a desktop-based LED strip animator developed using web technologies. It enables users to configure multiple LED channels (either RGB or single color), import a music file, and design animations synchronized with the audio. \r\n\r\nCheck out a <a href="https://www.youtube.com/watch?v=njnCorMyLxw" target="_blank">demo video on YouTube</a> (apologies for the low recording quality \uD83E\uDD37‍♂️).  \r\n\r\n> [!warning]  \r\n> This project was archived in October 2020 and is no longer maintained. I am currently working on <i>eZeGo</i>, the successor to LightKnight.',styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{githubUrl:"https://github.com/arg1998/RiceSeedDetector",imagePath:"rice_seeds.jpg",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Computer Vision","Deep Learning","CNNs","Dataset","Research","Agriculture"],tools:["OpenCV","Keras","TensorFlow","Jupyter","matplotlib","numpy","Pillow","HDF5"],languages:["Python"],platforms:[{component:l.iT,tooltip:"Linux"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:"# Rice Seed Classifier\r\n\r\nFor my Computer Vision Engineer Internship at _Rice Research Institute of Iran (RRII)_, I worked on automating rice seed classification and defect detection. The goal was to identify different local rice varieties and spot broken or defective grains faster and more accurately than human experts. Using deep learning and computer vision, I trained CNN models that achieved 87.1% accuracy in variety classification and 97.6% accuracy in defect detection while making the process 120x faster. I used OpenCV with the Canny algorithm to automatically isolate and crop individual rice grains, then built a dataset of over 1 million labeled images. The models were trained and deployed with TensorFlow and Keras on an Ubuntu environment.\r\n\r\nA big part of this project was dataset creation and automating the process of finding and cropping single rice grains while filtering out empty slots and broken seeds. The full dataset and source code are still confidential, but I’ve shared a simplified version for educational purposes.",styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(p,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"rgb(238, 255, 0)",border:"2px solid"},githubUrl:"https://github.com/arg1998/FearOfGod",imagePath:"fear_of_god.jpg",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["UI","Animation","Design","Fashion","Online Shopping"],tools:["Flutter","VS Code","Flutter Dev Tools"],languages:["Dart"],platforms:[{component:l.z0,tooltip:"Android"},{component:l.ig,tooltip:"iOS"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:'# Fear of God\r\n\r\nThis project showcases a visually stunning mobile application UI/UX design, originally created by <a href="https://dribbble.com/shots/6938770-Fear-Of-God-Fashion-Store-App-Concept" target="_blank" >Lisa Parker on Dribbble</a>. The design incorporates dynamic elements like Hero animations and a combination of vertical and horizontal list views. Built using Flutter, this demo leverages its powerful UI, typography, and animation capabilities to bring an engaging and seamless user experience to life.\r\n\r\nTo see this demo in action, check out <a target="_blank" href="https://github.com/arg1998/FearOfGod/blob/master/__GITHUB__/gif.gif">this GIF</a> in my project\'s GitHub repository.  ',styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(p,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"rgb(238, 255, 0)",border:"2px solid"},githubUrl:"https://github.com/arg1998/HumidiStat",imagePath:"humidistat.jpg",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Animation","IoT","Interaction","UX","UI"],tools:["React Native","RN Reanimated","Gesture Handler","Android Studio","d3"],languages:["JavaScript"],platforms:[{component:l.z0,tooltip:"Android"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:'# IoT Humidity Slider\r\n\r\nThis demo project is inspired by an original design from <a target="_blank" href="https://dribbble.com/shots/6315218-IoT-Humidity-App-Slider">Elijah Bozniak on Dribbble</a>. It showcases a mobile application for controlling home humidity, featuring sleek user interface and fluid animations.  \r\n\r\nI selected this design to highlight UI animations and interactions within React Native using the <a target="_blank" href="https://docs.swmansion.com/react-native-reanimated/">Reanimated</a> library. Reanimated is a robust animation library that enables developers to create intricate, interactive, and high-performance animations directly on the UI thread.  \r\n\r\nTo see the IoT Humidity Slider app in action, check out <a target="_blank" href="https://github.com/arg1998/HumidiStat/blob/master/__assets__/vid.gif">this GIF</a> in my project\'s GitHub repository.  \r\n',styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(m,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"rgb(249, 252, 78)",border:"2px solid"},githubUrl:"https://github.com/arg1998/GeneticProgramming",imagePath:"gp.jpg",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Genetic Programming","Optimization","Algorithms","Solvers","Heuristic"],tools:["GraphViz","VS Code","Jupyter"],languages:["Python"],platforms:[{component:l.iT,tooltip:"Linux"},{component:l.lG,tooltip:"Windows"},{component:l.ig,tooltip:"macOS"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:"# Genetic Programming Solver\r\n\r\nThis project explored a specific subset of heuristic algorithms known as Genetic Algorithms, which are inspired by the process of natural selection. Genetic Programming, a related technique, evolves computer programs or mathematical expressions by iteratively selecting, mutating, and recombining solutions to optimize performance based on a set of defined fitness functions.\r\n\r\nMy goal was to apply these techniques to solve problems with a tree-structured nature, such as circuits, mathematical expressions, and decision trees. This solver takes an input-output mapping and generates a function—either discrete or continuous—that best fits the given data, effectively acting as a curve-fitting algorithm optimized for hierarchical expressions.  \r\n\r\nFor my **Digital Circuits** course project, I utilized this solution to generate custom circuit components, significantly enhancing my design process. This project was recognized as the best in the class.",styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{ribbonComponent:(0,o.jsx)(m,{}),ribbonStyles:{backgroundColor:"#2a2a2a88",color:"rgb(249, 252, 78)",border:"2px solid"},githubUrl:"https://github.com/arg1998/GeneticProgramming",imagePath:"optimal_dp.jpg",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Dynamic Programming","Geometry","Tesselation","Optimization"],tools:["p5","JetBrains IDEA"],languages:["Java"],platforms:[{component:l.iT,tooltip:"Linux"},{component:l.lG,tooltip:"Windows"},{component:l.ig,tooltip:"macOS"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:"# Optimal Triangulation \r\n\r\nThis project was developed for my Advanced Algorithms course, where my team and I designed and implemented an algorithm to triangulate a convex polygon in a way that minimizes the total length of internal edges (i.e., the sum of triangle perimeters). We achieved this optimization using a dynamic programming approach.\r\n\r\nBeyond algorithm design and implementation, I also developed a GUI desktop application to visually demonstrate our optimizer in action, allowing for an interactive and live presentation in class.",styles:{textAlign:"start",fontSize:"13pt"}})}),(0,o.jsx)(s,{githubUrl:"https://github.com/arg1998/arg1998.github.io",readMoreUri:"/blog/nextjs-on-github-pages",imagePath:"argosta.jpg",imageStyles:{objectPosition:"0% 0%",aspectRatio:16/6},topics:["Portfolio","Personal Website"],tools:["NextJs","ReactJs","React Markdown","Github Pages"],languages:["JavaScript","HTML","CSS","TypeScript"],platforms:[{component:l.ux,tooltip:"Web"}],children:(0,o.jsx)(a.A,{MarkdownFileContent:'# <a href="https://www.argosta.me">ARGOSTA.ME</a>\r\n\r\n<br />\r\nThis website that you\'re currently on \uD83D\uDE07. If you are interested in how I made this website from scratch by using NextJs (SSG mode), read my detailed <a target="_blank", href="/blog/nextjs-on-github-pages">blog post</a>.  \r\n\r\n',styles:{textAlign:"start",fontSize:"13pt"}})})]})})}},e=>{var t=t=>e(e.s=t);e.O(0,[611,111,617,504,636,593,792],()=>t(95233)),_N_E=e.O()}]);