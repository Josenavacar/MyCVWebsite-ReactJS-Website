(this.webpackJsonpcvsite=this.webpackJsonpcvsite||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(8),a=c.n(n),r=c(3),l=(c(17),c(41)),o=c(42),j=c(0);function b(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"jnavacar."}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"jnavacar1998@gmail.com"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("a",{href:"https://drive.google.com/file/d/1etCyUF4W5M0xe7uRPbFu_CLJhJETtOyg/view?usp=sharing",target:"_blank",rel:"noreferrer",className:"cv",children:Object(j.jsx)("span",{children:"Resume"})})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}c(23);var d=c(10);function h(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(d.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Student","Engineer","Lover"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{className:"portrait",src:"assets/portrait.png",alt:""})})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi There, I'm"}),Object(j.jsx)("h1",{children:"Jose Navarrete Carbonell"}),Object(j.jsxs)("h3",{children:["Software ",Object(j.jsx)("span",{ref:e})]})]}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"assets/arrow_down.png",alt:""})})]})]})}c(24);function p(e){var t=e.title,c=e.active,i=e.setSelected,s=e.id;return Object(j.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return i(s)},children:t})}c(25);var m=[{id:1,title:"Ticket Website",img:"assets/reactspringbootlogo.png",link:"https://github.com/jnavacar/TicketVendingWebsite-ReactJS-SpringBoot"},{id:2,title:"Portfolio Website",img:"assets/reactlogo.png",link:"https://github.com/jnavacar/jnavacar-cvsite"},{id:3,title:"NightOfTheNerds",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/NightOfTheNerdsEscapeRoom-UnityProject"},{id:4,title:"Mobeye App",img:"assets/csharplogo.png",link:"https://github.com/jnavacar/MobeyeApplication-PhoneApp"}],O=[{id:1,title:"Ticket Website",img:"assets/reactspringbootlogo.png",link:"https://github.com/jnavacar/TicketVendingWebsite-ReactJS-SpringBoot"},{id:2,title:"Portfolio Website",img:"assets/reactlogo.png",link:"https://github.com/jnavacar/jnavacar-cvsite"}],u=[{id:1,title:"CyberJump",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/CyberJump-UnityProject"},{id:2,title:"Doffend",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/Doffend-UnityProject"},{id:3,title:"NightOfTheNerds",img:"assets/unitylogo.png",link:"https://github.com/jnavacar/NightOfTheNerdsEscapeRoom-UnityProject"}],g=[{id:1,title:"Complaint App",img:"assets/csharplogo.png",link:"https://github.com/jnavacar/ComplaintApp-WinFormApp"},{id:2,title:"Mobeye App",img:"assets/csharplogo.png",link:"https://github.com/jnavacar/MobeyeApplication-PhoneApp"}];function x(){var e=Object(i.useState)("featured"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),l=a[0],o=a[1];return Object(i.useEffect)((function(){switch(c){case"featured":o(m);break;case"web":o(O);break;case"game":o(u);break;case"C#":o(g);break;default:o(m)}}),[c]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Projects"}),Object(j.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"game",title:"Game Dev"},{id:"C#",title:"C#"}].map((function(e){return Object(j.jsx)(p,{title:e.title,active:c===e.id,setSelected:s,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:l.map((function(e){return Object(j.jsx)("div",{className:"item",children:Object(j.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{href:e.link,children:e.title})]})})}))})]})}var f=c(43);c(26);function v(){return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{class:"contact-info",children:[Object(j.jsxs)("div",{class:"card",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("p",{children:"jnavacar1998@gmail.com"})]}),Object(j.jsxs)("div",{class:"card",children:[Object(j.jsx)(f.a,{className:"icon"}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"https://github.com/jnavacar",style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noreferrer",children:"GitHub"})})]}),Object(j.jsxs)("div",{class:"card",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"https://drive.google.com/file/d/1etCyUF4W5M0xe7uRPbFu_CLJhJETtOyg/view?usp=sharing",style:{textDecoration:"none",color:"white"},target:"_blank",rel:"noreferrer",children:"View Resume"})})]})]})})]})}c(27);function N(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"Projects"})}),Object(j.jsx)("li",{onClick:function(){return c(!1)},children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})}c(28);var k=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{menuOpen:c,setMenuOpen:s}),Object(j.jsx)(N,{menuOpen:c,setMenuOpen:s}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{}),Object(j.jsx)(v,{})]})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.01fd131a.chunk.js.map