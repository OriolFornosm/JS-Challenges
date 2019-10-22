///////////////////////////////////////
// Lecture: Hoisting
/* 
calculateAge(1988);

function  calculateAge(year){
    console.log(2019 - year);
}


age(1988);

var age = function (year){
    console.log(2019 - year);
}
 */
/* console.log(age);
var age = 31;

function anyname(){
    var age = 35;
    console.log(age);
}

anyname();
console.log(age); */





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

var oriol = {
    name: "Oriol",
    year: 1988,
    calculateAge: function(){
        console.log(2019 - this.year);
        console.log(this);

/*         function innerfunction() {
            console.log(this);
        }
        innerfunction(); */
    }
}

var marta = {
    name: marta,
    year:1991
}

marta.calculateAge = oriol.calculateAge;

marta.calculateAge();

oriol.calculateAge();







