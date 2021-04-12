// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Intialzie Array
let arr = [1, 2, 3, 4, 5];

//Create function that takes an array and that array's length
function findSum(array, length) {
  //Once the length reaches 0 return 0
  if (length <= 0) {
    return 0;
  }
  //Call the function again with length-1 but add the last value from array relative to the current length
  else {
    return findSum(array, length - 1) + array[length - 1];
  }
}

console.log(findSum(arr, arr.length));
