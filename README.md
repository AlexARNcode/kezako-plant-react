  <h3 align="center">Kezako Plant</h3>
  <p align="center">
    Kezako Plant : I will find what plant you are :) !
    <br />
    <a href="https://github.com/AlexARNcode/kezako-plant-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/AlexARNcode/kezako-plant-react/issues">Request Feature</a>
  </p>
</div>


![kezako](https://user-images.githubusercontent.com/53975649/147794292-2c96d92c-1443-4f4a-981c-4eaa5435ed52.gif)

## About The Project

Kezako Plant is a web application which aims to one simple goal : Find what is the plant contained in an image file.

It will display several possibilities with a score for each one.

Each possibility will have a scientific name and more common names.

### Built With

- [React.js](https://reactjs.org/)
- [PlantNet API](https://my.plantnet.org/)
- [Bootstrap](https://getbootstrap.com)

### Prerequisites

You need to have an account on PlantNet API to get a token.

## Getting Started

1. Pull this repository.
2. Go to the project directory.
3. Modify the PlantNet API token with your account's token, here:  
   `const PLANTNET_API_KEY = "Enter your PlantNet API key here"` in `config/config.js`
4. Launch a local web server (`npm start`).

## Usage

1. Choose an organ in the select menu
2. Upload a file image of your plant
3. Click on the "Send" button
