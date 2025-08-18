let person=[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

person.forEach(p =>{
    p.age++;
});

console.log(person);