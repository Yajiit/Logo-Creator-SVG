const Shape = require('./shape');

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

module.exports = Circle;
