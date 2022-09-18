// for form submit
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernameValidation = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(form.username.value);
  const username = form.username.value;

  if(usernameValidation.test(username)){
    feedback.textContent = 'Congrats, Username is valid.'
  } else {
    feedback.textContent = 'Sorry, Incorrect username. Username must only contains alphabet ranges between 6 to 12 characters long';
  }
})
 form.addEventListener('keyup', e => {
  if(usernameValidation.test(e.target.value)){
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
 });
