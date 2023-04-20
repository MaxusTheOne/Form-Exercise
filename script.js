"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("Loaded");
  document.querySelector("#signup").addEventListener("submit", submitClicked);
}

function submitClicked(event) {
  event.preventDefault();
  console.log(event);
  console.log("submit clicked");

  const elements = document.querySelector("#signup").elements;
  console.log(`elemets: ${elements}`);

  const signup = {
    fullname: elements.fullname.value,
    email: elements.email.value,
    username: elements.userName.value,
    password: elements.password.value,
    repeatPassword: elements.repeatPassword.value,
    payment: elements.payment.value,
    payment_plan: elements.paymentPlan.value,
    emailAccept: elements.emailAccept.checked,
    termsConditions: elements.terms_conditions.checked,
  };
  console.log(signup);
}
