function generate(event) {
  event.preventDefault();
  new Typewriter(".poem", {
    strings: "Hold fast to dreams For if dreams die",
    delay: 1,
    autoStart: true,
  });
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generate);
