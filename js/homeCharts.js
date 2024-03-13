const createChart = (data) => {
  let width, height, gradient;
  function getGradBg(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        chartArea.width / 2,
        chartArea.bottom,
        chartArea.width / 2,
        0
      );
      gradient.addColorStop(1, "rgba(10, 147, 150, 0.21)");
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    }
    return gradient;
  }
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "",
          //   data: [0, 0.2, 0.5, 0.3, 0.7, 0.9, 0.6, 1.0, 0.7, 1.5, 2.0, 1.2],
          data: data
            ? data
            : [0, 0.2, 0.5, 0.3, 0.7, 0.9, 0.6, 1.0, 0.7, 1.5, 2.0, 1.2],
          borderWidth: 1.61,
          borderColor: "#3cb2d9",
          pointBackgroundColor: "#3cb2d9",
          pointBorderColor: "#ffffff",
          pointRadius: 5,
          tension: 0.5,
          fill: true,
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return;
            }
            return getGradBg(ctx, chartArea);
          },
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        elements: {
          point: {
            borderWidth: 1.61,
            // radius: 10,
          },
          // line: {
          //   tension: 0.5,
          // },
        },
        tooltip: {
          callbacks: {
            title: () => null,
            label: function (tooltipItem) {
              var tooltipText = "";
              if (tooltipItem.dataset.data[tooltipItem.dataIndex] != null)
                tooltipText =
                  tooltipItem.dataset.data[tooltipItem.dataIndex].toString();
              return tooltipText + "kwh";
            },
            labelTextColor: function (context) {
              return "#ffffff";
            },
          },
          displayColors: false,
          backgroundColor: "rgba(30, 30, 30, 0.8)",
          borderWidth: 0,
          yAlign: "bottom",
          padding: {
            left: 8,
            right: 8,
            top: 4,
            bottom: 4,
          },
          bodyFont: {
            family: "Inter",
            size: 12,
            lineHeight: 1.2,
            weight: 500,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          border: {
            display: false,
          },

          ticks: {
            display: false,
          },
          grid: {
            drawTicks: false,
            // color: "#E9F1E7",
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          border: {
            display: false,
          },
          ticks: {
            // display: false,
            // padding: 5,
            color: "#636975",
            font: {
              family: "Inter",
              size: 12,
              lineHeight: 1.3,
              weight: 400,
            },
          },
          grid: {
            drawTicks: true,
            color: "#F8F8F8",
          },
        },
      },
    },
  });
};
createChart();
const btns = document.querySelectorAll(".homeChart__btn");
const chartDiv = document.querySelector(".homeChart__chart");
const noDataDiv = document.querySelector(".homeChart__nodata");

btns.forEach((btn) => {
  btn.onclick = () => {
    btn.classList.add("active");
    // const cnvs = chartDiv.querySelector("canvas");
    // cnvs.remove();
    let dataBtn = btn.getAttribute("data-data");
    if (dataBtn == 1) {
      if (chartDiv.classList.contains("hidden")) {
        chartDiv.classList.remove("hidden");
      }
      if (!noDataDiv.classList.contains("hidden")) {
        noDataDiv.classList.add("hidden");
      }
      chartDiv.innerHTML = `<canvas id="myChart"></canvas>`;
      createChart([0, 0.2, 0.5, 0.3, 0.7, 0.9, 0.6, 1.0, 0.7, 1.5, 2.0, 1.2]);
    }
    if (dataBtn == 2) {
      if (chartDiv.classList.contains("hidden")) {
        chartDiv.classList.remove("hidden");
      }
      if (!noDataDiv.classList.contains("hidden")) {
        noDataDiv.classList.add("hidden");
      }
      chartDiv.innerHTML = `<canvas id="myChart"></canvas>`;
      createChart([0, 0.2, 0.5, 0.3, 0.7, 0.9, 0.6, 0.5, 0.7, 1.5, 2.0, 0.2]);
    }
    if (dataBtn == 3) {
      if (!chartDiv.classList.contains("hidden")) {
        chartDiv.classList.add("hidden");
      }
      if (noDataDiv.classList.contains("hidden")) {
        noDataDiv.classList.remove("hidden");
      }
    }
    if (dataBtn == 4) {
      if (chartDiv.classList.contains("hidden")) {
        chartDiv.classList.remove("hidden");
      }
      if (!noDataDiv.classList.contains("hidden")) {
        noDataDiv.classList.add("hidden");
      }
      chartDiv.innerHTML = `<canvas id="myChart"></canvas>`;
      createChart([0, 1.2, 0.5, 0.3, 1.7, 0.9, 0.6, 1.0, 1.2, 1.5, 2.0, 1.2]);
    }
    if (dataBtn == 5) {
      if (chartDiv.classList.contains("hidden")) {
        chartDiv.classList.remove("hidden");
      }
      if (!noDataDiv.classList.contains("hidden")) {
        noDataDiv.classList.add("hidden");
      }
      chartDiv.innerHTML = `<canvas id="myChart"></canvas>`;
      createChart([0, 0.2, 0.5, 0.3, 0.7, 0.3, 0.6, 1.0, 0.2, 1.5, 2.0, 1.2]);
    }
    btns.forEach((btn2) => {
      if (btn !== btn2) {
        btn2.classList.remove("active");
      }
    });
  };
});
