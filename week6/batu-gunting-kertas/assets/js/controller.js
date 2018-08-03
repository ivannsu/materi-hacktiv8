function toggleDisplay() {
  let result = document.getElementById('result');
  let select = document.getElementById('select');

  if(result.display !== 'none')
}
function startGame() {
  let choices = document.getElementById('choices').children;
  let result = document.getElementById('result');
  let userImg = document.getElementById('userImg');
  let comImg = document.getElementById('comImg');

  for(let i = 0; i < choices.length; i++) {
    choices[i].onclick = function() {
      game.setUserChoice(i);
      game.setComChoice();
    }
  }
  game.processPattern();
  game.getWinnerChoice();
  game.getWinnerName();

  result.style.display = 'block';

  if(game.winnerName === 'Kamu') {
    result.firstElementChild.innerHTML = 'MENANG!';
  } else {
    result.firstElementChild.innerHTML = 'KALAH!';
  }
}

let pattern = [
  {rock: 0, paper: 1, scissors: 1, result: 'scissors'},
  {rock: 1, paper: 1, scissors: 0, result: 'paper'},
  {rock: 1, paper: 0, scissors: 1, result: 'rock'},
];
let patternKey = ['rock', 'paper', 'scissors'];
let game = new RockPaperScissors(pattern, patternKey);

startGame();

// game.setUserChoice(1);
// game.setComChoice();
// game.processPattern();
// game.getWinnerChoice();
// game.getWinnerName();