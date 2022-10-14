////////////////////////////////
// HTML & CSS
////////////////////////////////

// 4 -  I feel pretty good about the material, but some extra review would help

////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i < 20; i++){
    // console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i < 200; i+=2){
    // console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i < 100; i++){
    if(i%3===0 && i%5===0){
        // console.log("FizzBuzz")
    } else if (i%3===0){
        // console.log("Fizz")
    } else if (i%5===0){
        // console.log("Buzz")
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1.
plantee[2]++
// 2.
wolfy[3] = "Gotham City"
// 3.
dart.push("Hawkins")
// 4.
wolfy[0] = "Gameboy"

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (const turtle of ninjaTurtles) {
    // console.log(turtle.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

    // console.log(favMovies[8])
// 1.
favMovies.sort()
    // Sorted the array in alphabetical order
// 2.
favMovies.pop()
// 3.
favMovies.push("Guardians of the Galaxy")
// 4.
favMovies.reverse()
// 5.
favMovies.shift()
// 6. 
favMovies.unshift()
    // Returns the length
// 7.
favMovies.splice(favMovies.indexOf("Django Unchained"), 0, "Avatar")
// 8.
favMovies.slice(Math.ceil(favMovies.length / 2))
    // Created a copy of seconf half
// 9.
const secondHalf = favMovies.slice(Math.ceil(favMovies.length / 2))
    // Will return the second half that was copied
// 10.
    //  console.log(favMovies)
// 11.
// console.log(favMovies.indexOf("Volver"))
    //  -1
// 12.
favMovies.push("Lol")
    // We can still change the data in the array, just not the data type of the array
////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// .
whereIsWaldo.splice(1,1)
// .
whereIsWaldo[1][2] = "No One"
// .
// console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

for (let i = 0; i <= 20; i++) {
    const random = [ "...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..."]
    if(i%2 === 0){
        // console.log(random[Math.floor(Math.random()*3)])
    } else {
        // console.log("Love me, pet me! HSSSSSS!")
    }
    
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort()

console.log(nums[Math.floor(nums.length / 2)])