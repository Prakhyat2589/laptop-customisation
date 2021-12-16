## Project Owner

Prakhyat Gailani

## Project Title

Laptop shopping List

## Dependencies and steps on how to install

1. Project is created in ReactJs library (Front-End) & Node.js/Express.js (Back-end)
2. All the dependencies and modules are mentioned in package.json file
3. Open `laptop-shopping` folder in VScode editor or any editor of your choice
4. Open Terminal
5. Type `cd laptop-shopping` command if your terminal is not pointed in laptop-shopping folder
6. Run `npm install` command which will create 'node_modules' installing required packages to run the Front-end and Back-end concurrently
7. Type `cd shopping-server` command
8. Run `npm install` command which will create 'node_modules' installing required packages to run the Node.js/Express.js
9. Type `cd ..` command to point the terminal back to `laptop-shopping` folder
10. Type `cd shopping-cart` command
11. Run `npm install` command which will create 'node_modules' installing required packages to run the Reactjs application
12. Type `cd ..` command to point the terminal back to `laptop-shopping` folder
13. Type `npm run dev` command and it will run back-end and front-end application concurrently
14. `shopping-server` application will run on `localhost:4000`
15. `shopping-cart` application will run on `localhost:3000` which is default port
16. Open `localhost:3000` in browser to access the application

## About the application

When App is started User is able to see the laptop customisation list. When the user clicks on the the item, it will be added to the shopping cart in the right-side column on the page and adding its value to the total item value. The user clicks items as many number of times thus adding the item to the list and its value to the total. Click Buy button with show the message that item has be bought. As such no other functionality is added to the button

The main goal this task is to access the code quality, software engineering and testing.

If there is no result from api or api is down, `No records found. Please try again later` message will be displayed.
This is done in order to handle the non-happy path for the application

## Stack

- Languages: HTML5, CSS3, JavaScript (ES6), TypeScript
- Libraries: ReactJS, Express.js, Jest
