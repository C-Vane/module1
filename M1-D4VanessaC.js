/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
/* WRITE YOUR CODE HERE */

const area= (l1, l2) => l1*l2;

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
/* WRITE YOUR CODE HERE */

const crazySum= (i1, i2) =>{
    return (typeof i1 === 'number' && i1 ===i2) ? i1*6 : "Not a number or numbers not equal"; 
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
/* WRITE YOUR CODE HERE */
const diff = 19;
const crazyDiff= (num) => {

  return ( num <= diff) ? Math.abs(num-diff) : 3*Math.abs(num-diff);
}


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */

const boundary = (N) => {
    return (Number.isInteger(N) && (N <= 100 && N >= 20) || N===400 ) ? true : false;  
}
 
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */
let str="Strive";
const strivify = (S) => {
    return (S.startsWith(str))? S : (str.concat(" ")).concat(S); 
}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const check3and7 = (N) => {
    let check;
    switch(N) {
        case (N%3 === 0 && N>=0):
            check="The number is multiple of 3";
            break;
        case (N%7 === 0 && N>=0):
            check="The number is multiple of 7";
            break;
        default: 
            check="The number is not multiple of 3 & 7";
    }
    return (check); 

}

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */


const reverseString= (S) =>{
    let phrase="";
    for(let i=S.length-1; i>=0 ; i--) {
        phrase+=S[i];
    }
    return phrase
}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

const upperFirst= (S) =>{
    var words= S.toLowerCase().split(" ");

    for(i=0; i<words.length; i++) {

        words[i]= words[i].charAt(0).toUpperCase()+ words[i].slice(1);
    }

    return words.join(" ");
}


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

const cutString= (S) => S.substring(1, S.length-2); 

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

const giveMeRandom = (n)=> {
    let arr=[];
    for(i=0; i<n; i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return(arr);
};  

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
//To check the code

console.log("EXERCISE 1", area(10,11));
console.log("EXERCISE 2", crazySum(10,10));
console.log("EXERCISE 3", crazyDiff(10));
console.log("EXERCISE 4", boundary(91));
console.log("EXERCISE 5", strivify("Hello World"));
console.log("EXERCISE 6", check3and7(10));
console.log("EXERCISE 7", reverseString("Hello World"));
console.log("EXERCISE 8", upperFirst("strivers rule"));
console.log("EXERCISE 9", cutString("Die Hard"));
console.log("EXERCISE 10", giveMeRandom(10));
