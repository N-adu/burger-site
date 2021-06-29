//fixed white navbar in the header, on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
  header.classList.toggle('sticky', window.scrollY > 0);
});


const form = document.getElementById('form');
const fname = document.getElementById('fname');
const phone = document.getElementById('phoneNum');
const email = document.getElementById('email');
const onDate = document.getElementById('onDate')
const atTime = document.getElementById('atTime');

checkInputs = () => {
  const fnameVal = fname.value.trim();
  const phoneVal = phone.value.trim();
  const emailVal = email.value.trim();
  const dateVal = onDate.value.trim();
  const timeVal = atTime.value.trim();
  
  setError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText = message;
    
    formControl.className = 'form-control error';
  }
  
  if(fnameVal === '') {
    setError(fname, 'Name must be provided')
  }else{
    return true
  }
  if(phoneVal === '') {
    setError(phoneNum, 'Phone number must be filled')
  }else{
    return true
  }
   if(emailVal === '') {
    setError(email, 'Email address must be filled')
  }else{
    return true
  }
  if(dateVal === '') {
    setError(onDate, 'Date of booking must be filled')
  }else{
    return true
  }
  if(timeVal === '') {
    setError(atTime, 'Time of booking must be filled')
  }else{
    return true
  }
} 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
})