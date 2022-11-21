function scroll(html){
    console.log(html);
    fetch(html).then(resp => resp.text()).then(html =>{
        document.getElementById("wrapper").innerHTML += html; //requer adaptação do HTML
    })
}

let i = 0 //índice da página baixada
const pag = [ "proj.html","cred.html"];

/** Atualização via scroll: */
window.onscroll = function(){ //https://stackoverflow.com/a/46718465
    let altura = document.body.scrollHeight; 
    let scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= altura && i < 2){
		scroll( pag[i] );
        i++;
    }
}
