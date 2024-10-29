function criaCartao(categoria,pergunta,resposta){
 let conteniner = document.getElementById('conteiner')
 let article = document.createElement('article')
 article.className = 'cartao'
 article.innerHTML = `
  <div class="cartao-conteudo">
  <h3> ${categoria} </h3>
  <div class="cartao-pergunta1">
  <p> ${pergunta} </p>
  </div>
  <div class="cartao-resposta1">
  <p> ${resposta}</p>
  </div>
  </div>
 `
 conteniner.appendChild(article)

}

criaCartao("Biologia","Qual a função da mitocondria?","Produzir ATP energy yeah")
criaCartao("CIencias","Por que o Elon Musk foi nascido?","pois os XX e XY se conectaram")