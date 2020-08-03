class API {
    constructor(apikey){
        this.apikey = apikey
    }

    // metodos

    // 1--Todas las monedas 💰

    async obetenerAllCoins(){
        
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`

        const urlObtenerCoins = await fetch(url)

        const coins = await urlObtenerCoins.json()
            
        return {
            coins
        }

    }

async obtenerValores(moneda,criptomoneda){
    const url =` https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`

    //consulta la api 

        const urlConvert = await fetch(url)
        const resultadoConsulta = await urlConvert.json()

        return{
                resultadoConsulta
        }
}

}