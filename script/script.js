const priceKm = 0.21;

const userKm = prompt('Enter how long is your trip in Km');
const userAge = parseInt(prompt ('How old are you?'));
let standardPrice = userKm * priceKm;

if ((isNaN(userKm) == true)  || (isNaN(userAge) == true) ||  (userKm < 0) || (userAge < 0)){
    console.log("error, only positive numbers")
} else {
    if (userAge < 18){
        let discounted = (standardPrice * 80 / 100)
        console.log("Your ticket's price was " + standardPrice.toFixed(2), "but since you're really young you'll pay " + discounted.toFixed(2));
    } else if(userAge > 65){
        let discounted = standardPrice * 60 / 100
        console.log("Your price was " + standardPrice.toFixed(2), "but since you're really old you'll pay " + discounted.toFixed(2))
    } else {
        console.log("Your ticket's price is" + standardPrice.toFixed(2))
    }
}