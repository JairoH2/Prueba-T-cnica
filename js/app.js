//Variables 
var spinner = document.querySelector('.spinner');
var contenidoPokedex = document.querySelector('#main');
var botones = document.querySelector('#botones')
var btn__previo; 
var btn__siguiente; 
const url = 'https://pokeapi.co/api/v2/pokemon';

let pokemones = {
    nombre: [],
    descripcion: [],
    id: [],
    habilidades: [],
    ataques: [],
    url: ''
}

//API
const datosPokemones = async (url)=>{
    spinner.setAttribute("style", "display: block;")
    contenidoPokedex.setAttribute("style", "display: none;")
    try {
        const response = await axios({
            method: "get",
            url: url                
        });
        cargarPokemones(response.data.results);

        btn__previo = response.data.previous ? `<img src="img/before.svg" alt="" class="btn-poke" data-url=${response.data.previous}>` : '';
        btn__siguiente = response.data.next ? `<img src="img/after.svg" alt="" class="btn-poke" data-url=${ response.data.next}>`: '';

        botones.innerHTML = btn__previo + btn__siguiente;

    } catch (error) {
        console.error(error);
    }
}
datosPokemones(url);

const cargarPokemones = async (datos)=>{
    listaPokemons.innerHTML='';
    try {
        for(let index of datos){

            const respuesta = await axios({
                method: "get",
                url: index.url
            });
            
            
            const div = document.createElement('DIV');
            div.classList.add('pokemon');
            div.innerHTML=`
                <div class="pokemon__header">
                <img src=${respuesta.data.sprites.other.dream_world.front_default} alt="" class="pokemon__img">
                </div>
                <div class="pokemon__info">
                <h3 class="pokemon__nombre">${respuesta.data.name}</h3>
                <p>#${respuesta.data.id}</p>
                </div>
            `
            //Agregar a lista de pokemons
            listaPokemons.appendChild(div);
        }
  
            spinner.setAttribute("style", "display: none;")
            contenidoPokedex.setAttribute("style", "display: block;")
      
        
    } catch (error) {
        console.error(error);
    }
}

//EventListeners
botones.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-poke')){
        let valor = e.target.dataset.url;
        console.log(valor)
        datosPokemones(valor);
    }
})



//Funciones





