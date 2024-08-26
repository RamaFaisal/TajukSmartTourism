import{r as l,j as e,Y as m,a as h}from"./app-CzM_TWQz.js";import{N as f,F as p}from"./Navbar-BdejFG8Y.js";import{C as g}from"./Carousel-Bsjq7foy.js";function N(i){const[n,d]=l.useState([]);l.useEffect(()=>{(async()=>{try{const r=(await(await fetch("http://127.0.0.1:8000/api/articles")).json()).data.sort((x,o)=>new Date(o.created_at)-new Date(x.created_at));d(r)}catch(s){console.error("Failed to fetch articles:",s)}})()},[]);const c=(t,s=200)=>{let a=t.substring(0,s),r=a.lastIndexOf(" ");return r>0&&(a=a.substring(0,r)),a+"..."};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:i.title}),e.jsx(f,{}),e.jsxs("div",{className:"relative w-full h-[300px] sm:h-[300px] md:h-[500px] overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:e.jsxs("div",{className:"text-center text-white font-serif",children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-4",children:"Berita Desa Wisata Tajuk"}),e.jsx("p",{className:"text-lg md:text-xl lg:text-2xl",children:"Nikmati keindahan alam dan budaya lokal yang mempesona"})]})}),e.jsx(g,{})]}),e.jsxs("div",{className:"relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]",children:[e.jsx("div",{className:"w-full max-w-[1127px] text-center px-4 md:px-8",children:e.jsx("p",{className:"text-black font-sans text-xl md:text-4xl pt-10 lg:pt-32",children:"Selamat datang di menu berita kami. Di sini, Anda dapat menemukan berbagai berita terbaru mengenai desa Tajuk."})}),e.jsx("div",{className:"container mx-auto p-4",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4",children:n.map(t=>e.jsxs("div",{className:"bg-white shadow-md rounded-lg overflow-hidden",children:[e.jsx("a",{href:`/Informasi/Berita/${t.id}`,children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-48 object-cover"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("a",{href:`/Informasi/Berita/${t.id}`,children:e.jsx("h2",{className:"text-xl font-bold mb-2",children:t.title})}),e.jsx("p",{className:"text-gray-600 mb-2",children:new Date(t.created_at).toLocaleDateString()}),e.jsx("div",{className:"text-gray-600 mb-4 text-2xl",dangerouslySetInnerHTML:{__html:c(t.content)}}),e.jsx(h,{href:`/Informasi/Berita/${t.id}`,className:"text-blue-500 hover:underline",children:"Read more"})]})]},t.id))})}),e.jsx(p,{})]})]})}export{N as default};
