function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function percorre() {

    var i;
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
    conteudo_paragrafo = "Meu primeiro site.";

    for(i = 0; i < conteudo_paragrafo.length; i++){
        if(i < conteudo_titulo.length){
            await sleep(320);
            titulo.innerHTML += conteudo_titulo[i];
        }
        paragrafo.innerHTML += conteudo_paragrafo[i];
        await sleep(160);
    }

}

percorre();