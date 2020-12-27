<<<<<<< HEAD

# PAPA JHONS AUTOMATION TEST

## Clone Repository

1.- Open Your terminal and go to the folder where you want to clone the project, after that you are in your root directory, write down this command on the terminal "git clone https://webkonce-admin@bitbucket.org/webkonce/papajhonapp.git", this will download the project into your local machine.

## Download WebDrivers / Sistema Operativo(OS)

2.- Download the webdrivers, and put them in to the folder where it's the package.json file.

## Install dependencies

3.- In your terminal, in the root directory of the project that you recently clone, where is you package.json. Run the following command 'npm install' to install the dependencies.

## Run server

4.- After install all your dependencies, you are ready to start the server. Run the following command 'npm run dev'. This script you can find it on the package.json file in the script property. this will create a server runnig on port: 3000.

## Open Postman

5.- Open your postman and use a get request in the following endpoints.

- http://localhost:3000/ // OPEN THE PAGE with Nodejs, selenium and Postman
- http://localhost:3000/login // Login Test with Nodejs, selenium and Postman
- http://localhost:3000/register // Register Test with Nodejs, selenium and Postman
- http://localhost:3000/logout // Logout Test with Nodejs, selenium and Postman

- http://localhost:3000/index/products // WebScrapping from index Page with cheerio & axios
- http://localhost:3000/index/slider // WebScrapping from index Page with cheerio & axios
- http://localhost:3000/index/banner // WebScrapping from index Page with cheerio & axios
- http://localhost:3000/index/footer // WebScrapping from index Page with cheerio & axios

## Raw data

1.-) Login, Raw data object:
Example: {"username":"franroav@webkonce.cl","password":"@ijPWqPapL97kJZ"}

2.-) Register, Raw data object:
Example: {
"username":"prueba6webkonce@gmail.com",
"password":"holamundo",
"gender": "male",
"firstname": "Francisco Javier",
"lastname": "Roa Valenzuela",
"days":"30",
"months":"May",
"years":"1990",
"company":"webkonce",
"address1":"Villa dulce 283, Santiago",
"address2":"Los Alerces 512, Concepcion",
"city":"Santiago",
"state":"Alabama",
"postcode":"00283",
"aditional":"Hola Mundo!!",
"phone":"412798456",
"mobilephone":"+56932243182",
"alias":"Milla verde"
}

## BITBUCKET REPOSITORY

You can use this repository aswell:

git clone https://webkonce-admin@bitbucket.org/webkonce/papajhonapp.git
