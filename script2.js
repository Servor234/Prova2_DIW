const URL="http://localhost:3000/participantes";
const URL2="http://localhost:3000/votos";

async function Get(){
    const pessoas = await fetch(URL);

    const el= await pessoas.json();
    
    mostrar(el);
}


async function mostrar(vet){
    const text= document.getElementById("el");

    text.innerHTML="";

    vet.forEach(participantes =>{
        if(participantes.naRoca==true){
        text.innerHTML+=`
            <section class="card hover-lift p-3" style="max-width:320px">
            <img src="${participantes.foto}" class="card-img-top" alt="foto do livro" style="height:250px; object-fit:contain;">

            <div class="card-body">
        
            <h1 class="card-title">${participantes.nome}</h1>
                </div>
            </div>
        </section>
        `
        }
    })
}

Get();