function variablesTypes(value) {
    var name = value[0];
    var age = value[1];
    var IsMale = value[2];
    var food = new Array();
    for (i = 3,j=0; i <= value.length - 1; i++,j++) {
        food[j] = value[i];
    }
    return "My name: " + name + "//type is " + typeof (name)+"\n" +
    "My age: " + age + " //type is " + typeof (age) + "\n" +
    "I am male: " + IsMale + " //type is " + typeof (IsMale) + "\n" +
    "My favorite foods are:" + food + " //type is " + typeof (food);
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));