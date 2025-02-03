import{r as i,j as e,Y as u,a as p}from"./app-q1rN7cKa.js";import{N as f,F as j}from"./Navbar-PB4m5zeo.js";import{C as b}from"./Carousel-NtyH_sb9.js";import{D as w}from"./Dusun-DhOyC964.js";import{V as v}from"./VideoCarousel-DMATzXm0.js";import{D as N}from"./Destinasi-C0CZEBcZ.js";function k(){const[t,m]=i.useState([]),[d,r]=i.useState(null);i.useEffect(()=>{(async()=>{try{const n=await(await fetch("/api/articles")).json();if(m(n.data),n.data.length>0){const g=Math.floor(Math.random()*n.data.length);r(g)}}catch(x){console.error("Failed to fetch articles:",x)}})()},[]);const o=()=>{t.length!==0&&r(s=>(s+1)%t.length)},h=()=>{t.length!==0&&r(s=>(s-1+t.length)%t.length)};if(t.length===0||d===null)return e.jsx("div",{className:"text-center",children:"Memuat Berita..."});const a=t[d];let l=a.content.substring(0,200),c=l.lastIndexOf(" ");return c>0&&(l=l.substring(0,c)),l+="...",e.jsx("div",{className:"w-full h-full bg-transparent flex items-center justify-center p-4 lg:p-0 py-8",children:e.jsxs("div",{className:"relative bg-white p-6 border border-gray-300 rounded-md shadow-md max-w-6xl w-full lg:w-[1090px] lg:h-[335px]",children:[e.jsxs("div",{className:"absolute top-4 right-4 md:top-7 md:right-7 flex space-x-2",children:[e.jsx("button",{onClick:h,className:"z-5 w-8 h-8 bg-green-600 hover:bg-green-800 shadow-4xl text-white rounded-full flex items-center justify-center",children:"←"}),e.jsx("button",{onClick:o,className:"z-1 w-8 h-8 bg-green-600 hover:bg-green-800 shadow-4xl text-white rounded-full flex items-center justify-center",children:"→"})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row",children:[e.jsx("div",{className:"lg:w-1/2 lg:pr-4 mb-4 lg:mb-0",children:e.jsx("div",{className:"bg-transparent rounded-lg overflow-hidden",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"text-lg md:text-xl text-black font-bold mb-2",children:a.title}),e.jsx("p",{className:"text-gray-200 mb-2",children:new Date(a.created_at).toLocaleDateString()}),e.jsx("div",{className:"text-black mb-4 text-md md:text-lg",dangerouslySetInnerHTML:{__html:l}}),e.jsx("a",{href:`/Informasi/Berita/${a.id}`,className:"text-blue-500 hover:underline",children:"Read more"})]})})}),e.jsx("div",{className:"lg:w-1/2",children:e.jsx("img",{className:"w-full md:max-h-72 rounded-md object-cover",src:a.image,alt:"Article"})})]})]})})}function T(t){return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:t.title}),e.jsx(f,{}),e.jsxs("div",{className:"relative w-full h-[490px] sm:h-[500px] md:h-[600px] lg:h-[710px] overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:e.jsxs("div",{className:"text-center text-white",children:[e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-6xl font-bold mb-4",children:"Selamat Datang di Desa Wisata Tajuk"}),e.jsx("p",{className:"text-md md:text-lg lg:text-2xl text-center",children:"Nikmati keindahan alam dan budaya lokal yang mempesona"})]})}),e.jsx(b,{})]}),e.jsxs("div",{className:"relative w-full bg-white text-xs lg:text-base flex flex-col justify-start items-center gap-16 sm:gap-24 md:gap-24 lg:gap-28 object-cover rounded-t-[20px] lg:rounded-t-[50px]",children:[e.jsxs("div",{className:"relative flex flex-col items-center md:items-start md:flex-row pt-10 md:pt-32 md:px-32 z-10 text-black",children:[e.jsxs("div",{className:"text-3xl lg:text-4xl font-bold text-center md:text-right mb-8 md:mb-0",children:[e.jsx("div",{children:"DIMENSI BARU"}),e.jsx("div",{children:"WISATA TAJUK"})]}),e.jsx("div",{className:"md:ml-8 text-lg md:text-xl lg:text-3xl font-sans md:border-l-4 md:border-black px-12 text-center md:text-left md:px-8",children:e.jsx("p",{children:"Desa Wisata Tajuk adalah surga tersembunyi yang menawarkan keindahan alam, kekayaan budaya, dan keramahan penduduk lokal. Terletak di jantung Jawa Tengah, desa kami adalah destinasi yang sempurna untuk Anda yang mencari ketenangan, petualangan, dan pengalaman autentik yang tak terlupakan."})})]}),e.jsx("div",{className:"w-full h-full",children:e.jsx(w,{})}),e.jsx("div",{className:"w-[375px] lg:w-[1100px] border border-zinc-400"}),e.jsx("div",{className:"w-full md:w-[900px] lg:w-[1000px] h-full px-3 lg:px-0 overflow-hidden",children:e.jsx(N,{})}),e.jsx("div",{className:"w-[375px] lg:w-[1127px] border border-zinc-400"}),e.jsx("div",{className:"w-full md:w-[800px] lg:w-[1400px] rounded-lg z-10 relative px-5",children:e.jsx(v,{})}),e.jsxs("div",{className:"w-[330px] lg:w-[1100px] h-auto lg:h-44 relative overflow-hidden rounded-lg",children:[e.jsx("img",{className:"w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transform transition-transform duration-500 hover:scale-110",src:"https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000",alt:"Beautiful Landscape"}),e.jsxs("div",{className:"absolute top-0 left-0 w-full h-auto lg:h-44 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4",children:[e.jsx("span",{className:"text-white text-center text-xs lg:text-2xl mb-4",children:"Langit yang biru, gunung yang megah, dan dusun kaya budaya menanti Anda untuk dijelajahi"}),e.jsx(p,{href:"/Paket",className:"btn bg-white text-black text-xs py-1 px-2 sm:text-sm sm:py-2 sm:px-4 rounded hover:scale-105 transition duration-200 font-sans",children:"Lihat Paket"})]})]}),e.jsx("div",{className:"w-[375px] lg:w-[1100px] border border-zinc-400"}),e.jsx("div",{className:"w-[370px] lg:w-[1100px] h-full items-center",children:e.jsx(k,{})}),e.jsx(j,{})]})]})}export{T as default};
