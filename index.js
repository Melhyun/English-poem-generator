function poem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    cursor: null,
    delay: 1,
    autoStart: true,
  });
}

function generate(event) {
  event.preventDefault();

  let userInstruction = document.querySelector("#user-instruction");

  let poemElement = document.querySelector(".poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = ` Generating an English poem about ${userInstruction.value}`;

  apiKey = "59c94t1918f34a2b8290c703o6bece67";
  let prompt = `generate a poem with the topic ${userInstruction.value}`;
  let context = `You are a romantic poet, write a 4 line english poem  with ${userInstruction.value},seperate the lines between the poem with <br/> , add the Shecodes AI signature at the bottom of it on a seperate line and put it in <strong>, seperate the poem and the signature`;
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(poem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit", generate);
