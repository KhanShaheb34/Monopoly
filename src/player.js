class Player {
  constructor(id, name, money) {
    const colors = ["red", "green", "blue", "yellow", "orange", "pink"];

    this.id = id;
    this.name = name;
    this.color = colors[id];
    this.money = money;
    this.properties = [];
    this.position = 0;
  }

  move(count, boardSize) {
    this.position = (this.position + count) % boardSize;
  }
}

module.exports = Player;
