// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')
let cellsArray = document.getElementsByTagName('TD')
let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.style.height = '75px'
let counterText = document.getElementById('counter')
let counter = 0
let timer = document.getElementById('timer')
let counterTime = 10
let highCounter = []
let highScoreText = document.getElementById('highScore')
let highScore

function randomMole() {
  let randomIndex = Math.floor(Math.random() * cellsArray.length)
  let randomCell = cellsArray[randomIndex]
  //mole img appears in random cell
  randomCell.appendChild(mole)
  mole.onclick = whackedMole
}
randomMole()

//add the mole to a new random cell

function whackedMole() {
  randomMole()
  let audio = new Audio('./whack-audio.wav')
  audio.play()
  counter += 1
  counterText.innerHTML = 'you have whacked ' + counter + ' mole !'
}
//countdown 10 second
const startTimer = function () {
  setInterval(function () {
    counterTime--
    if (counterTime >= 0) {
      timer.innerHTML = counterTime
    }
  }, 1000)
}
startTimer()

// If there's no array of scores in localstorage, create empty array
if (localStorage.getItem('highCounter') == null) {
  localStorage.setItem('highCounter', JSON.stringify([0]))
}

//10 second reload page
const reloadPage = function () {
  setTimeout(function () {
    // findHighScore()
    alert('you have whacked ' + counter + ' mole !')
    let arrayToUpdate = JSON.parse(localStorage.getItem('highCounter'))
    arrayToUpdate.push(counter)
    localStorage.setItem('highCounter', JSON.stringify(arrayToUpdate))
    location.reload()
  }, 11000)
}
reloadPage()

//find the high score
function findHighScore() {
  let arrayOfScores = JSON.parse(localStorage.getItem('highCounter'))
  highScore = Math.max(...arrayOfScores)
  highScoreText.innerHTML = highScore
}
findHighScore()
