const formData = { 
    email: "",
    message: "" 
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

window.addEventListener("load", () => {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
      const savedFormData = JSON.parse(savedData);
      form.elements.email.value = savedFormData.email || '';
      form.elements.message.value = savedFormData.message || '';
      formData.email = savedFormData.email || '';
      formData.message = savedFormData.message || '';
    }
  });
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
console.log(formData);
localStorage.removeItem(localStorageKey);
form.reset();
formData.email = '';
formData.message = '';
});

