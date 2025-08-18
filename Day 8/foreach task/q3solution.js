students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];

students.forEach(stud => {
    if(stud.grade!="A++"){
        stud.grade="A++";
    }
});

console.log(students);