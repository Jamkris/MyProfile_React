"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[964],{229:(e,s,l)=>{l.d(s,{Z:()=>r});var i=l(791),n=l(184);const r=()=>{const[e,s]=(0,i.useState)(""),[l,r]=(0,i.useState)(""),[a,t]=(0,i.useState)("");return(0,n.jsx)("footer",{id:"footer",children:(0,n.jsxs)("div",{class:"inner",children:[(0,n.jsxs)("section",{id:"Send_section",children:[(0,n.jsx)("h2",{id:"Sendh2",children:"Send Email"}),(0,n.jsxs)("form",{method:"post",action:"https://script.google.com/macros/s/AKfycbzUpu78sMltlNFuBHw-KXdpN5dP6A11vNXlitCfVrfTVPo-Kz98wPZ2WuNc-E8BZoPa/exec",target:"iframe1",onSubmit:()=>{console.log("aslkfjalsjfl"),alert("Sent Complete"),s(""),r(""),t("")},children:[(0,n.jsxs)("div",{class:"fields",children:[(0,n.jsx)("div",{class:"field half",children:(0,n.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Name",onChange:l=>{s(l.target.value),console.log(e)},value:e})}),(0,n.jsx)("div",{class:"field half",children:(0,n.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email",onChange:e=>{r(e.target.value)},value:l})}),(0,n.jsx)("div",{class:"field",children:(0,n.jsx)("textarea",{name:"message",id:"message",placeholder:"Message",onChange:e=>{t(e.target.value)},value:a})})]}),(0,n.jsx)("ul",{class:"actions",children:(0,n.jsx)("li",{children:(0,n.jsx)("button",{type:"submit",value:"Send",class:"primary",children:"Send"})})})]})]}),(0,n.jsx)("script",{"data-cfasync":"false",src:"form-submission-handler.js"}),(0,n.jsx)("iframe",{id:"iframe1",name:"iframe1",title:"none"})]})})}},716:(e,s,l)=>{l.d(s,{Z:()=>a});var i=l(791),n=l(184);const r=e=>{let{closeMenubar:s}=e;return(0,n.jsxs)("div",{className:"Menubar_Container ".concat(s?"fadeIn":"fadeOut"),children:[(0,n.jsx)("a",{href:"#menu",children:(0,n.jsx)("img",{src:"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E",width:50,height:50,className:"CloseButton",onClick:()=>{s(!1)}})}),(0,n.jsxs)("div",{className:"Menubar_Main",children:[(0,n.jsx)("h2",{id:"Menuh2",children:"Menu"}),(0,n.jsxs)("ul",{className:"Menu_Lists",children:[(0,n.jsx)("li",{style:{borderBottom:"1px solid #717171"},children:(0,n.jsx)("a",{href:"/",children:"Home"})}),(0,n.jsx)("li",{style:{borderBottom:"1px solid #717171"},children:(0,n.jsx)("a",{href:"/profile",children:"Profile"})}),(0,n.jsx)("li",{style:{borderBottom:"1px solid #717171"},children:(0,n.jsx)("a",{href:"/project",children:"Project"})})]})]})]})},a=e=>{let{TITLE:s,DESC:l,LINK:a}=e;const[t,c]=(0,i.useState)(!1);return(0,n.jsxs)("header",{id:"header",className:"Heder_Container",children:[(0,n.jsxs)("div",{class:"inner",children:[(0,n.jsxs)("a",{href:a,class:"logo",children:[(0,n.jsx)("span",{class:"symbol",children:(0,n.jsx)("img",{src:"images/\uc544\uc774\ucf58.jpg",alt:""})}),(0,n.jsx)("span",{class:"title",children:s})]}),(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#menu",onClick:()=>{c(!t)}})})})})]}),t?(0,n.jsx)("div",{className:"MenubarBackground",children:(0,n.jsx)(r,{closeMenubar:e=>{c(e)}})}):null]})}},680:(e,s,l)=>{l.d(s,{Z:()=>n});l(791);var i=l(184);const n=e=>{let{IMG:s,LINK:l,TITLE:n,DESC:r}=e;return(0,i.jsxs)("article",{class:"style1",children:[(0,i.jsx)("span",{class:"image",children:(0,i.jsx)("img",{src:s,id:"Main_img"})}),(0,i.jsxs)("a",{href:l,children:[(0,i.jsx)("h2",{children:n}),(0,i.jsx)("div",{class:"content",children:(0,i.jsx)("p",{children:r})})]})]})}},137:(e,s,l)=>{l.d(s,{Z:()=>n});l(791);var i=l(184);const n=e=>{let{TITLE:s,DESC:l}=e;return(0,i.jsx)("header",{children:(0,i.jsxs)("h1",{id:"This_is_my_page",children:[s,(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"#",class:"None_border",children:l})]})})}},964:(e,s,l)=>{l.r(s),l.d(s,{default:()=>c});l(791);var i=l(680),n=l(716),r=l(137),a=l(229),t=l(184);const c=()=>(0,t.jsxs)("div",{id:"wrapper",children:[(0,t.jsx)(n.Z,{TITLE:"Learn",DESC:"About What I've Learned",LINK:"/learn"}),(0,t.jsx)("div",{id:"main",children:(0,t.jsxs)("div",{class:"inner",children:[(0,t.jsx)(r.Z,{TITLE:"About What I've Learned"}),(0,t.jsx)("section",{class:"tiles",children:(0,t.jsx)(i.Z,{IMG:"../images/BSSM (5).jpg",LINK:"Preparing.html",TITLE:"Preparing",DESC:"Preparing"})})]})}),(0,t.jsx)(a.Z,{})]})}}]);
//# sourceMappingURL=964.009f7ddc.chunk.js.map