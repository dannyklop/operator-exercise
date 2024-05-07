function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function (num) {
		return num % 2 === 0;
	});
}

/* Write an ES2015 Version */
const filterOutOddsTwo = (...nums) => nums.filter((num) => num % 2 === 0);

// **** FIND MIN ****
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
function findMin(...args) {
	console.log(...args);
	return Math.min(...args);
}

// const findMin = (...args) => Math.min(...args)

// **** mergeObjects *****

// function mergeObjects(args1, args2) {
// 	return { ...args1, ...args2 };
// }

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// **** doubleAndReturnArgs ****
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => {
	console.log(arr, ...args);
	const doubledArgs = args.map((arg) => arg * 2);
	return [...arr, ...doubledArgs];
};

// *** Slice and Dice! ***
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {}

const removeRandom = (items) => {
	// Create a randomIndex to remove based on the array length
	const randomNum = Math.floor(Math.random() * items.length);
	// Return new array w/out random element
	return [...items.slice(0, randomNum), ...items.slice(randomNum + 1)];
};

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}

const extend = (array1, array2) => {
	return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, value) => ({ ...obj, [key]: value });

/** Return a new object with a key removed. */

// function removeKey(obj, key) {}

const removeKey = (obj, key) => {
	// DK Note: When removing a property from an object while destructuring, you can use the rest syntax to collect the remaining properties into a new object, as shown in the removeKey function example:
	const { [key]: removedValue, ...newObj } = obj;
	return newObj;
};

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}

const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}
const update = (obj, key, val) => {
	return { ...obj, [key]: val };
};
