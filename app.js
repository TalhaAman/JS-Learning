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
const scores = [10,20,25,30,35,50,60];
const filteredScores = scores.filter(score => {
  return score > 20;
});
console.log(filteredScores);

const users = [
  {name: 'sameer', pass: true},
  {name: 'huzi', pass: true},
  {name: 'pk', pass: false},
  {name: 'asnan', pass: true},
  {name: 'athar', pass: false},
  {name: 'sohaib', pass: true},
  {name: 'tashi', pass: false},
  {name: 'zahid', pass: true},

];
const passedUsers = users.filter(user => {
  return user.pass;
});
console.log(passedUsers);
