/*Challenge 1
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.
Example input:*/
//['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
//Function's return value (output):
{
  Queen: 'Beyonce'
}
/*Do not change the input array. Assume all elements in the input array will be of type 'string'.
Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.
E.g. it should handle input like:
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
Function's return value (output):
{
  Kevin : 'Spacey'
}
Starter Code*/
function transformFirstAndLast(arr1) {
  let element = {};
  result[arr1[0]] = arr1[arr1.length - 1];
  return element
};
/*Challenge 2
 Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:*/
//{
// name : 'Sam',
// age : 25,
// hasPets : true
//}
/*Function's return value (output) :
['name', 'age', 'hasPets']
Do not use "Object.keys" to solve this prompt.
Note that your function should be able to handle any object passed in it.
E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
Function's return value (output):
['a', 'number', 'hungry', 'grammyWins']
Starter Code:*/
var doc = {
  str: 'raw',
  num: 5,
  value: true,
  amount: 23
};

function getAllKeys(obj) {
  let result = [];
  for (let i in doc) {
    result.push(i);
  }
  return result
};
//  console.log(getAllKeys(doc))
//  {
//    name : 'Sam',
//    age : 25,
//    hasPets : true
//  }
/*Challenge 3
Write a function called "getElementsGreaterThan10AtProperty".
 Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.
 Notes:
 * If the array is empty, it should return an empty array.
 * If the array contains no elements greater than 10, it should return an empty array.
 * If the property at the given key is not an array, it should return an empty array.
 * If there is no property at the key, it should return an empty array.*/
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
//Starter Code :
function getElementsGreaterThan10AtProperty(obj, key) {
  let array = [];
  if (obj[key] instanceof Array){
    for (let i in obj[key]) {
      if (obj[key][i] >= 10) {
        array.push(obj[key][i]);
      }
      };
    };   
  return array;
};


/*Challenge 4
How would you use a closure to create a private counter? You will need to return more than one function. At least two. One to add to the counter, and another to retrieve the value. You will need to research how to return more than one function from a function.
TIP: Think method, rather than function. Do not use the prototype property directly...*/


/*Challenge 5
What is the result of running this code? Explain your answer.*/
var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname()); /* "Aurelio De Rosa" is the result, inside variable obj it has the object prop, that contains a fullname string inside and a function returning that fullname. */
var test = obj.prop.getFullname;
console.log(test()); /*undefined*/
console.log(fullname); /*It returns "John Doe" because is calling the variable fullname on the top.*/