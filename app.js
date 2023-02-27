// Set kelvin temp
const kelvin = 293

// Calculate Celsius by subtracting 273 for kelvin
let celsius = kelvin - 273

// Calculate Newton From Celsius
let newton = celsius * (33/100)

// Calculate Fahrenheit from celsisus
let fahrenheit = celsius * (9/5) + 32

// Deal with decimals
fahrenheit = Math.floor(fahrenheit)
newton = Math.floor(newton)


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${newton} degrees Newton`)
