//Mapeamento dos elementos de tela

const mosquito = document.querySelector("#mosquito")
const tempo = document.querySelector("#tempo")
const acertos = document.querySelector("#acertos")
const gameOver = document.querySelector("#game-over")
const martelo = document.querySelector("#martelo")
const esmaga = document.querySelector("#esmaga")
const btnInicio = document.querySelector("#btn-inicio")
const telaInicio = document.querySelector("aside")
const telaJogo = document.querySelector("main")
const root = document.documentElement

//variáveis de início

var qtdAcertos = 0, velocidade = 1000
var minutos = 2, segundos = 0
var min = 5, max = 95, temporizador,timer


timer = setInterval(()=>{
    segundos--
    if(segundos == -1)
    {
        minutos--
        segundos = 59
    }
    tempo.innerHTML = (segundos < 10) 
                ? minutos + ":0" + segundos 
                : minutos + ":" + segundos

    if( minutos == 0 && segundos == 0)
    {
        gameOver.style.display = "block"
        mosquito.style.pointerEvents = "none"
        clearInterval(temporizador)
        clearInterval(timer)
    }
},1000)

//evento de click sobre o mosquito

mosquito.addEventListener("click", ()=>{

    const tabuleiroRect = document.querySelector("#tabuleiro").getBoundingClientRect();
const mosquitoRect = mosquito.getBoundingClientRect();

// Calcula posição relativa ao tabuleiro
const x = mosquitoRect.left - tabuleiroRect.left + mosquitoRect.width / 2;
const y = mosquitoRect.top - tabuleiroRect.top + mosquitoRect.height / 2;

// Posiciona e mostra a explosão
esmaga.style.left = x + "px";
esmaga.style.top = y + "px";
esmaga.style.display = "block";

// Esconde a explosão depois de 200ms
setTimeout(() => {
    esmaga.style.display = "none";
}, 200);

    mosquito.style.pointerEvents = "none"
    setTimeout(()=>{
    mosquito.style.pointerEvents = "all"
    
    },1500)

    qtdAcertos++
    acertos.innerHTML = qtdAcertos

    velocidade -= 20
    clearInterval(temporizador)
    temporizador = setInterval(moveMosquito, velocidade)
    root.style.setProperty("--velocidade", velocidade/1000  + "s")
})
//evento de inicio do jogo

btnInicio.addEventListener("click", ()=>{
    telaInicio.style.display = "none"
    telaJogo.style.display = "block"
    //Temporizador para movimento do mosquito
    temporizador = setInterval(moveMosquito, velocidade)
})



function moveMosquito()
{
    let vertical = Math.floor(Math.random() * (max - min + 1)) + min
    let horizontal = Math.floor(Math.random() * (max - min + 1)) + min

    root.style.setProperty("--vertical", vertical + "%")
    root.style.setProperty("--horizontal", horizontal + "%")

    console.log("Y = " + vertical)
    console.log("X = " + horizontal)
    console.log("velocidade = " + velocidade)
}

//Martelo

document.addEventListener("mousemove", (e)=>{

    martelo.style.left = e.clientX + "px"
    martelo.style.top = e.clientY + "px"

})

document.addEventListener("mousedown", ()=>{

    martelo.style.transform = "translate(-50%, -50%) rotate(40deg)"

})

document.addEventListener("mouseup", ()=>{

    martelo.style.transform = "translate(-50%, -50%) rotate(0deg)"

})
document.addEventListener("mousedown", ()=>{
    martelo.style.transform = "translate(-50%, -50%) rotate(60deg) scale(0.9)"
})

document.addEventListener("mouseup", ()=>{
    martelo.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)"
})

// posição do mosquito

let rect = mosquito.getBoundingClientRect()

esmaga.style.left = rect.left + "px"
esmaga.style.top = rect.top + "px"

// mostra explosão
esmaga.style.display = "block"

// esconde depois
setTimeout(()=>{
    esmaga.style.display = "none"
},300)
