
const spots = [null, null, null, null, null, null, null, null, null]; 


class Board { 
    constructor (spots) {
        this.spots = spots 
        this.currentMove = 'X'
    }


    updateMove() {
        if (this.currentMove === 'X') {
            this.currentMove = 'O'
        } else {
            this.currentMove = 'X'
        }
    }

   reset() {
    this.spots = this.spots.map(function(spot) {
      return null   
    })
   } 
    
   addMove(spot) {
       if (this.spots[spot-1] === null) {
         this.spots[spot-1] = this.currentMove
         this.updateMove()
      }
   }
}

const tiktaktoe = new Board ([null, null, null, null, null, null, null, null, null])


document.querySelector('button').addEventListener("click", () => {
    tiktaktoe.reset()
  
    document.getElementById('grid-item-1').innerText = tiktaktoe.spots[0]
    document.getElementById('grid-item-2').innerText = tiktaktoe.spots[1]
    document.getElementById('grid-item-3').innerText = tiktaktoe.spots[2]
    document.getElementById('grid-item-4').innerText = tiktaktoe.spots[3]
    document.getElementById('grid-item-5').innerText = tiktaktoe.spots[4]
    document.getElementById('grid-item-6').innerText = tiktaktoe.spots[5]
    document.getElementById('grid-item-7').innerText = tiktaktoe.spots[6]
    document.getElementById('grid-item-8').innerText = tiktaktoe.spots[7]
    document.getElementById('grid-item-9').innerText = tiktaktoe.spots[8]
})

document.getElementById('grid-item-1').addEventListener('click', () => {
    tiktaktoe.addMove(1)
    document.getElementById('grid-item-1').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-2').addEventListener('click', () => {
    tiktaktoe.addMove(2)
    document.getElementById('grid-item-2').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-3').addEventListener('click', () => {
    tiktaktoe.addMove(3)
    document.getElementById('grid-item-3').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-4').addEventListener('click', () => {
    tiktaktoe.addMove(4)
    document.getElementById('grid-item-4').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-5').addEventListener('click', () => {
    tiktaktoe.addMove(5)
    document.getElementById('grid-item-5').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-6').addEventListener('click', () => {
    tiktaktoe.addMove(6)
    document.getElementById('grid-item-6').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-7').addEventListener('click', () => {
    tiktaktoe.addMove(7)
    document.getElementById('grid-item-7').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-8').addEventListener('click', () => {
    tiktaktoe.addMove(8)
    document.getElementById('grid-item-8').innerText = tiktaktoe.currentMove
})
document.getElementById('grid-item-9').addEventListener('click', () => {
    tiktaktoe.addMove(9)
    document.getElementById('grid-item-9').innerText = tiktaktoe.currentMove
})























