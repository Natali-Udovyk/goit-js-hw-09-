const formData = { 
    email: "",
    message: "" 
}
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const savedData = localStorage.getItem(localStorageKey);
form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if(email === '' || message === ''){
    return alert('Fill please all fields')
}
  console.log(formData)
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});




