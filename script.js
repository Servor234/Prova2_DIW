const URL="http://localhost:3000/participantes";
const URL2="http://localhost:3000/votos";

async function Get(){
    const pessoas = await fetch(URL);

    const el= await pessoas.json();
    
    mostrar(el);
}

async function Post(id){
    const agora = new Date();
    const dataHora = agora.toISOString();

    const novoVoto = {
        participanteId: Number(id),
        dataHora: dataHora
    };

    const server = await fetch(URL2, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(novoVoto)
    });

    if (server.ok) {
        alert("Voto confirmado");
    } else {
        alert("Erro ao computar o voto.");
    }
}

async function mostrar(vet){
    const text= document.getElementById("Mostrar");
    const text2= document.getElementById("Resto");

    text.innerHTML="";

    vet.forEach(participantes =>{
        if(participantes.naRoca==true){
        text.innerHTML+=`
            <section class="card hover-lift p-3" style="max-width:320px">
            <img src="${participantes.foto}" class="card-img-top" alt="foto do livro" style="height:250px; object-fit:contain;">

            <div class="card-body">
        
            <h1 class="card-title">${participantes.nome} <span class="badge text-bg-secondary">Na Roca</span></h1>

            <button class="btn btn-danger w-100" onclick="Post(${participantes.id})">Votar para eliminar</button>
                </div>
            </div>
        </section>
        `
        }else{
         text2.innerHTML+=`
            <section class="card hover-lift p-3" style="max-width:300px">
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