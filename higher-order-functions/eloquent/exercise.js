// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
let arr = [];
arrays.reduce((acc, element, index, array) => {
	arr = arr.concat(element);
}, []);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(currentValue, test, update, body) {
	if (test(currentValue)) {
		body(currentValue);
		loop( update(currentValue), test, update, body );
	} else return;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  // Your code goes here.
  let booleanArr = [];
  array.reduce((acc, element, index, arr) => {
	if(test(element) == false) {booleanArr.push(false);} else {booleanArr.push(true);}
  }, true);
  if(booleanArr.includes(false)) {return false;} else {return true;};
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    
    return scripts.reduce( (acc, curr) => { 
      return acc.count < curr.count ? curr : acc;
    }, {dir: '', count: 0}).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl