const Board = require("./board");
const Player = require("./player");
const Dice = require("./dice");

class Game {
  constructor(playerCount, ...names) {
    this.board = new Board();
    this.playerCount = playerCount;
    this.names = names;
    this.players = [];
    this.generatePlayers();
    this.activePlayerId = 0;
  }

  generatePlayers() {
    this.names.map((name, id) => {
      this.players.push(new Player(id, name));
    });
  }

  nextMove() {
    const dice1 = Dice.roll();
    const dice2 = Dice.roll();
    const move = dice1 + dice2;

    this.players[this.activePlayerId].move(move, this.board.size);
    this.activePlayerId = (this.activePlayerId + 1) % this.playerCount;
  }
}

const game = new Game(4, "Player1", "Player2", "Player3", "player4");

game.nextMove();
game.nextMove();
game.nextMove();
game.nextMove();

game.players.map((player) => {
  console.log(
    `${player.name} is on ${game.board.spaces[player.position].name}`
  );
});
