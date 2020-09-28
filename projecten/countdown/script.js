const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const countDate = "1 Jan 2021";

// Initialize
updateCounter();
setInterval(function () {
	updateCounter();
}, 1000);

function updateCounter() {
	const currentDate = Date.now();
	const endDate = new Date(countDate);

	const difference = endDate.valueOf() - currentDate.valueOf();

	var totalSeconds = difference / 1000;

	const days = Math.floor(totalSeconds / (3600 * 24));
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = Math.floor(totalSeconds % 60);

	daysEl.innerHTML = formatNumber(days);
	hoursEl.innerHTML = formatNumber(hours);
	minsEl.innerHTML = formatNumber(minutes);
	secondsEl.innerHTML = formatNumber(seconds);
}

function formatNumber(number) {
	return number < 10 ? `0${number}` : number;
}
