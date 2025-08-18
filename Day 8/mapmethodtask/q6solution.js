let numbers = [2, 4, 3, 5];

let result = numbers.map(n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
});
console.log(result);
