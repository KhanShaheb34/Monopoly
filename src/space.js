class Space {
  constructor(props) {
    this.name = props.name;
    this.type = props.type;
    this.position = props.position;
    if (props.cost) this.cost = props.cost;
    if (props.color) this.color = props.color;
    if (props.colorCode) this.colorCode = props.colorCode;
    if (props.rent) this.rent = props.rent;
    if (props.group) this.group = props.group;
    if (props.house) this.housePrice = props.house;
    if (props.corner) this.corner = true;
  }
}

module.exports = Space;
