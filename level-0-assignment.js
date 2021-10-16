// Task 0.1
x = 0;
y = 1;

console.log(x);
console.log(y);

x = x + 3;
y = y + x;

console.log(x);
console.log(y);

//Task 0.2
x = 1 + 1 * 2;
z = (1 + 1) * 2;
a = 1 + 1 * 2 / 2;
b = (1 + 1 * 2 ) / 2;

console.log(x,z,a,b);

//Task 0.3

// Return content of function "hello"
let hello = "Let's rock!"

console.log(hello)

//Task 0.4 

// function which determines if a number is even or odd
function evenOrOdd(value) {
    if (value % 2 == 0)
    return "even";
     else 
         return "odd";
}

evenOrOdd(8)

//Task 0.5

// function which finds the area of a triangle
function triangleArea(x,y,z) {
    x = x + 0;
    y = y + 0;
    z = z + 0;
    sum = (x + y + z) / 2
    return sum;
} 

triangleArea(10,5,5)

//Task 0.6

// function which returns the highest of three numbers
function max(x,y,z) {
    x = x + 0;
    y = y + 0;
    z = z + 0;
    Math.max(x,y,z);
    return Math.max(x,y,z)
}

max(10,20,21)

//BONUS: Function that turns the highest of any number of numbers
function max(x,y,z,...n) {
    x = x + 0;
    y = y + 0;
    z = z + 0
    return Math.max(x,y,z,...n)
}

max(10,20,21,30,50,95)

//Task 0.7

// Function that converts Celsius to Fahrenheit
function celsToFah(x) {
    x = x + 0;
    x = x * 9 / 5;
    x = x + 32;
    return x
} 

celsToFah(20)

//Function that converts Fahrenheit to Celsius
function fahToCels(x) {
    x = x + 0;
    x = x - 32;
    x = x / 1.8;
    return x
}

fahToCels(100)

//Task 0.8

// Function that converts number into hours and minutes

function convertToTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if((hours == 0 || hours >= 2) && (minutes == 0 || minutes >= 2)){
        return hours + " hours," + " " + minutes +" minutes";
    } 
    if ((hours == 1) && (minutes == 0 || minutes >= 2)) {
        return hours + " hour," + " " + minutes + " minutes";
    }
    if ((hours == 0 || hours >= 2) && (minutes == 1)) {
        return hours + " hours," + " " + minutes + " minute";
    }
    if ((hours == 1) && (minutes <= 1)) {
        return hours + " hour," + minutes + " " + " minute";
    }

    return hours + " hours," + minutes + " " + " minutes"  
} 

convertToTime(65)

    
//Task 0.9

// Function that finds and returns vowels in string












//Task 0.10

// function that returns identical letters in 2 strings





    
     











    
    

    
    
    
    


