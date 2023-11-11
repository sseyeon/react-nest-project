import React from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["미진행", "진행완료"],
    datasets: [
      {
        label: "%",
        data: [21, 79],
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
