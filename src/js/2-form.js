const formData = { 
    email: "",
    message: "" 
}

// const fieldMessage = document.querySelector('.feedback-form')
// fieldMessage.addEventListener('submit', event => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.elements.email.value.trim();
//     const message = form.elements.message.value.trim();
//     if(email === '' || message === ''){
//         return alert('Fill please all fields')
//     } else {
//         userForm.email = email,
//         userForm.message = message
//         console.log(formData);
//         form.reset();
//     }
    
// })
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
	
  localStorage.removeItem(localStorageKey);
  form.reset();
  if(email === '' || message === ''){
            return alert('Fill please all fields')
        }
});
console.log(formData);