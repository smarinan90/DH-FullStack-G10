window.addEventListener("load", () => {
  const form = document.getElementById("registerForm");
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("email");
  const birthday = document.getElementById("birth_date");
  const password = document.getElementById("password");
  const confirmationPassword = document.getElementById("confirmation_pwd");
  let errorList = document.getElementById("errors");

  const inputValidations = (event) => {
    let errors = [];
    if (firstName.value === "" || firstName.value == null) {
      errors.push("Please enter your name");
    }
    if (lastName.value === "" || lastName.value == null) {
      errors.push("Please enter your last name");
    }
    if (email.value === "" || email.value == null) {
      errors.push("Please enter a valid email");
    }
    if (birthday.value === "" || birthday.value == null) {
      errors.push("Please enter your birthday");
    }
    if (password.value.length <= 6 || password == null) {
      errors.push("Password must be longer than 6 caracters");
    }
    if (
      confirmationPassword.value != password.value ||
      confirmationPassword == null
    ) {
      errors.push("Confirmation password is not equal to password");
    }
    if (errors.length > 0) {
      event.preventDefault();
      errorList.innerText = errors.join(" \n ");
    }
  };
  form.addEventListener("submit", inputValidations);
});
