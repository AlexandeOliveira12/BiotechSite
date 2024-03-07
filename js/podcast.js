let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Volte aqui 😢";
})

window.addEventListener("focus", () =>{
    document.title = doctitle;
})