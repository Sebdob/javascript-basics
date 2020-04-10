
//FUNCTIONS



// function przywitanie(imie, jedzenie){
//     alert("hey, moje imię to " + imie + " i bardzo lubie "+ jedzenie +".")
// }
// przywitanie("Seba", "szpinak")

// function greet(theName, favColor, food) {
//     alert("hello, my name is " + theName + " and ma fovorite color is " + favColor + " and I like " + food +".")
// }
// greet ("Seba", "blue", "cheese")
// greet ("Monia", "green", "beans")


// function tripleMe(x) {
//     return 3 * x
// } 

// let myFavoriteNumber = tripleMe(12)
// alert(myFavoriteNumber)

//function

// document.addEventListener("click" , myFunction)
// function myFunction(){
//     alert("hello world")
// }


//ARRAYS



// let myFavoriteNumber = 7
// let myFavoriteNumbers = [9, 2, 4, 6, 8, 7]
// let myFavoriteColors = ["red", "green", "blue"]
// let myFavoritePets = [{name: "Cisna", species: "bear"}, {name:"Lanna", species:"elephant"}]

// myFavoriteColors.push("pink")
// console.log(myFavoriteColors)

// myFavoriteColors.splice(1, 1)
// console.log(myFavoriteColors)

// console.log(myFavoriteNumbers[3])
// console.log(myFavoritePets[1].species)

// let myNumber = 7.89
// console.log(myNumber.toFixed())

// let myName = "Seb"
// console.log(myName.toUpperCase())



//MAKING DECISIONS


// let yarbamateCount = 1
// while (yarbamateCount <=200){
// document.write("there are " + yarbamateCount + " yerbamate.<br>")
// yarbamateCount++
// }



//HIGHER-ORDER FUNCTIONS


// let myPlants = ['benji', 'juka', 'sunny', 'papro']

// myPlants.forEach(niceWord)

// function niceWord(plant){
//     document.write("The plant " + plant + " is a great plant.<br>")
// }



//RETURNING VS MUTATING


// let pets = [
//     {name: "Fluffy", species: "cat", age: 2},
//     {name: "Milo", species: "dog", age: 3},
//     {name: "Brutus", species: "dog", age: 8}
// ]

// console.log(pets.push({name: "Dexter", species: "dog", age: 1}))
// let ourTest = pets.map(nameOnly)

// function nameOnly(x){
//     return x.name
// }

// let dogs = pets.filter(onlyDogs)

// function onlyDogs(x) {
//     return x.species == "dog"
// }

// function onlyBabies(x) {
//     return x.age < 3
// }

// let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)
// console.log(babyDogNames)



//VARIABLE SCOPE & CONTEXT 



// let myName = "Seb"

// function amazingFunction() {
//     if (2 + 2 == 4) {
//         console.log(myName)
//     }
// }
// amazingFunction()
// console.log("in the global scope", myName)




// let seb = {
//     firstName: "Seb",
//     lastName: "Doba",
//     driveCar() {
//         function imAFunctionNotAMethod() {
//             console.log(this)
//         }
//         imAFunctionNotAMethod()
//         console.log(this.firstName + " " + this.lastName + " is driving a car.")
//     }
// }

// seb.driveCar()

// function breathe() {
//     console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled.")
// }
// breathe.call(seb)





//MISCELLANEOUS 


// let myNumbers = [10, 500, 2000, 3]
// let doubledNumbers = myNumbers.map(x => x * 2)
// console.log(doubledNumbers)


// let seb = {
//     firstName: "Seb",
//     lastName: "Doba",
//     driveCar() {

//         function imAFunctionNotAMethod = () => console.log(this)
//         imAFunctionNotAMethod()
//         console.log(this.firstName + " " + this.lastName + " is driving a car.")
//     }
// }
//        seb.driveCar()

//Function hoisting

// let cool = function() {
//     console.log("hey")
// }

// cool()

//Template literals

// let myName = "Seb"
// console.log(`hello, my name is ${myName} and the sky is blue.`)


//Semicolons

// let myName = "Seb"
// console.log(`hello, my name is ${myName} and the sky is blue.`)



