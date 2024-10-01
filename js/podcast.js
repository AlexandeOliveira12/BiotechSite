let doctitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Volta por favor 😢";
})

window.addEventListener("focus", () =>{
    document.title = doctitle;
})