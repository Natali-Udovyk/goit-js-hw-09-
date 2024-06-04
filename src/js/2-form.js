const formData = { 
    email: "",
    message: "" 
}
const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const input = form.elements.email;
const localStorageKey = "feedback-form-state";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "feedback-form-state";
// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";
//   form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
//   });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const email = form.elements.email.value.trim();
//   const message = form.elements.message.value.trim();
//   if(email === '' || message === ''){
//     return alert('Fill please all fields')
// }
// console.log(formData);
// localStorage.removeItem(localStorageKey);
// form.reset();

// });


// localStorage.setItem(localStorageKey, JSON.stringify(formData));