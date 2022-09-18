// // for form submit
// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// const usernameValidation = /^[a-zA-Z]{6,12}$/;

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   // console.log(form.username.value);
//   const username = form.username.value;

//   if(usernameValidation.test(username)){
//     feedback.textContent = 'Congrats, Username is valid.'
//   } else {
//     feedback.textContent = 'Sorry, Incorrect username. Username must only contains alphabet ranges between 6 to 12 characters long';
//   }
// })
//  form.addEventListener('keyup', e => {
//   if(usernameValidation.test(e.target.value)){
//     form.username.setAttribute('class', 'success');
//   } else {
//     form.username.setAttribute('class', 'error');
//   }
//  });



//Filter Method --> Array Methods
// const scores = [10,20,25,30,35,50,60];
// const filteredScores = scores.filter(score => {
//   return score > 20;
// });
// console.log(filteredScores);

// const users = [
//   {name: 'sameer', pass: true},
//   {name: 'huzi', pass: true},
//   {name: 'pk', pass: false},
//   {name: 'asnan', pass: true},
//   {name: 'athar', pass: false},
//   {name: 'sohaib', pass: true},
//   {name: 'tashi', pass: false},
//   {name: 'zahid', pass: true}

// ];
// const passedUsers = users.filter(user => {
//   return user.pass;
// });
// console.log(passedUsers);



// // Map method of Array methods
// const prices = [10,20,25,30,35,50,60];
// const salePrices = prices.map(price => {
//   if(price > 30){
//     return price/2;
//   } else {
//     return price;
//   }
// })
// console.log(salePrices);

// const products = [
//   {name: 'soap', price: 80},
//   {name: 'shampoo', price: 150},
//   {name: 'buscuits', price: 60},
//   {name: 'vegetables', price: 120},
//   {name: 'fruits', price: 250}
// ];
// const saleProducts = products.map(product => {
//   if(product.price > 100){
//     // product.price = product.price / 2; //This is destructive so we are not using this 
//     return {name: product.name, price: product.price/2}
//   } else {
//     return product;
//   }
// })
// console.log(saleProducts);



// Reduce method of Array methods
const marks = [10,20,25,30,35,50,60];
const passingMarks = marks.reduce((acc, curr) => {
  if(curr > 30){
    acc++;
  }
  return acc;
}, 0);
console.log(passingMarks);

const points = [
  {name: 'sameer', score: 50},
  {name: 'pk', score: 60},
  {name: 'asnan', score: 70},
  {name: 'huzi', score: 80},
  {name: 'sameer', score: 50},
  {name: 'pk', score: 30},
  {name: 'asnan', score: 70},
  {name: 'huzi', score: 10},
  {name: 'sameer', score: 30},
  {name: 'pk', score: 60},
  {name: 'asnan', score: 70},
  {name: 'huzi', score: 40},
  {name: 'sameer', score: 10},
  {name: 'pk', score: 60},
  {name: 'asnan', score: 50},
  {name: 'huzi', score: 20},
  {name: 'sameer', score: 50},
  {name: 'pk', score: 60},
  {name: 'asnan', score: 70},
  {name: 'huzi', score: 50},
];
const totalPoints = points.reduce((acc, curr) => {
  if(curr.name === 'pk'){
    acc += curr.score;
  }
  return acc;
},0)
console.log(totalPoints);