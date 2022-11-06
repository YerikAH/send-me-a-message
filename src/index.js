let regexName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
let maxLengthName = 20;
let inputName = "name";
let messageRegexName = "Only letters and spaces are allowed.";
let nameArray = [regexName, maxLengthName, inputName, messageRegexName];

let regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let maxLengthEmail = 320;
let inputEmail = "email";
let messageRegexEmail = "The email you entered is not valid.";
let emailArray = [regexEmail, maxLengthEmail, inputEmail, messageRegexEmail];

let regexTitle = /./;
let maxLengthTitle = 100;
let inputTitle = "title";
let messageRegexTitle = "... error system.";
let titleArray = [regexTitle, maxLengthTitle, inputTitle, messageRegexTitle];

let regexMessage = /./;
let maxLengthMessage = 255;
let inputMessage = "message";
let messageRegexMessage = "... error system.";
let messageArray = [
  regexMessage,
  maxLengthMessage,
  inputMessage,
  messageRegexMessage,
];

const $nameInput = document.getElementById("nameInput");
const $emailInput = document.getElementById("emailInput");
const $titleInput = document.getElementById("titleInput");
const $messageInput = document.getElementById("messageInput");
const $maxLengthMessage = document.getElementById("maxLengthMessage");

$nameInput.addEventListener("blur", (e) =>
  validateInputs(e, nameArray[0], nameArray[1], nameArray[2], nameArray[3])
);

$emailInput.addEventListener("blur", (e) =>
  validateInputs(e, emailArray[0], emailArray[1], emailArray[2], emailArray[3])
);

$titleInput.addEventListener("blur", (e) =>
  validateInputs(e, titleArray[0], titleArray[1], titleArray[2], titleArray[3])
);

$messageInput.addEventListener("blur", (e) =>
  validateInputs(
    e,
    messageArray[0],
    messageArray[1],
    messageArray[2],
    messageArray[3]
  )
);
$messageInput.addEventListener("input", (e) => {
  let lengthUser = e.target.value.length;
  let maxLength = 255;
  let result = maxLength - lengthUser;
  $maxLengthMessage.textContent = result;
});

function validateInputs(e, regex, number, inputAbout, messageRegex) {
  let patron = regex;
  let input = e.target.value;
  let countLetter = e.target.value.length;
  let errorCatch = e.target.nextElementSibling;
  console.log(countLetter, errorCatch);
  console.log(e.target.value);
  if (e.target.value === "" || e.target.value === " ") {
    errorCatch.textContent = `You cannot leave the ${inputAbout} field empty.`;
    errorCatch.classList.toggle("active-error");
    e.target.classList.toggle("active-error-decorator");
  } else {
    verificationError(e, errorCatch);
  }
  if (countLetter == 0) {
    errorCatch.textContent = `You cannot leave the ${inputAbout} field empty.`;
    errorCatch.classList.toggle("active-error");
    e.target.classList.toggle("active-error-decorator");
  } else if (countLetter > number) {
    errorCatch.textContent = `You cannot enter more than ${number} characters.`;
    errorCatch.classList.toggle("active-error");
    e.target.classList.toggle("active-error-decorator");
  } else {
    verificationError(e, errorCatch);
  }

  if (!patron.test(input.trim())) {
    errorCatch.textContent = messageRegex;
    errorCatch.classList.toggle("active-error");
    e.target.classList.toggle("active-error-decorator");
  }
}

function verificationError(e, error) {
  if (error.className === "error-catch active-error") {
    error.classList.toggle("active-error");
    e.target.classList.toggle("active-error-decorator");
  } else {
    return;
  }
}
