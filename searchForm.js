"use strict";

window.addEventListener("load", start);

function start() {
  console.log("program loaded");

  document.querySelector("form").addEventListener("submit", submitting);
  document.querySelector("#postal_number").addEventListener("change", postalInput);
}

function submitting(event) {
  console.log(event);
  event.preventDefault();
}

function postalInput(event) {
  console.log(`given event: ${event}`);
  const postalNumber = document.querySelector("#postal_number").value;
  console.log(`post input: ${postalNumber}`);
  if (postalNumber.length == 4) {
    console.log("input is legal");
  }
  console.log("postalInput");
}
