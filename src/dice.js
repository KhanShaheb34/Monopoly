class Dice {
  static roll() {
    const value = Math.ceil(Math.random() * 6);
    return value;
  }
}

module.exports = Dice;
