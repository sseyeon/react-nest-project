import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return <Pie data={data} />;
};

export default PieChart;
