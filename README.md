<h1 align="center">:four_leaf_clover: Kezako Plant</h1>
<h3 align="center">I will find what plant you are :)!</h3>   
<br/>
<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/53975649/147817942-24a810d9-ce02-43f8-b558-5f6b18d5f8e2.gif" />
</p>


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
You will insert this token in `config/config.js` (see below).

## How to make it work locally

1. Clone this repository.
2. Go to the project directory.
3. `npm install` to install necessary libraries
4. Rename `config/config.dist` to `config/config.js`
5. Open `config/config.js`
6. Modify `const PLANTNET_API_KEY = "Enter your PlantNet API key here"` with your token.
7. Install "Allow CORS" extension for Firefox or Chrome : https://addons.mozilla.org/fr/firefox/addon/access-control-allow-origin/
7. Launch a local web server (`npm start`).
8. :sunglasses: Enjoy !

## Usage

1. Choose an organ in the select menu
2. Upload a file image of your plant
3. Click on the "Send" button
