// FREELANCER FORUM WORKSHOP ----------------------------------------------------------------------

/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.


// DEFINE YOUR ARRAYS -----------------------------------------------------------------------------

// Define original array
const fArr1 = [
  {name: 'Alice',
  occupation: 'Writer',
  price: 30
  },
  {name: 'Bob',
  occupation: 'Teacher',
  price: 50
  },
];

// Define new array. Each of these objects will show on the webpage every 3 seconds.
const fArr2 = [
    {name: 'Carol', occupation: 'Programmer', price: 70},
    {name: 'Dr. Slice', occupation: 'gardener', price: 25},
    { name: 'Dr. Pressure', occupation: 'programmer', price: 51},
    { name: 'Prof. Possibility', occupation: 'teacher', price: 43},
    { name: 'Prof. Prism', occupation: 'teacher', price: 81},
    { name: 'Dr. Impulse', occupation: 'teacher', price: 43},
    { name: 'Prof. Spark', occupation: 'programmer', price: 76},
    { name: 'Dr. Wire', occupation: 'teacher', price: 47},
    { name: 'Prof. Goose', occupation: 'driver', price: 72},
  ];


// DISPLAY THE AVERAGE PRICE ON WEBPAGE -----------------------------------------------------------

//Query selectors to grab HTML elements
const averageSelectedh3 = document.querySelector('#average');
const nameUl = document.querySelector('#name > ul'); // the > points to a child of the element

// combine the arrays
const pushArrFunc = (arr1, arr2) => {
  const firstItem = arr2.shift();
  arr1.push(firstItem);
  render();
}

// RENDER FUNCTION: ADD fArr2 TO THE END OF fArr1 & GET AVERAGE OF fArr1 ---------------------------
const render = () => {
  // stop re-rendering every 3 sec when fArr2 has a length of 0.
  if(fArr2.length === 0) {
    clearInterval(returnID);
  }
  // Get the average price of fArr1 and display on page
  const getSum = (total, currentObj) => {
    return total + currentObj.price;
  }
  const getAverage = (arr) => {
    return (fArr1.reduce(getSum, 0)/(arr.length)).toFixed(2);
  }
  const arrAverage = getAverage(fArr1);
  averageSelectedh3.innerText = `The average starting price is $${arrAverage}` 
  // creates the array: myName
  const myName = fArr1.map((currentObject) => {return `${currentObject.name} - ${currentObject.occupation} - $${currentObject.price}`});
  //creates the li: myNameLi
  const myNameLi = myName.map((currentObject) => {
    const currentElement = document.createElement('li');
    currentElement.innerText = currentObject;
    return currentElement;
  });
  // use replaceChildren() to replace the ul's nonexistent children with the li: myNameLi
  nameUl.replaceChildren(...myNameLi);

}
render();

// call render every 3 seconds
const returnID = setInterval(() => pushArrFunc(fArr1, fArr2), 3000);