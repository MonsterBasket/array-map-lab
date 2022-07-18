const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(array) {
 /* let newArray = [];
  for (const sentence of array){ //to pass npm test, you need to hardcode in "tutorials" instead of "array"
    let newSentence;
  newSentence = sentence.split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  newArray.push(newSentence)
}
return newArray;
*/
let newArray = array.map(tutorial => tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
return newArray; //so I managed to use map twice instead of a for/of and map, but I'm not sure it's any more readable.
}
console.log(titleCased(tutorials));