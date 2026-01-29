/*
let container=document.querySelector('.container');
let login=document.querySelector('.signn');
let loggin=document.querySelector('.loggg');

login.onclick=()=>{
    container.classList.add("active");
}
loggin.onclick=()=>{
    container.classList.add("active");
} */


const menuBtn = document.querySelector(".sam"); // menu button
const mainSection = document.getElementById("sambhav"); // target section

if (menuBtn && mainSection) {
  menuBtn.addEventListener("click", () => {
    mainSection.scrollIntoView({ behavior: "smooth" });
  });
}

const contBtn = document.querySelector(".cont");
const contact = document.getElementById("show"); 

if (contBtn && contact) {
  contBtn.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth" });
  });
}

/*let sam=document.getElementsByClassName("sam");
let main=document.querySelector("main");

sam.addEventListener("click",()=>{
    main.classList.toggle("sambhav");
}) */

    const solid=document.querySelector(".solid");
    const carttabb=document.getElementById("carttab");
     const close=document.getElementById("close");

     solid.addEventListener('click',()=>{
      carttabb.classList.add('active');
     });

      close.addEventListener("click",()=>{
      carttabb.classList.remove("active");
     });
 /*   if (solid && carttabb) {
  solid.addEventListener("click", () => {
  carttabb.scrollIntoView({ behavior: "smooth" });
  });
} */


  /*  iconcart.addEventListener("click",()=>{
      body.classList.toggle("showcart");
    }) */