var n=class{constructor(t){this.data=t,this.style="position: fixed; pointer-events: none; top: 0; left: 0;",this.body=document.querySelector("body"),this.count=this.data.count||1,this.targets=this.data.targets||!1,this.init(),this.move(),this.status()}init(){new Array(this.count).fill(0).forEach((t,e)=>{let r=document.createElement("div");this.create(r,e)})}create(t,e){t.setAttribute("data-cursor",`${e}`),t.setAttribute("style",this.style),this.body.append(t)}move(){let t=document.querySelectorAll("[data-cursor]");document.addEventListener("mousemove",e=>{let{clientX:r,clientY:s}=e;t.forEach(o=>this.position(o,r,s))})}position(t,e,r){t.style.transform=`translate3d(calc(${e}px - 50%), calc(${r}px - 50%), 0)`}status(){if(this.targets instanceof Array)for(let t of this.targets){let e=document.querySelectorAll(t);for(let r of e)r.addEventListener("mouseover",this.hover.bind(this,t)),r.addEventListener("mouseleave",this.hover.bind(this,t))}}hover(t){let e=t.replace(/[.#!]/g,"");this.body.classList.toggle(`cursor-hover--${e}`)}},i=n;function a(t){t.directive("cursor",(e,{modifiers:r})=>{let s=Number(r[0])??0,o=JSON.parse(e.getAttribute("x-cursor-targets"));new i({count:s,targets:o})})}var f=a;export{f as default};
