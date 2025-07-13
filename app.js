// force cast of today is 293
let kelvin = 24393;
// calculate celsius
let celsius = kelvin - 273;
// calculate fahrenheit
let fahrenheit = celsius * (9/5) +32;
// change decimal => interger
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`)

// convert celsius => Newton

let Newton = celsius * (33/1000)

Newton = Math.floor(Newton)

console.log(`The temperature in Newton is ${Newton} `)
