/************************************ Coding Challenge 1

var jhonMass = 80;
var jhonHeight = 1.80;
var markMass = 75;
var markHeight = 1.60;

var jhonBMI = jhonMass / jhonHeight^2;
var markBMI = markMass / markHeight^2;

var whosHigherBMI = jhonBMI<markBMI;

console.log("Is Marks BMI's higher than John's?" + " " + whosHigherBMI);
console.log('Mark\'s'); */

/*****************************Code Challence 2

var johnTeamScore = 89 + 120 + 103;
var mikeTeamScore = 116 + 94 + 123;
var maryTeamScore = 197 + 999 + 125;


var johnTeamAverage = johnTeamScore/3;
var mikeTeamAverage = mikeTeamScore/3;
var maryTeamAverage = maryTeamScore/3;

console.log (johnTeamAverage, mikeTeamAverage, maryTeamAverage);

if (johnTeamAverage === mikeTeamAverage === maryTeamAverage) {
    console.log('DRAW');
} else if(johnTeamAverage > mikeTeamAverage &&  johnTeamAverage > maryTeamAverage) {
    console.log('JOHN WINS by a score of ' + johnTeamAverage);
}else if (mikeTeamAverage > johnTeamAverage &&  mikeTeamAverage > maryTeamAverage){
    console.log('MIKE WINS by a score of ' + mikeTeamAverage);
}else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage) {
    console.log ('MARY WINS by a score of ' + maryTeamAverage);
}else{
    console.log ('LEAGE NOT PLAYED / CANCELED');
}

*/


/****************Coding Challange 3 

var tips = [];
var resultBill = [];

function tipCalculator(bill){
    if (bill < 50){
        var tip = (bill*20)/100;
        var result = tip + bill;

         tips.push(tip);
         resultBill.push(result);
    } else if (bill <= 50 && bill > 200) {
        var tip = (bill*15)/100;
        var result = tip + bill;

         tips.push(tip);
         resultBill.push(result);

    } else {
        var tip = (bill*10)/100;
        var result = tip + bill;

         tips.push(tip);
         resultBill.push(result);
    }
}

var restaurant1 = tipCalculator(124);
var restaurant2 = tipCalculator(48);
var restaurant3 = tipCalculator(268);



console.log('Tips paid: ' + tips);
console.log('Total paid: ' + resultBill); */

/**************Coding Challenge 4 

var John = {
    fullname: 'John Smith',
    mass: 85,
    height: 1.82,
    BMI: function(mass, height) {
        this.JohnBMI = this.mass / (this.height^2);
        }

}

var Mike = {
    fullname: 'Mike Mendez',
    mass: 70,
    height: 1.70,

    BMI: function(mass, height) {
        this.MikeBMI = this.mass / (this.height^2);
        }
}

John.BMI();

Mike.BMI();

console.log(John, Mike);

if (John.JohnBMI > Mike.MikeBMI) {
    console.log(John.fullname + ' has a higher BMI than ' + Mike.fullname);
} else if (Mike.MikeBMI > John.JohnBMI) {
    console.log(Mike.fullname + ' has higher BMI than ' + John.fullname)
} else {
    console.log(John.fullname + ' and ' + Mike.fullname + ' have the same BMI.')
}; 

*/

/******************* CODING CHALLENGE 5 */

var johntip = [];
var johntotals = [];

var marktip = [];
var marktotals = [];

var johnTipCalc = {

    bill: [124, 48, 268, 180, 42],

    tipcalc: function tipcalc() {
        for (i = 0; i < this.bill.length; i++){
            if (this.bill[i] < 50){
               var resultTip = this.bill[i] * 20 / 100;
               johntip.push(resultTip)

               var totalResult = resultTip + this.bill[i];
               johntotals.push(totalResult);

            } else if (this.bill[i] <= 50 && this.bill > 200){
                var resultTip = this.bill[i] * 15 / 100;
                johntip.push(resultTip)

                var totalResult = resultTip + this.bill[i];
                johntotals.push(totalResult);

            } else {
                var resultTip = this.bill[i] * 10 / 100;
                johntip.push(resultTip)

               var totalResult = resultTip + this.bill[i];
               johntotals.push(totalResult);

            }

        }
    }
}

var markTipCalc = {

    bill: [77, 375, 110, 45],

    tipcalc: function tipcalc() {
        for (i = 0; i < this.bill.length; i++){
            if (this.bill[i] < 100){
               var resultTip = this.bill[i] * 20 / 100;
               marktip.push(resultTip)

               var totalResult = resultTip + this.bill[i];
               marktotals.push(totalResult);

            } else if (this.bill[i] <= 100 && this.bill > 300){
                var resultTip = this.bill[i] * 10 / 100;
                marktip.push(resultTip)

                var totalResult = resultTip + this.bill[i];
                marktotals.push(totalResult);

            } else {
                var resultTip = this.bill[i] * 25 / 100;
                marktip.push(resultTip)

               var totalResult = resultTip + this.bill[i];
               marktotals.push(totalResult);

            }

        }
    }
}



johnTipCalc.tipcalc();
console.log('John family Tips paid: ' + johntip + ' Total John family paid: ' + johntotals);


markTipCalc.tipcalc();
console.log('Mark family Tips paid: ' + marktip + ' Total Mark family paid: ' + marktotals);

var sumResult = [];

function calcaverage(someoneTip) {
    
    var sum = 0;
    
    for (i=0; i < someoneTip.length; i++){
        sum = sum + someoneTip[i];
        }

    return sum / someoneTip.length;
}


var johnAverage = calcaverage(johntip);
console.log(johnAverage);


var markAverage = calcaverage(marktip);
console.log(markAverage);


