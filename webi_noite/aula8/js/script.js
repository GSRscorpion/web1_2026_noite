// Mapeamento dos componentes HTML
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

// Lista de números
var listaNumero = []

btnFinalizar.setAttribute("disabled", null)
btnFinalizar.style.cursor = "not-allowed"

// Pressionar Enter adiciona o número
numero.addEventListener("keypress", (elm)=>{
    if(elm.key == "Enter"){
        btnAdd.click()
    }
})

// Adicionar número
btnAdd.addEventListener("click", ()=>{
    if(numero.value == ""){
        alert("Insira um número!")
    } else if(testanumero() !== undefined){
        alert("Número " + numero.value + " já inserido!")
    } else {
        listaNumero.push(Number(numero.value))
        txtContar.innerHTML = "Restam " + (10 - listaNumero.length) + " Números" 
        
        const newOption = document.createElement("option")
        newOption.id = numero.value + "-id"
        newOption.text = numero.value
        inseridos.appendChild(newOption)

        // Remove opção inicial se houver
        const initialOpt = document.getElementById("opt1")
        if(initialOpt) initialOpt.remove()

        habilitarBotao()
        numero.value = ""
        numero.focus()
        console.log(listaNumero)
    }
})

// Finalizar: mostrar estatísticas
btnFinalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumero[0]
    ultimo.innerHTML = listaNumero.at(-1)
    soma.innerHTML = listaNumero.reduce((x, y) => x + y, 0)
    maior.innerHTML = Math.max(...listaNumero)
    menor.innerHTML = Math.min(...listaNumero)
})

// Reiniciar página
btnReiniciar.addEventListener("click", ()=>{
    window.location.reload()
})

// Habilitar botão finalizar
function habilitarBotao(){
    if(listaNumero.length == 10 ){
        btnFinalizar.removeAttribute("disabled")
        btnFinalizar.style.cursor = "pointer"
        numero.setAttribute("disabled", null)
        numero.style.cursor = "not-allowed"
        btnAdd.setAttribute("disabled", null)
        btnAdd.style.cursor = "not-allowed"
    }
}

// Apagar números selecionados
btnApaga.addEventListener("click", ()=>{
    let selecionados = []

    for(let ind = 0; ind < inseridos.options.length; ind++){
        if(inseridos.options[ind].selected){
            selecionados.push(inseridos.options[ind].value)
        }
    }

    selecionados.forEach((num)=>{
        listaNumero = listaNumero.filter((mento)=> mento != Number(num))
        const optToRemove = document.getElementById(num+"-id")
        if(optToRemove) optToRemove.remove()
    })

    txtContar.innerHTML = "Restam " + (10 - listaNumero.length) + " Números"

    if(listaNumero.length < 10){
        btnFinalizar.setAttribute("disabled", null)
        btnFinalizar.style.cursor = "not-allowed"
        numero.removeAttribute("disabled")
        numero.style.cursor = "pointer"
        btnAdd.removeAttribute("disabled")
        btnAdd.style.cursor = "pointer"
    }

    if(listaNumero.length == 0){
        const optnew = document.createElement("option")
        optnew.id = "opt1"
        optnew.text = "Insira um Número"
        inseridos.appendChild(optnew)
    }

    console.log(listaNumero)
})

// Testa se o número já foi inserido
function testanumero(){
    return listaNumero.find((num)=> numero.value == num)
}