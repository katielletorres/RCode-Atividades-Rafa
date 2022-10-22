const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;


const trafficLigth = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
   
}

const nestIndex = () => {
   if ( colorIndex < 2) {
       colorIndex++
   }else {
       colorIndex = 0;
}

}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const changecolor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nestIndex();
}

const turnOn = {

    'red':     () => img.src = './IMG/vermelho.ligado.jpg',
    'yellow':  () => img.src = './IMG/amarelo.ligado.jpg',
    'green':   () => img.src = './IMG/verde.ligado.jpg',
    'automatic': () => intervalId = setInterval( changecolor, 1000)
}



buttons.addEventListener('click', trafficLigth );