const APIKEY = new API('0787f391c706709e1913d3c3799730841115b2f8063b2a7675971ebea2100835');
const ui = new Interfaz()

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit',(e) => {
        e.preventDefault()

        // capturamos el select de moneda y criptomoneda 💰
        const moneda = document.getElementById('moneda')
        const monedaSeleccionada = moneda.options[moneda.selectedIndex].value

        const criptomoneda = document.getElementById('criptomoneda')
        const criptomonedaSeleccionada= criptomoneda.options[criptomoneda.selectedIndex].value


        // validacion de no tener opciones vacias :: 

        if ( monedaSeleccionada === '' || criptomonedaSeleccionada ==='' ){
            // lanzamos console.error();
            ui.mostrarMensaje('Todos los campos son obligatorios','alert- bg-danger text-center')


        }else{
            //consultamos la API
            APIKEY.obtenerValores(monedaSeleccionada,criptomonedaSeleccionada)
                .then(data =>{
                    console.log(data)
                    ui.mostrarResultado(data.resultadoConsulta.RAW,monedaSeleccionada,criptomonedaSeleccionada)
                      

                })
        }



        
})
