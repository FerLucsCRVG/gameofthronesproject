// MENU MOBILE

const menuToogle = document.querySelector(".menutoogle");
const showMenu = document.querySelector(".showmenu");
const linkmenumobile = document.querySelectorAll(".linkmenumobile");
const searchMobile = document.querySelector(".search-mobile");


menuToogle.addEventListener('click',()=>{
    showMenu.classList.toggle('active')
})

linkmenumobile.forEach((a) =>{
    a.addEventListener("click",()=>{
        showMenu.classList.toggle('active');
    })
})

searchMobile.addEventListener('click',()=>{
    showMenu.classList.toggle('active')
})


// SESSÃO FOTOS

const showFotos = document.querySelector(".showfotos");
const fecharFoto = document.querySelector(".fecharfoto");
const fotosImagens = document.querySelectorAll(".fotos-imagens");

console.log(fotosImagens)

fotosImagens.forEach((img) =>{
    img.addEventListener("click",()=>{
        showFotos.classList.toggle('activefoto');
    })
})

fecharFoto.addEventListener('click',()=>{
    showFotos.classList.toggle('activefoto')
})