//Mapeamento dos elementos de tela

const mosquito = document.querySelector("#mosquito")
const tempo = document.querySelector("#tempo")
const acertos = document.querySelector("#acertos")
const root = document.documentElement

//variáveis de início

var qtdAcertos = 0, velocidade = 1000
var minutos = 2, segundos = 0
var min = 5, max = 95

//evento de click sobre o mosquito

mosquito.addEventListener("click", ()=>{
    qtdAcertos++
    acertos.innerHTML = qtdAcertos

    velocidade -= 10
    root.style.setProperty("--velocidade", (velocidade/1000)  + "s")
})

//Temporizador para movimento do mosquito

setInterval(() => {
    let vertical = Math.floor(Math.random() * (max - min + 1)) + min
    let horizontal = Math.floor(Math.random() * (max - min + 1)) + min

    root.style.setProperty("--vertical", vertical + "%")
    root.style.setProperty("--horizontal", horizontal + "%")

    console.log("Y = " + vertical)
    console.log("X = " + horizontal)
    console.log("velocidade = " + velocidade)


}, velocidade);