//Estado: usar api para colocar os estados do Brasil como opção no select
//google >> "ibge serviços api" >> localidades >> UFs >> GET: (https://servicodados.ibge.gov.br/api/v1/localidades/estados).
//fetch(buscar)(caminho)then(entao)(executa uma função)(function)(res.json)(resposta){console.log(me mostra)(resposta)}


function populateUFs(){
    //Variavel que referencia o select uf
    const ufSelect = document.querySelector("select[name=uf]")

    const urlUF = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`

    fetch(urlUF)
    .then( res => res.json() ) //funçao anonima que esta retornando um valor
    .then ( states => {
        for (const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}
populateUFs()



//Cidades:
function getCities(event){
    const citySelect = document.querySelector("select[name=city]")

    const ufValue = event.target.value
    
    const urlCity = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(urlCity)
    .then(res => res.json())
    .then(cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}






//Procurar pelo select para trabalhar os dados.
document
    .querySelectorAll("select[name=uf]") 
    .addEventListener('change', getCities)
    //ouvidor de envento
    //() => {} == Criar uma função anonima 