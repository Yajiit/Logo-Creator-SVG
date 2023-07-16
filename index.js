const fs = require('fs');
const inquirer = require('inquirer');
// const Shape = require('./lib/shape')
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// Function for color input validation
const isValidColor = (input, colorType) => {
    // Regular expression to validate hexadecimal color code
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  
    // Array of valid color keywords
    const validColorKeywords = [
        'black',
        'white',
        'red',
        'green',
        'blue',
        'yellow',
        'orange',
        'purple',
        'pink',
        'brown',
        'gray'
    ];
  
    // Check if the input is a valid color keyword or hexadecimal color code
    if (validColorKeywords.includes(input.toLowerCase()) || hexColorRegex.test(input)) {
      return true;
    }
  
    return `Please enter a valid ${colorType} color keyword or hexadecimal color code.`;
  };


  // Function for generating logo
async function generateLogo() {
    try {
      const shapeChoices = ['Circle', 'Triangle', 'Square'];
  
      // Prompt for text input
      const { text } = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for the logo (up to three characters):',
          validate: (input) => {
            if (input.length > 3) {
              return 'Please enter up to three characters.';
            }
            return true;
          },
        },
      ]);
  
      // Prompt for text color
      const { textColor } = await inquirer.prompt([
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the text color (color keyword or hexadecimal number):',
          validate: function (input) {
            const isValid = isValidColor(input, 'text');
            if (isValid === true) {
              return true;
            } else {
              return isValid;
            }
          },
        },
      ]);
  
      // Prompt for shape
      const { shape } = await inquirer.prompt([
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape:',
          choices: shapeChoices,
        },
      ]);
  
      // Prompt for shape color
      const { shapeColor } = await inquirer.prompt([
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape color (color keyword or hexadecimal number):',
          validate: function (input) {
            const isValid = isValidColor(input, 'shape');
            if (isValid === true) {
              return true;
            } else {
              return isValid;
            }
          },
        },
      ]);
  
      // Create shape object
      let selectedShape;
      switch (shape) {
        case 'Circle':
          selectedShape = new Circle();
          break;
        case 'Triangle':
          selectedShape = new Triangle();
          break;
        case 'Square':
          selectedShape = new Square();
          break;
        default:
          throw new Error('Invalid shape choice.');
      }


      // Set text content and text/shape color, then render SVG string
      selectedShape.setColor(shapeColor);
      selectedShape.setText(text);
      selectedShape.setTextColor(textColor);
      const svg = selectedShape.finalRender();
  
      // Save SVG string to file named logo.svg
      fs.writeFileSync('logo.svg', svg);
  
      console.log('Generated logo.svg');
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }


  
  // Call main function to start application
  generateLogo();
  
  