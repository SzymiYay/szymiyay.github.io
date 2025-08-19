// Wczytanie pliku JSON
fetch("../data/results.json")
  .then((response) => response.json())
  .then((data) => {
    // === TABELA ===
    const tbody = document.querySelector("#results-table tbody");
    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.ETF}</td>
        <td>${row["12M Momentum (%)"]}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch((error) => {
    console.error("Błąd wczytywania danych:", error);
  });

  
fetch("../data/history.json")
  .then((response) => response.json())
  .then((history) => {
    const labels = history.index.map((d) => new Date(d).toLocaleDateString());
    const datasets = history.columns.map((ticker, i) => {
      return {
        label: ticker,
        data: history.data.map((row) => row[i]),
        borderColor: getColor(i),
        fill: false,
        tension: 0.1,
      };
    });

    const ctx = document.getElementById("momentum-chart").getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Momentum (%)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Data",
            },
          },
        },
      },
    });
  });

// Funkcja pomocnicza do kolorów
function getColor(i) {
  const colors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];
  return colors[i % colors.length];
}