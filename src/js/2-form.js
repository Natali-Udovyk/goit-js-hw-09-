const formData = { 
    email: "",
    message: "" 
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if(email === '' || message === ''){
    return alert('Fill please all fields')
}
  localStorage.removeItem(localStorageKey);
  form.reset();
});
localStorage.setItem("formData", JSON.stringify(formData));
console.log(formData);