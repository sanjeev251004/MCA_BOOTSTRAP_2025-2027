const no = [1, 2, 2, 3, 4, 4, 5];

const filteredno = no.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(filteredno); // [1, 2, 3, 4, 5]
