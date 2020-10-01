
/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
const array = [1, 2, 3, 4, 5, 6];



/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const personal_info = {
    name: 'Vanessa',
    surname: 'Cattabiani',
    email_address: 'vanebrunocattabiani@gmail.com',
    age: 21
}



/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
personal_info.driving_license=false;


/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete personal_info.age;



/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
const person = {
    name: 'John',
    surname: 'Doe',
    email_Address: 'johndoe@gmail.com',
    age: 25
}

console.log('The two email address are not the same?' ,personal_info.email_address.toLowerCase()!==personal_info.email_address.toLowerCase());



/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let total_shopping_cart = 500;
let total_cost, shipping_cost=10;
total_cost = (total_shopping_cart  >= 50) ? total_shopping_cart  : total_shopping_cart +shipping_cost;

console.log('The total shopping cart is',total_shopping_cart , 'The total cost is:', total_cost);



/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
let discount=0.2;
total_shopping_cart = total_shopping_cart  - discount * total_shopping_cart ;
total_cost = (total_shopping_cart  >= 50) ? total_shopping_cart  : total_shopping_cart +shipping_cost;

console.log('The total shopping cart with discount 20% is',total_shopping_cart , 'The total cost is:', total_cost);


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car = {
    brand: 'Fiat',
    model: 'x100',
    license_plate: 'PH45788'
}
const car1 = {}, car2 = {}, car3 = {}, car4 = {}, car5 = {};

Object.assign(car1,car);
Object.assign(car2,car);
Object.assign(car3,car);
Object.assign(car4,car);
Object.assign(car5,car);

car1.license_plate= 'PH68733';
car2.license_plate= 'UZ464A3';
car3.license_plate= 'BKJDHGK';
car4.license_plate= '7974FJ5';
car5.license_plate= 'AA45987';



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
const cars_for_rent =[ car, car1, car2, car3, car4, car5];


/* EXERCISE 10
Remove the first and the last car from the cars_for_rent array.
*/

/* WRITE YOUR CODE HERE */

cars_for_rent.shift();
cars_for_rent.pop();

/* EXERCISE 11
Print in the console, the types of a single car, of the car license_plate and of the brand
*/

/* WRITE YOUR CODE HERE */

console.log('Car',typeof car3,'license plate',typeof car3.license_plate,'brand',typeof car3.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/


/* WRITE YOUR CODE HERE */
const car6 = {}, car7 = {}, car8 = {};
Object.assign(car6,car);
Object.assign(car7,car);
Object.assign(car8,car);

car1.license_plate= 'OP45865';
car2.license_plate= 'ZA45987';
car3.license_plate= 'KR54867';

const cars_for_sale = [car6, car7, car8];
let total_cars = cars_for_rent.length+ cars_for_sale.length;
console.log(total_cars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
/* WRITE YOUR CODE HERE */
for(i=0 ; i< cars_for_sale.length; i++){
    console.log('Car for sale #', i+1);
    console.log('-  Brand:', cars_for_sale[i].brand); 
    console.log('-  Model:', cars_for_sale[i].model); 
    console.log('-  License Plate:', cars_for_sale[i].license_plate);
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/



//************************EXTRA HOMEWORK**********************



/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
// WRITE YOUR CODE HERE */
let S = ['a', 'b', 'c', 'd'];
let temp;
for(let i = 0; i<S.length/2 ; i++){
    temp= S[i];
    S[i]=S[S.length-i-1];
    S[S.length-i-1]=temp;
}
console.log(S);

/* EXERCISE 2
Create a code to get the maximum from an array
/

/ WRITE YOUR CODE HERE */
let array2=[5, 10, 99, 1];
let temp2=0;
for(i = 0; i < array2.length; i++){
    if(array2[i] > temp2){
        temp2= array2[i];
    }
}
console.log("MAX",temp2);

//console.log(Math.max(array2));

/* EXERCISE 3
Create a code to get the minimum from an array
/

/ WRITE YOUR CODE HERE */
temp2=array2[0];
for(i = 0; i < array2.length ; i++){
    if(array2[i] < temp2){
        temp2= array2[i];
    }
}
console.log(temp2);

/* EXERCISE 4
Create a code to get only even numerical value from an array
/

/ WRITE YOUR CODE HERE */
let even = [], j = 0;
array2=[5, 10, 99, 1];
for(i = 0; i < array2.length; i++){
    if(array2[i]%2 === 0){
        even[j] = array2[i];
        j++;
    }
}
console.log(even);

/* EXERCISE 5
Write the code to delete the even entries from an array
/

/ WRITE YOUR CODE HERE */
for(i = 0; i < array2.length; i++){
    if(array2[i]%2 === 0){
        array2[i] = array2[i+1];
        i++;
    }
}
console.log(array2);


/* EXERCISE 6
Write the code to remove all the vocal from a string
/

/ WRITE YOUR CODE HERE */
let string= "Hello Strivers";
for(i = 0; i < string.length; i++){
    if(string.charAt(i).toLowerCase() === 'a' || string.charAt(i).toLowerCase() ===  'e' || string.charAt(i).toLowerCase() === 'i'|| string.charAt(i).toLowerCase() ===  'o' || string.charAt(i).toLowerCase() === 'u' ){
        string=string.slice(0,i).concat(string.slice(i+1));
        i--;
    }
}
console.log(string);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
/

/ WRITE YOUR CODE HERE */
array2=[5, 10, 'fggfa', 99, 'abc', 1];
for(i = 0; i < array2.length; i++){
    if(typeof array2[i] === 'number'&& !(typeof array2[i]==="undefined")){
        array2[i]++;
    }
}
console.log(array2);

/*EXERCISE 8 
Replace all the strings into an array by their lenght
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
/

/ WRITE YOUR CODE HERE */

const  test=function(array8) {
    let i; 
for(i = 0; i < array8.length; i++){
    array8[i] = array8[i].length;
    
}

return(array8);

}

let array9=['fggfa', 'gfjfgafgfhj', 'abc', 'Strive'];
console.log("EX 8",test(array9));

/****************************END********************************/