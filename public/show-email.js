function toggleShowEmail(event) {
  const email = document.querySelector("#mail");
  if (email.textContent) {
    email.textContent = "";
  } else {
    email.textContent = atob("enljaGVuMjAyM0BnbWFpbC5jb20=");
  }
}

window.onload = () => {
  const mailButton = document.querySelector("a.mail-button");
  if (mailButton) {
    mailButton.addEventListener("click", toggleShowEmail);
  }
};
