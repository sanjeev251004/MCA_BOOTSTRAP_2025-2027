let words = ["hello", "world", "javascript"];

let splitwords = words.map(sw => {
    return sw.split('').join(' ');
});

console.log(splitwords);
