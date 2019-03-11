//Pseudo code

//create contructor function called programmer to create programmer objects
//create method to print info to console
//create programmer object and call method to print its content 


//create contructor function called programmer to create programmer objects
function Programmer(name, position, age, language) {

    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}

//create method to print info to console

Programmer.prototype.printInfo = function(){
    console.log("Name: "+ this.name + "\nPosition: " + this.position + "\nAge: " +this.age +
    "\nLanguage: " + this.language)

}

var lisa = new Programmer("Lisa", "student", "34", "Javascript");

lisa.printInfo();