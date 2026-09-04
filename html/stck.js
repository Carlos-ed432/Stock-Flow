let mudarh1 = document.querySelector("h1")
mudarh1.addEventListener("mouseover",e=>{mudarh1.style.background="blue"})
mudarh1.addEventListener("mouseout",e=>{mudarh1.style.background="none"})
let botaomudar=document.querySelector("#botaao")
botaomudar.innerHTML="Press"
botaomudar.style.background="blue"
botaomudar.addEventListener("click",e=>{if (botaomudar.innerHTML==="Press")
    botaomudar.innerHTML=("🍄")
else{botaomudar.innerHTML="Press"}}

)