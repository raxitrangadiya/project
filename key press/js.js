window.addEventListener("keydown",(e) =>{
    document.getElementById("result").innerHTML =`the press is <span>"${e.key}"</span><br>key code : <span>${e.keyCode}</span> `

})