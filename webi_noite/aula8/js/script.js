//Mapeamento dos componetes HTML

const numero = document.getElementById("numero")
const btnAdd = document.getElementById("btn-add")
const txtContar = document.getElementById("txt-contar")
const inseridos = document.getElementById("inseridos")
const opt1 = document.getElementById("opt1")
const btnApaga = document.getElementById("btn-apaga")
const primeiro = document.getElementById("primeiro")
const ultimo = document.getElementById("ultimo")
const soma = document.getElementById("soma")
const maior = document.getElementById("maior")
const menor = document.getElementById("menor")
const btnFinalizar = document.getElementById("btn-finalizar")
const btnReiniciar = document.getElementById("btn-reiniciar")

//lógica

var listaNumero = Array()

btnFinalizar.setAttribute("disable", null)
btnFinalizar.style.cursor = "not-allowed"


btnAdd.addEventListener("click", ()=>{
    if(numero.value == "")
        {
            alert("Insira um número!")
        }
        else
        {
            listaNumero.push( Number (numero.value) )
            txtContar.innerHTML = "Restam " + (10 - listaNumero.length) + " Números" 
            
            const newOption = document.createElement("option")
            newOption.id =numero.value + "-id"
            newOption.text =numero.value
            inseridos.appendChild(newOption)

            inseridos.size = listaNumero.length + 1

            habilitarBotao()
            
            console.log(listaNumero)
        }
})

btnFinalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumero[0]
    ultimo.innerHTML = listaNumero.at(-1)
    soma.innerHTML = listaNumero.reduce((x, y)=>x + y)
    maior.innerHTML = listaNumero.reduce((x,y)=>Math.max(x,y) )
    menor.innerHTML = listaNumero.reduce((x,y)=>Math.min(x,y) )
})

btnReiniciar.addEventListener("click", ()=>{
    window.location.reload()
})

function habilitarBotao()
{
    if(listaNumero.length == 10 )
    {
        btnFinalizar.removeAttribute("disable")
        btnFinalizar.style.cursor = "pointer"
        numero.setAttribute("disable", null)
        numero.style.cursor = "not-allowed"
        btnAdd.setAttribute("disable", null)
        btnAdd.style.cursor = "not-allowed"
    }
}