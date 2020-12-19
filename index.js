let submit = document.querySelector("button[type=submit]");
let message = document.querySelector(".message");
let confirmedBox = document.querySelector(".confirmedBox");
let form = document.querySelector(".form");
let pass1 = document.querySelector("#exampleInputPassword1");
let pass2 = document.querySelector("#exampleInputPassword2");

const checkPasswordMatch = (e) => {
  e.preventDefault();
  // checking is password null if pass is not null it will run.
  if (pass1.value && pass2.value) {
    // checking is passoword match if true it will proceed further
    if (pass1.value === pass2.value) {
      message.style.display = "none";

      console.log("password matched");
      // check passoword lenth more than 8 character and only  alphabet
      let passValid = /^(?=.*[a-z]).{8,}/;
      if (pass1.value.match(passValid)) {
        message.style.display = "none";
        form.style.display = "none";
        confirmedBox.style.display = "block";
      } else {
        message.style.display = "block";
        message.textContent =
          "Password Must contain only characters from the alphabet password length should be 8.";
      }
    }
    // if passoword don't match it will show error message
    else {
      message.style.display = "block";
    }
  }
  // if password value is null  it will show an alert.
  else {
    alert("please enter your new password");
  }
};

submit.addEventListener("click", checkPasswordMatch);
