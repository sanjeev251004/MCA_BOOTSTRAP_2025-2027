const people = [
    { name: "Alice", age: 12 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
const adults = people.filter(person => person.age > 18);

console.log(adults);
