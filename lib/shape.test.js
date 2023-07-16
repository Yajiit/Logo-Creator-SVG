const Triangle = require('../lib/triangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');

test('Triangle render() should return the expected SVG string', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square render() should return the expected SVG string', () => {
    const shape = new Square();
    shape.setColor("#ff0000");
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="#ff0000" />');
  });

  test('Circle render() should return the expected SVG string', () => {
    const shape = new Circle();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="purple" />');
  });

  test('Shape finalRender() should return the expected SVG string', () => {
      const shape = new Triangle();
      shape.setColor('green');
      shape.setText('yaj');
      shape.setTextColor('black');
  
      const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<polygon points="150, 18 244, 182 56, 182" fill="green" />
<text x="150" y="100" font-size="55" text-anchor="middle" alignment-baseline="middle" fill="black">yaj</text></svg>`;
  
      expect(shape.finalRender()).toEqual(expectedSVG);
    });
