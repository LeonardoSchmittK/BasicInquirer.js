# :fire: CLI readline VS Inquirer.js

- Enhance the quality of the CLI prompt with [Inquirer](https://www.npmjs.com/package/inquirer), and compare with the pattern [Readline](https://nodejs.org/api/readline.html) provided by Node

---
# Commands
#####npm start
---
```` 
const inquirer = require("inquirer");
const log = console.log;
let questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "food",
    message: "Whats your favourite food",
    choices: ["Pizza", "Coffee", "Soda", "Chocolate", "Popcorn"],
  },
  {
    type: "checkbox",
    name: "games",
    message: "How many of these games have you played",
    choices: [
      "Resident Evil",
      "God of War",
      "GTA",
      "Pokémon",
      "Uncharted",
      "none",
    ],
  },
];

inquirer.prompt(questions).then((answer) => {
  log(answer);
  log("Thanks");
});
