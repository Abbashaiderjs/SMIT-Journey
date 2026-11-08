const fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits);


console.log(fruits[0]);      // Output: 'Apple'
console.log(fruits.length);  // Output: 3

// Modifying an element
fruits[1] = 'Mango';
console.log(fruits);         // Output: ['Apple', 'Mango', 'Orange']

const ages = [12, 18, 25, 32];

const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 25, 32]
