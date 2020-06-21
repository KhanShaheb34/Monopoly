const Board = require("./board");
const Player = require("./player");
const Dice = require("./dice");

class Game {
  constructor(playerCount, ...names) {
    this.board = new Board("us");
    this.playerCount = playerCount;
    this.names = names;
    this.players = [];
    this.generatePlayers();
    this.activePlayerId = 0;
    this.activePlayer = this.players[this.activePlayerId];
  }

  generatePlayers() {
    this.names.map((name, id) => {
      this.players.push(new Player(id, name, 1500));
    });
  }

  diceRoll() {
    const dice1 = Dice.roll();
    const dice2 = Dice.roll();

    return [dice1, dice2];
  }

  movePlayer(dice1, dice2) {
    const moveCount = dice1 + dice2;
    this.activePlayer.move(moveCount, this.board.size);
    return this.activePlayer.position;
  }

  takeAction() {
    this.board.action(this.activePlayer);
  }

  diceHandover() {
    this.activePlayerId = (this.activePlayerId + 1) % this.playerCount;
    this.activePlayer = this.players[this.activePlayerId];
  }

  nextMove() {
    const [d1, d2] = this.diceRoll();
    this.movePlayer(d1, d2);
    this.takeAction();
    this.diceHandover();
  }

  summary(playerId) {
    if (playerId) {
      const player = this.players[playerId];
      console.log(player.id + ": " + player.name);
      console.log(
        `\tPosition: ${this.board.spaces[player.position].name}(${
          player.position
        })`
      );
      console.log(`\tMoney: ${player.money}`);
    } else {
      this.players.map((player) => {
        console.log(player.id + ": " + player.name);
        console.log(
          `\tPosition: ${this.board.spaces[player.position].name}(${
            player.position
          })`
        );
        console.log(`\tMoney: ${player.money}`);
      });
    }
  }
}

// const game = new Game(4, "Player1", "Player2", "Player3", "player4");
// game.nextMove();
// game.nextMove();
// game.summary();

module.exports = Game;
