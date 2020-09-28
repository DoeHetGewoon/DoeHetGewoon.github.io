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
	const jokeRaw = await fetch("http://api.apekool.nl/services/jokes/getjoke.php/");
	const joke = jokeRaw.json();
	return joke;
}
