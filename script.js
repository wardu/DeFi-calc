function calculate() {

  let APY = +document.getElementById("APY").value;
  let initial_investment = +document.getElementById("initial_investment").value;
  let days_comp = +document.getElementById("days_comp").value;
  let factored_APY = (APY / 100) + 1;
  let daily_factor = (factored_APY) ** (1 / 365);
  let daily_percent = (daily_factor - 1) * 100;
  let weekly_factor = daily_factor ** 7
  let weekly_percent = (weekly_factor - 1) * 100;
  let amount_after_comp = initial_investment * daily_factor ** (days_comp);

  // Update results elements
  document.getElementById("main_result").textContent = (`$ ${amount_after_comp.toFixed(2)}`);
  document.getElementById("APY_daily_value").textContent = (`${daily_percent.toFixed(2)} %`);
  document.getElementById("APY_weekly_value").textContent = (`${weekly_percent.toFixed(2)} %`);
}

window.addEventListener("load", function () {
  document.getElementById("calc").addEventListener("click", calculate)
});