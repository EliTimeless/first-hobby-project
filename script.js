function lessons() {
  let name = prompt("What is your name?");
  let singIn = prompt("Have you ever take a singing lesson?");
  singIn = singIn.toLowerCase().trim();
  let email = prompt("What is your email address?");

  let h4 = document.querySelector("h4");
  if (singIn === "yes") {
    h4.innerHTML =
      "That's awesome! " +
      name +
      "! It's gonna be great work with you! your email: " +
      email;
  } else {
    h4.innerHTML =
      "Let your singing journey begin, " + name + " ! your email: " + email;
  }
  alert("Check your email for more info");
}

let lessonButton = document.querySelector("button");
lessonButton.addEventListener("click", lessons);
