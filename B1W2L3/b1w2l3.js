// begin hier je JavaScript commandos
// 1. Maak een JavaScript applicatie die de tafel van 3 en 6 uitrekent.

// Program to generate a multiplication table

// Take input from the user
const number = parseInt(prompt('Enter an integer: '));

// Creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // Multiply i with number
    const result = i * number;

    // Display the result
    console.log(`${number} * ${i} = ${result}`);
}



