function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function percorre() {

    var i, j, k;
    var conteudo_titulo;
    var conteudo_paragrafo;
    var main;
    var titulo;
    var paragrafo;

    main = document.querySelector('.principal');
    titulo = document.createElement('h1');
    titulo.classList.add('texto');
    main.appendChild(titulo);
    conteudo_titulo = "Olá, mundo!";

    paragrafo = document.createElement('p');
    paragrafo.classList.add('texto__p');
    main.appendChild(paragrafo);
    conteudo_paragrafo = "Meu primeiro site. ";

    k = -1;

    for(i = 0; i < conteudo_paragrafo.length; i++){
        j = parseInt(i / 2);
        if(j < conteudo_titulo.length && j != k){
            await sleep(320);
            k = j;
            titulo.innerHTML += conteudo_titulo[j];
        }
        paragrafo.innerHTML += conteudo_paragrafo[i];

    }

}

percorre();