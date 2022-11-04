// Select the elements
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// call the getjoke
getJoke();

// Add Event Listener
jokeBtn.addEventListener("click", getJoke);

// get joke
async function getJoke() {
  const CONFIG = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", CONFIG);
  const data = await res.json();
  const { joke } = data;
  jokeEl.innerText = joke;
}
