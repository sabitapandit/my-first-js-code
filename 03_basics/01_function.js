function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("b");
    console.log("i");
    console.log("t");
    console.log("a");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2

}



const result = addTwoNumbers(3, 5)

//console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please inter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("sabita"));
//console.log(loginUserMessage("sabita"));

function calculateCarPrice(...num1) {
    return num1
}

//console.log(calculateCarPrice(200, 300, 400));

const user = {
    username: "sabita",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
