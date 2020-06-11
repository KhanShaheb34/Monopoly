class Player {
  constructor(id, name) {
    const colors = ["red", "green", "blue", "yellow", "orange", "pink"];

    this.id = id;
    this.name = name;
    this.color = colors[id];
    this.money = 0;
    this.properties = [];
    this.position = 0;
  }

  move(count, boardSize) {
    this.position = this.position + count;
  }
}

module.exports = Player;
