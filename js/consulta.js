const fechData = async ()=>{
    try {
        const response = await axios({
            method: "get",
            url: "https://pokeapi.co/api/v2/pokemon"
        });
        console.log(response.data.results);
    } catch (error) {
        console.error(error);
    }
}

fechData();

const fechData = async ()=>{
    try {
        const response = await axios({
            method: "get",
            url: "https://pokeapi.co/api/v2/evolution-chain/10/"
        });

        //  let dato1 = response.data.chain.species.name;
        //  let dato2 = response.data.chain.evolves_to[0].species.name;
        //  let dato3 = response.data.chain.evolves_to[0].evolves_to[0].species.name;

        if(response.data.chain.species){
            console.log("Existe uno")
        }

        if(response.data.chain.evolves_to[0]){
            console.log("Existe dos")
        }

        if(response.data.chain.evolves_to[0].evolves_to[0]){
            console.log("Existe tres")
        }
    } catch (error) {
        console.error(error);
    }
}

fechData();