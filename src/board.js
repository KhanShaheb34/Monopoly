const us_board = require("./data/us_board.json");
const Space = require("./space");

class Board {
  constructor(type = "us") {
    this.type = type;
    this.board = us_board;
    this.spaces = [];
    this.generateBoard();
  }

  generateBoard() {
    this.board.spaces.map((space, position) =>
      this.spaces.push(new Space({ ...space, position }))
    );
  }
}

module.exports = Board;
