// Challenge 1
function addTwo(num) {
    console.log(num + 2);
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    console.log(word + "S");
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var newArray = [];
    array.forEach(element => {
        callback(element);
    });
    return newArray;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let acc = initialValue == undefined ? 0 : initialValue;
    for(let i=0; i < array.length; i++) {
		acc = callback(acc, array[i], i, array);
	}
    return acc;
}

//Extension 3
function intersection(...arrays) {
	return arrays.reduce((acc, cv, index) => {
		var arr = [];
		acc.forEach(elm => {
			if(cv.includes(elm)) {
				arr.push(elm);
			}
		})
		return arr;
	})
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
	let args = arguments.length - 1, res = [...arguments[2]], temp = [];

	while(args--) {
		temp = arguments[args].reduce( (acc, curr, i, arr) => {
			if (!res.includes(curr)) {
				acc.push(curr);
			}
			return acc;
		}, []);
		res = [...res, ...temp];
	}
	return res;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	var object = {};
    array1.filter((element, index) => {
    	if(callback(element) == array2[index]) {
			object[element] = array2[index];	
		};
    });
	return object;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    var object = {};
    arrVals.forEach((element, index) => {
        object[element] = arrCallbacks.map(item => {return item(element)});
    });
    return object;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
