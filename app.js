const graph = document.querySelectorAll(".graph");

async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();
  let amount = document.querySelectorAll(".amount");
  for (var i = 0; i < amount.length; i++) {
    amount[i].textContent = "$" + `${data[i].amount}`;
  }
  let highAmount = 0;
  data.forEach((element) => {
    highAmount = Math.max(highAmount, element.amount);
  });
  for (let index = 0; index < graph.length; index++) {
    let O = (data[index].amount / highAmount) * 100;
    let H = Math.max(10, O > 67 ? O - 25 : O - 15);
    graph[index].style.height = `${H}` + `%`;
    if (O === 100) {
      graph[index].style.backgroundColor = `var(--Cyan)`;
    }
  }
}

getData();
