let no=[1, 2, 3, 4, 5];

let oddeven=no.map(n => {
    if(n%2==0){
        return "Even";
    }
    else{
        return "odd";
    }
})
console.log(oddeven);