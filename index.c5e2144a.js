var t=document.querySelector(".wall"),e=document.querySelector(".spider"),i=e.clientWidth,n=e.clientHeight,c=t.clientWidth-i,l=t.clientHeight-n,a=(t.offsetWidth-t.clientWidth)/2;document.addEventListener("click",function(o){if(o.target.classList.contains("wall")){var d=t.getBoundingClientRect(),h=d.top,r=d.left,s=Math.max(0,Math.min(o.clientX-r-a-i/2,c)),m=Math.max(0,Math.min(o.clientY-h-a-n/2,l));e.style.top="".concat(m,"px"),e.style.left="".concat(s,"px")}});
//# sourceMappingURL=index.c5e2144a.js.map
