const cancelButton = document.querySelector("#cancel");

const timeoutId = setTimeout(() => {
  window.location.href = "http://www.google.com";
}, 5000);

cancelButton.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log("ABORTED THE REDIRECTION!");
});
