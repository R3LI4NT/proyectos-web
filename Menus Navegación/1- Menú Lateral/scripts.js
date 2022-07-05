const $abrirOcultar = document.getElementById("abrir-ocultar"),
      $menu = document.getElementById("menu");

$abrirOcultar.addEventListener("click",()=>{
    $menu.classList.toggle("desplegar")
})      