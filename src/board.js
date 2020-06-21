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

  handleGo() {
    console.log("go");
    player.money = player.money + 200;
  }
  handleProperty(player) {
    console.log("property");
    player.money = player.money - this.board.spaces[player.position].cost;
    this.board.spaces[player.position].owner = player;
    player.properties.push(player.position);
  }
  handleRailroad(player) {
    console.log("railroad");
  }
  handleutility(player) {
    console.log("utility");
  }
  handleChest(player) {
    console.log("community-chest");
  }
  handleChance(player) {
    console.log("chance");
  }
  handleTax(player) {
    console.log("tax");
  }
  handleJail(player) {
    console.log("jail");
  }
  handleFreeParking(player) {
    console.log("free-parking");
  }
  handleGoToJail(player) {
    console.log("go-to-jail");
  }

  action(player) {
    switch (this.board.spaces[player.position].type) {
      case "go":
        this.handleGo();
        break;
      case "property":
        this.handleProperty(player);
        break;
      case "railroad":
        this.handleRailroad(player);
        break;
      case "utility":
        this.handleutility(player);
        break;
      case "community-chest":
        this.handleChest();
        break;
      case "chance":
        this.handleChance();
        break;
      case "tax":
        this.handleTax();
        break;
      case "jail":
        this.handleJail();
        break;
      case "free-parking":
        this.handleFreeParking();
        break;
      case "go-to-jail":
        this.handleGoToJail();
        break;
    }
  }
}

module.exports = Board;
