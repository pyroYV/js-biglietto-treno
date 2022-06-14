const priceKm = 0.21

const userKm = prompt('Enter how long is your trip in Km')
const userAge = parseInt(prompt ('How old are you?'))

console.log(userKm,userAge)

let standardPrice = userKm * priceKm
console.log(standardPrice)
if (userAge < 18){
    let discounted = (standardPrice * 80 / 100)
    console.log(discounted.toFixed(2))
} else if(userAge > 60){
    let discounted = standardPrice * 60 / 100
    console.log(discounted.toFixed(2))
} else {
    console.log(standardPrice)
}