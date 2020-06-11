const us_board = require("./data/us_board.json");
const bn_board = require("./data/bn_board.json");
const Space = require("./space");

class Board {
  constructor(type = "us") {
    this.type = type;
    if (type === "us") this.board = us_board;
    if (type === "bn") this.board = bn_board;
    this.size = this.board.spaces.length;
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
