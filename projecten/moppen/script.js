const jokesEl = document.getElementById("moppen");
const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", async (e) => {
	e.preventDefault();
	const joke = await getJoke();

	jokesEl.innerHTML = "";

	jokeEl = document.createElement("p");
	jokeEl.classList.add("joke");
	jokeEl.innerText = joke.joke;

	jokesEl.appendChild(jokeEl);
});

async function getJoke() {
	const jokeRaw = await fetch("https://moppenbot.nl/api/random/");
	const joke = await jokeRaw.json();
	return joke;
}
