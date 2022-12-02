/* question 1

const today = new Date();
yyyy = today.getFullYear();
day = today.getDate();
month = today.getMonth();

if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;



const formattedToday = day + '/' + month + '/' + yyyy;

console.log(formattedToday); */

/* question 2 

const convertTemp = (temp, type) => {
    if (type == "C"){
        return temp * (9/5) + 32;
    }else if (type == "F"){
        return (temp -32) *(5/9);
    }
}

console.log(convertTemp(32, "F"));*/

/* question 3 
let text = "estarguan1111@gmail.com";*/

// regular expressions /@gmail.com is pattern we are searching for. I is a modifier meaning we are case insensitive.

/*if (text.search(/@gmail.com/i) != -1){
    console.log("valid email");
}else{
    console.log("please enter a valid email");
}
*/

/* question 4 
const isPrime = (num) => {
    for (let i = 2; i < num/2; ++i){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}
const numbers = [2,3,5,7];
if (numbers.every(isPrime)){
    console.log("All prime");
}else{
    console.log("Not prime")
}
*/