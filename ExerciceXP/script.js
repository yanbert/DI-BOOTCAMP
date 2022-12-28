//Exercice 1
let MyFavoriteFood="Attieke"

let MyFavoriteLunch="Lunch"

console.log("I eat " + MyFavoriteFood + " at every " + MyFavoriteLunch)
// Exercice 2
    // parte I
    // parte I.1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// parte I.2
let myWatchedSeriesLength = myWatchedSeries.length;
// parte I.3
let myWatchedSeriesSentence = myWatchedSeries.toString();

console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence)
   // parte II
    // parte II.1
   myWatchedSeries.splice(2,3,"friends");
   console.log(myWatchedSeries);
   // parte II.2
   myWatchedSeries.push("Black list")
   console.log(myWatchedSeries);
   // parte II.3
myWatchedSeries.unshift("Bonjour 2020");
console.log(myWatchedSeries);
// parte II.4
delete myWatchedSeries[1];
console.log(myWatchedSeries);
// parte II.5
let mythird = myWatchedSeries[2];
let result = mythird.charAt(2);
console.log(result);
// parte II.6
console.log(myWatchedSeries);

// exercice N3

let TempDegre = 34;
let TemFahrenheit = ((TempDegre/5)*9)+32
console.log(TemFahrenheit);

// Exercice n4
  //1
  // le resultat de a+b= 55
  //2
  // le resultat de la deuxieme expression a+b=23
  // 3
  // la valeur de c est non definie

  // 4 Analyse du code console.log(3 + 4 + '5');

// le système fera l'addition des chiffres 3 et 4 et ensuite concatenera avec la chaine 5 ce qui donnera 75 comme resultat

// Exercice N5
  //1
  typeof(15)
// Prediction: number
// Actual: number
typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: non defini
// Actual:number
typeof("hello")
// Prediction: string
// Actual: sting

typeof(true)
// Prediction: Boolean
// Actual : Boolean

typeof(1 != 2)
// Prediction: true
// Actual:Boolean
"hamburger" + "s"
// Prediction: undefined
// Actual:'hambugers
"1" + "3"
// Prediction:13
// Actual:'13'
"1" - "3"
// Prediction: -2
// Actual: -2
"johnny" + 5
// Prediction:jonny5
// Actual: 'johnny5'
"johnny" - 5
// Prediction:NaN
// Actual:NaN
99 * "hello"
// Prediction:NaN
// Actual: NaN
1 != 1
// Prediction:false
// Actual:false
1 == "1"
// Prediction:True
// Actual : True

1 === "1"
// Prediction: false
// Actual: false

//exercice 6
5 + "34"
// Prediction: 534
// Actual:'534'

5 - "4"
// Prediction: NaN
// Actual:1
10 % 5
// Prediction: 0
// Actual: 0
5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction: 'JavaScript'
// Actual:'JavaScript'
" " + " "
// Prediction:' '
// Actual:

" " + 0
// Prediction:' 0'
// Actual: ' 0'
true + true
// Prediction: True
// Actual: 2

true + false
// Prediction:1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction: false
// Actual: false


3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction:Nan
// Actual: NaN

