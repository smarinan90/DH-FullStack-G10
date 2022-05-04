window.addEventListener("load", function () {
  const form = document.getElementById("loginForm");

  const inputValidations = (event) => {
    let errors = [];
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (email.value === "" || email.value == null) {
      errors.push("Please enter a valid email");
    }
    if (password.value.length <= 6) {
      errors.push("Please fill up your password");
    }
    if (errors.length > 0) {
      event.preventDefault();
      let errorList = document.getElementById("errors");
      errorList.innerText = errors.join(" \n ");
    }
  };
  form.addEventListener("submit", inputValidations);
});
