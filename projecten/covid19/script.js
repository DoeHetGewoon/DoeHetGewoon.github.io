const totalCasesEl = document.getElementById("total-cases");
const activeCasesEl = document.getElementById("active-cases");
const recoveredCasesEl = document.getElementById("recovered-cases");
const deathsEl = document.getElementById("deaths");

const API_URL_SUMMARY = `https://api.covid19api.com/summary`;

update();

// Update function
async function update() {
	const respRaw = await fetch(API_URL_SUMMARY);
	const resp = await respRaw.json();
	totalCasesEl.innerText = resp.Global.TotalConfirmed;
	activeCasesEl.innerText = resp.Global.TotalConfirmed - resp.Global.TotalRecovered - resp.Global.TotalDeaths;
	recoveredCasesEl.innerText = resp.Global.TotalRecovered;
	deathsEl.innerText = resp.Global.TotalDeaths;
}
