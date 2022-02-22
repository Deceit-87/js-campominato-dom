const GRID_EL = document.getElementById('grid');
const PLAY_BUTTON = document.getElementById('play-btn');
const SELECT = document.getElementById('difficult-level');

// let rows;
// let cols; 
// let cellSize;  


                       // GENERAZIONE BOMBE




PLAY_BUTTON.addEventListener('click',() =>{
let rows, cols, cellSize,bombs;

const DIFFICULT = SELECT.value;
switch ( DIFFICULT ) {

    // case 'Easy':
    //     // rows = 10 ;
    //     // cols = 10 ;
    //     rows = cols = 10;
    // break;


    case 'Medium':
        // rows = 9 ;
        // cols = 9 ;
        rows = cols = 9;
    break;

    case 'Hard':
        // rows = 7 ;
        // cols = 7 ;
        rows = cols = 7;
    break;
    default:
        rows = 10 ;
        cols = 10 ;
}
 
    
const CELL_NUMBERS = rows * cols;

cellSize = `calc(100% / ${cols})`;

bombs = generaBombe(16,1,CELL_NUMBERS)

GRID_EL.innerHTML = '';
const callBack =function (){
    console.log('mi hai clickato!');
    const element =this;
    if (isBomb(this.innerHTML , bombs)){
        element.classList.add('bomb')
    }
    else{
        element.classList.add('selected');
    }

    this.classList.add('selected');
    element.removeEventListener('click',callBack);

   
}


            //   GENERAZIONE GRIGLIA


    for (let i = 0; i < CELL_NUMBERS; i++) {
        
        const CELL = document.createElement('div');
        CELL.style.width = cellSize;
        CELL.append(i + 1);
        CELL.classList.add('cell');
        
        GRID_EL.appendChild(CELL);
       
    
        console.log(CELL)
        CELL.addEventListener('click',callBack)
    }
    

})

function generaBombe(numBombs,min,max){

const ARRAY_BOMBS = []
 do{
    const num =getRandomIntInclusive(min,max)
    if(ARRAY_BOMBS.includes( num )  === false){

    ARRAY_BOMBS.push(num);
    }
 }
 while (ARRAY_BOMBS.length < numBombs)
console.log(ARRAY_BOMBS)
return ARRAY_BOMBS;

};

function isBomb( num , bombs ){
    if (bombs.includes( parseInt( num ) ) ){
        return true
    }
    else {
        return false
    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);  
  }



// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà
//  prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
// la cella si colora di rosso e la partita termina ( game over ),
// altrimenti la cella cliccata si colora di azzurro e 
// l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o 
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.



    


                           




 





