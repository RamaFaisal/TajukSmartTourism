import{j as t,Y as s}from"./app-Cq7dhWiT.js";import{N as a,F as x}from"./Navbar-DiHDyWoC.js";const l=({article:e})=>t.jsxs(t.Fragment,{children:[t.jsx(s,{title:e.title}),t.jsx(a,{}),t.jsx("img",{src:e.image,alt:e.title,className:"w-full h-[500px] object-cover"}),t.jsxs("div",{className:"container mx-auto px-5 md:px-20 mt-10",children:[t.jsx("h1",{className:"text-xl md:text-4xl font-bold mb-4",children:e.title}),t.jsxs("p",{className:"text-gray-600 mb-4",children:["By ",e.author||"Admin"," |"," ",new Date(e.created_at).toLocaleDateString()]}),t.jsx("div",{className:"text-lg pb-10",dangerouslySetInnerHTML:{__html:e.content}})]}),t.jsx(x,{})]});export{l as default};
