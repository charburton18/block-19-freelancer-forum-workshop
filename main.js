


// A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

// The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

// A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

// New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.




// connected HTML and JS and CSS files
// Made basic HTML file with h1, h2, h3
// initialize an array of at least two freelancers with names, occupations, and starting prices.



/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.
const originalFreelanceArr = [
{name: 'Alice',
occupation: 'Writer',
startingPrice: 30
},
{name: 'Bob',
occupation: 'Teacher',
startingPrice: 50
},
];

const newFreelancerArr = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

//render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
*/

// GET THE AVERAGE PRICE OF THE CURRENT ARRAY

// make a function that finds the average price of all of the objects inside an array. 
  // loop through each object using the array Method reduce()
    // define a callback function inside reduce() called getSum that adds all the obj prices together
    const getSum = (total, currentObj) => {
      return total + currentObj.startingPrice;
    }
    // define another function called getAverage that invokes the getSum function and divides its output by number of array elements (array.length)
    const getAverage = (arr) => {
      return originalFreelanceArr.reduce(getSum, 0)/(arr.length);
    }
    // call our getAverage function, define it as a variable
const arrAverage = getAverage(originalFreelanceArr); // returns the average startingPrice of the array passed in


//we need to put this arrAverage into the HTML... hmmm
    // I added an h3 with the id "average"
    // lets grab this h3

const averageSelectedh3 = document.querySelector('#average');

averageSelectedh3.innerText = `The average starting price is $${arrAverage}` // this puts our array's average startingPrice into the HTML :)

// Help from Anusha:
// How to put the array in the HTML?
// what if every 3 seconds I grab the first element of arr2 and push onto arr1?
// pushArrFunc takes in 2 arrays
const pushArrFunc = (arr1, arr2) => {
  // slice 0th index of arr2
  // push 0th index of arr2 into arr1
  // loop through arr2 and take out the arr elements in order. 
    // splice out the currentArrElement and place it into arr1
  for(let i = 0; i < newFreelancerArr.length; i++) {
  const splicedFreelancerArr = arr2.splice(i);
  setInterval(arr1.push(splicedFreelancerArr[i]), 3000);
  }
  return arr1;
}
console.log(pushArrFunc(originalFreelanceArr, newFreelancerArr));
//define pushEvery3Sec
// console.log(setInterval(pushArrFunc(originalFreelanceArr, newFreelancerArr), 3000));
//console.log(pushEvery3Sec(pushArrFunc(originalFreelanceArr, newFreelancerArr)));

// use querySelector to grab the ul
// First create li's with the document.createElement("li") in the DOM
// use replaceChildren() to replace the ul's (#ulFreelancerList) children with the keyvalues of each object
  // first li is Dr. slice
  //  





// next I have to push more objects in a new array into the existing array every 3 seconds

// Let's define an array with more objects in it

  

// I have to push the objects from freelancers array into the existing originalFreelanceArr every 3 seconds
// I will be using setInterval() and push()
// setInterval will call the push() function every 3000 milliseconds 

// I also need a way to display my array on the webpage without hard-coding it
// I think simply adding objects to the original array with the above mentioned methods will do that.. IF I somehow put the array onto the page
// can an array be sent to HTML as a list? How can an array be listed on a website in an understandable way?

  