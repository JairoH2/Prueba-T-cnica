//Variables
const listaPokemons = document.querySelector('#listaPokemons');
const url = 'https://pokeapi.co/api/v2/pokemon';
let habilidades;
let templateHabilidades;

//API
const datosPokemones = async (url)=>{
    try {
        const response = await axios({
            method: "get",
            url: url
        });
        cargarPokemones(response.data.results);
    } catch (error) {
        console.error(error);
    }
}
datosPokemones(url);

const cargarPokemones = async (datos)=>{
 
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
    } catch (error) {
        console.error(error);
    }
}



//EventListener
cargarEventListeners();
function cargarEventListeners(){
    
}

//Funciones