fetch("./results.json")
  .then((response) => response.json())
  .then((data) => {
    const tbody = document.querySelector("#results-table tbody");

    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.ETF}</td><td>${row["12M Momentum (%)"]}</td>`;
      tbody.appendChild(tr);
    });
  })
  .catch((error) => {
    console.error("Błąd wczytywania danych", error);
  });
