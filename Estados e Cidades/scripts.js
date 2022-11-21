const nasc = document.getElementById ('nasc');

function validate(item){
    item.setCustomValidity('');     
    item.checkValidity()

    if (item == nasc){
        let hoje = new Date();      
        let dnasc = new Date(nasc.value);
        let idade = hoje.getFullYear() - dnasc.getFullYear();
        let m = hoje.getMonth() - dnasc.getMonth();
        
        if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
            idade--;
        }
        if(idade >= 0){
            if(idade < 18){
                item.setCustomValidity('Tem que ser maior de 18.');
            }else if(idade > 130){
                item.setCustomValidity('diga sua idade verdadeira.');
            }
        }else{
            item.setCustomValidity('Você ainda não nasceu.');
        }

    }

}


nasc.addEventListener   ('input', function(){validate(nasc) }); 

nasc.addEventListener('invalid', function(){
    if(nasc.value === ''){
        nasc.setCustomValidity('Insira sua data de nascimento.');
    }
});

const apiLinkIBGE = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const uf = document.getElementById("uf");

window.onload = function(){ //após baixar a página:
    fetch(apiLinkIBGE)      //baixa lista de estados
        .then(resp => resp.json())  //processa arquivo baixado como JSON
        .then(json => {             //manipula JSON
            json.forEach( function(estado){
                uf.innerHTML += "<option value="+ estado.id +">"+ estado.nome + "</option>";
            })
        })
}

uf.addEventListener("change", function(){
    fetch(apiLinkIBGE + "/" + uf.value + "/municipios")
        .then(resp => resp.json())
        .then(json =>{
            document.getElementById("cidade").innerHTML = "<option value='0'></option>";
            json.forEach( function(cidade){
                document.getElementById("cidade").innerHTML += 
                    "<option value="+cidade.id+">"+cidade.nome+"</option>";
            })
        })
})
