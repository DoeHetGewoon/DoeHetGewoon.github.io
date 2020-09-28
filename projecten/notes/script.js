const form = document.getElementById("form");
const input = document.getElementById("input");
const notes = document.getElementById("notes");

loadLS();

form.addEventListener("submit", (e) => {
	e.preventDefault();
	addNote(input.value);
	input.value = "";
});

function saveLS() {
	notesEls = document.querySelectorAll("li");

	lsNotes = [];
	notesEls.forEach((noteEl) => {
		lsNotes.push({
			text: noteEl.innerText,
			done: noteEl.classList.contains("done"),
		});
	});

	localStorage.setItem("notes", JSON.stringify(lsNotes));
}

function loadLS() {
	notes.innerHTML = ``;
	lsNotes = JSON.parse(localStorage.getItem("notes"));
	if (!lsNotes) return;
	lsNotes.forEach((note) => {
		addNote(note.text, note.done);
	});
}

function addNote(text, done) {
	let noteText = input.value;

	if (text) {
		noteText = text;
	}

	if (noteText) {
		const noteEl = document.createElement("li");
		if (done) {
			noteEl.classList.add("done");
		}

		noteEl.innerText = noteText;
		noteEl.classList.add("note");

		noteEl.addEventListener("click", () => {
			noteEl.classList.toggle("done");

			saveLS();
		});

		noteEl.addEventListener("contextmenu", (e) => {
			e.preventDefault();

			noteEl.remove();

			saveLS();
		});

		notes.appendChild(noteEl);

		input.value = "";

		saveLS();
	}
}
