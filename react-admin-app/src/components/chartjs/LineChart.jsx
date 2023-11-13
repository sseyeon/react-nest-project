// LineChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    datasets: [
      {
        label: "공정률",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 52, 3],
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
        labels: [
          "11/10",
          "11/11",
          "11/12",
          "11/13",
          "11/14",
          "11/15",
          "11/16",
          "11/17",
          "11/18",
          "11/19",
          "11/20",
          "11/21",
        ],
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // 라벨 숨기기
      },
    },
  };

  return (
    <Line
      data={data}
      options={options}
      style={{ width: "80%", height: "350px" }} // height 추가
    />
  );
};

export default LineChart;
