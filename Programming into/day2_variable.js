/*var number = prompt('What number would you like to find the module of?');*/


//console.log(number%2);

/*console.log(Math.PI);
console.log(Math.min(5));
console.log(Math.max(5));*/

var shoppingListArray = ['bread', 'oil', 'soap'];
console.log(shoppingListArray[1]);
shoppingListArray[3]='toothpaste';
console.log(shoppingListArray[3]);
console.log(shoppingListArray);
shoppingListArray.push('grapes')
shoppingListArray.pop();
shoppingListArray.slice(2,2);

var numberArray = [1,3,4,2,23,52,167];

var maxValue = (Math.max(1,2,4,6));
console.log(Math.max.apply(null,numberArray));
console.log(Math.min(2,3,5,23));
console.log(Math.round(2334242.1342143252));
console.log(Math.ceil(23.0000001));
console.log(Math.floor(23.999999));

console.log(Math.floor(377*Math.random())+3);

//var age = prompt('what is your age');
//console.log(Math.floor(age*math.random));

//var radius = prompt('what is the radius of the cone?');
//var height = prompt ('what is the height of the cone?');
//console.log(Math.PI*(radius*radius)/3*height);

var array = [];
array[0] = prompt('what is your value for A?');
array[1] = prompt('what is your value for B');
array[2] = Math.sqrt((array[0]*array[0])+(array[1]*array[1]));
console.log(array[2]);
