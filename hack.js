var lista = require("./palavras");

// Função que retorna uma palavra aleatória
async function importarPalavra(lista) {
  var palavras = await lista;
  return palavras;
}

importarPalavra(lista)
  .then(function (palavras) {
    console.log(palavras);
  })
  .catch(function (err) {
    console.log(err);
  });
