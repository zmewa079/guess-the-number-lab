const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  getGuess: function() {
    let playerGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`) 
    let parseInput = parseInt(playerGuess)
    return parseInput
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let playerInput
    while(playerInput !== this.secretNum){
      playerInput = this.getGuess()
      this.prevGuesses.push(playerInput)  
      this.render(playerInput)
    }
  },
  }
  