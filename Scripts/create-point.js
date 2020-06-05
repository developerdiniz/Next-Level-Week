//Estado: usar api para colocar os estados do Brasil como opção no select
//google >> "ibge serviços api" >> localidades >> UFs >> GET: (https://servicodados.ibge.gov.br/api/v1/localidades/estados).
//fetch(buscar)(caminho)then(entao)(executa uma função)(function)(res.json)(resposta){console.log(me mostra)(resposta)}
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res.json()) { console.log(res)} )