class Shape {
  constructor() {
    this.color = "black";
    this.text = "";
    this.textColor = "white";
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  render() {
    // Placeholder method for generating shape render
    return "";


  }
  finalRender() {
    const shapeRender = this.render();
    const textElement = `<text x="150" y="100" font-size="50" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n${shapeRender}\n${textElement}</svg>`;
  }

}

module.exports = Shape;