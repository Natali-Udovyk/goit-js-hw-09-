const formData = { 
    email: "",
    message: "" 
}
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

// form.elements.email.value = JSON.parse(localStorage.getItem(localStorageKey)).email ?? "";

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
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




