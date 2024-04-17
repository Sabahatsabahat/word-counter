import inquirer from "inquirer"
const answers = await inquirer.prompt([{
    type: "input",
    name: "sentence",
    message: "Enter  your sentence to count the word:"
}])
const words = answers.sentence.trim().split(" ")
console.log(`Your sentence words: ${words.length}`);
// console.log(words.length);

