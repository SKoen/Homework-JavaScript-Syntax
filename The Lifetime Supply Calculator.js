function calcSupply(age, maxAge, foodPerday) {
    var foods = ["chocolate", "nuts", "fruits", "vegetables", "candies", "pizza", "burgers"]
    var dayLeft = (maxAge - age) * 365;
    var allfood = dayLeft * foodPerday;
    return (allfood + "kg of " + foods[Math.floor((Math.random() * 7))] + " would be enough until I am " + maxAge + " years old.")
}
console.log(calcSupply(38, 118, 0.5));
console.log(calcSupply(20, 87, 2));
console.log(calcSupply(16, 102, 1.1));