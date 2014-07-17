function soothsayer(value1,value2,value3,value4) {
    var numbers = new Array();
    var languages = new Array();
    var cities = new Array();
    var cars = new Array();
    for (i = 0; i < 5; i++) {
        numbers[i] = value1[i];
        languages[i] = value2[i];
        cities[i] = value3[i];
        cars[i] = value4[i];
    }
    return "You will work " + numbers[Math.floor((Math.random() * 5))] +
     " years on " + languages[Math.floor((Math.random() * 5))] +"\n"+ "You will live in "
    + cities[Math.floor((Math.random() * 5))] + " and drive " + cars[Math.floor((Math.random() * 5))]
}

console.log(soothsayer([3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"], ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]))