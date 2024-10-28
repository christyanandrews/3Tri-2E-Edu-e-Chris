function criaCartao(categoria,pergunta,resposta){
 let conteniner = document.getElementById('conteiner')
 let article = document.createElement('article')
 article.className = 'cartao'
 article.innerHTML = "teste foda"
 conteniner.appendChild(article)

}

criaCartao("Biologia","Qual a função da mitocondria?","Produzir ATP energy yeah")