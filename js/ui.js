//  User Interfaz

class Interfaz {
  constructor() {
    this.init();
  }

  init() {
    this.coinsSelect();
  }

  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");
    div.className = tipo;
    div.appendChild(document.createTextNode(mensaje));

    const divMensaje = document.querySelector(".mensajes");

    divMensaje.appendChild(div);

    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 1500);

    
  }

  coinsSelect() {
    APIKEY.obetenerAllCoins().then((coins) => {
        

        /* recorrer con un for of el objeto  */
            const selectCriptoMoneda = document.querySelector('#criptomoneda')
            let dataCoins = Object.entries(coins.coins.Data) 
            for (const [key,value] of dataCoins){
              
                /* agregamos nombres y symbols a las opciones */    
                
                const opcionCoins = document.createElement('option')
                    opcionCoins.value = value.Symbol
                    opcionCoins.appendChild(document.createTextNode(value.CoinName))

                    selectCriptoMoneda.appendChild(opcionCoins)

            }

      
    });
  }


mostrarResultado(resultado,moneda,criptomoneda){

      const resultadoAnterior = document.querySelector('#resultado > div')

          // se fija si tenemos una consulta para no agrupar spin y resultado.
              if(resultadoAnterior){
                resultadoAnterior.remove()
              }



            console.log(resultado[criptomoneda][moneda] )

            // template resultado

        const datosMoneda=resultado[criptomoneda][moneda]
        let precio = datosMoneda.PRICE.toFixed(2)
        let variacion = datosMoneda.CHANGEPCTDAY.toFixed(2)
        let actualizacion = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR')
        let html = `
            <div class="card bg-warning"
              <div class="card-body text-ligth ">
                  <h2 class="card-title"> Resultado Consultado:</h2>
                  <p>El precio de: ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de:$ ${precio}</p>
                  <p>Variación ultimo dia ${variacion} %</p>
                  <p>Actualización: ${actualizacion}</p>

              </div>
            </div>
        `
      this.displaySpin('block')  

      setTimeout(()=>{

        this.displaySpin('none') 
        document.querySelector('#resultado').innerHTML = html 
        

      },3000)

     
}


  displaySpin(valor){
      const spin = document.querySelector('.contenido-spinner')
      spin.style.display = valor
  }
 





}
