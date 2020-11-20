const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = {
  name: "",
  age: 0,
};
readline.question(`What's your name?`, (name) => {
  user.name = name;
  readline.question(`${name}, how old are you?`, (age) => {
    console.clear();
    user.age = age;
    user.name.length > 0 && user.age > 0
      ? console.log(user)
      : console.log("DATA NOT APPLIED");
    console.log("Thanks...");
    readline.close();
  });
});
