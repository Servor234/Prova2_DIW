const URL="http://localhost:3000/participantes";
const URL2="http://localhost:3000/votos";

async function Get(){
    const el=await fetch(URL);
    const el2=await fetch(URL2);

    const aux1=el.json();
    const aux2=el2.json();

    mostrar(aux1,aux2);
}

async function mostrar(el,el2){
    const text = document.getElementById("caixa");

    text.innetHTML="";

    if(!el2.ok){
        text.innerHTML+=`Vá para a votação
            <button class="btn btn-primary"><a></a
        `
    }

}

Get();