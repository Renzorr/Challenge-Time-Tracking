const btndaily = document.getElementById("day");
const btnweekly = document.getElementById("week");
const btnmonthly = document.getElementById("month");

const title = document.querySelectorAll(".title");
const actualTime = document.querySelectorAll(".actual-time");
const previousTime = document.querySelectorAll(".previous-time");

async function api() {
  const response = await fetch("./data.json");
  const data = await response.json();
  console.log(data);

  changeTitle();
  changeWeek();

  function changeDay() {
    actualTime.forEach((e, i) => {
      e.innerHTML = `${data[i].timeframes.daily.current}hrs`;
    });

    previousTime.forEach((e, i) => {
      e.innerHTML = `Last day - ${data[i].timeframes.daily.previous}hrs`;
    });
  }

  function changeWeek() {
    actualTime.forEach((e, i) => {
      e.innerHTML = `${data[i].timeframes.weekly.current}hrs`;
    });

    previousTime.forEach((e, i) => {
      e.innerHTML = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
    });
  }

  function changeMonth() {
    actualTime.forEach((e, i) => {
      e.innerHTML = `${data[i].timeframes.monthly.current}hrs`;
    });

    previousTime.forEach((e, i) => {
      e.innerHTML = `Last month - ${data[i].timeframes.monthly.previous}hrs`;
    });
  }

  function changeTitle() {
    title.forEach((e, i) => {
      e.innerHTML = data[i].title;
    });
  }

  btndaily.addEventListener("click", changeDay);
  btnweekly.addEventListener("click", changeWeek);
  btnmonthly.addEventListener("click", changeMonth);
}

api();
