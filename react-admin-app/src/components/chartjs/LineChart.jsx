import React from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    datasets: [
      {
        label: "공정률",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.4)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: ["11/10", "11/11", "11/12", "11/13", "11/14", "11/15"],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
