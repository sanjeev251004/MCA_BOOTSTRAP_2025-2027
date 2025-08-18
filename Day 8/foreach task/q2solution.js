let numbers=[1, -2, 3, -4, 5];
let positiveno=[];

numbers.forEach(element => {
    if(element>0){
        positiveno.push(element);
    }
});

console.log(positiveno);