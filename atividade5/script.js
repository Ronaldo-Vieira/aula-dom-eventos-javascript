function minhaFuncao () {
    var valor = document.getElementById("pa").textContent
    var frase = String(valor).toUpperCase(valor)
    document.getElementById("pa").innerHTML = frase
}
function hover () {
    document.getElementsByTagName("h1")[0].style.color = "blue"
}