console.log("js loaded")

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const plus = []
const minus = []
const group = []

const plusButton =document.querySelector(".plusButton")
console.log(plusButton)
plusButton.addEventListener("click",pressPlus)

const minusButton =document.querySelector(".minusButton")
console.log(minusButton)
minusButton.addEventListener("click",pressMinus)

// numbers function
for (let i = 0; i<numbers.length;i++){
    console.log(numbers[i])
}

// Trying to print this out backwards
for (let i = 0; i>numbers.length;i--){
    console.log(numbers[i])
}
    

// + button function
function pressPlus(){
    console.log(numbers)
}

// - button function/
function pressMinus(){
    console.log(numbers)
}

// Need to figure out how to get one number out at a time instead of 1-15
function goUp(){
        let numbersUp = numbers.pop()
        plus.push(numbersUp)
}    






