// src/components/BarChart.js

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  const bins = {
  };
  let start = 0, end = 90, interval = 10;
  for (let i = start; i <= end; i += interval) {
    const range = `${i}-${i + interval - 1}`;
    bins[range] = 0;
  }
  props.items.forEach((item) => {
    const lastActive = item['lastActive'];

    // Find the appropriate bin for the 'lastActive' value
    for (let bin in bins) {
      const [binStart, binEnd] = bin.split('-').map(Number);

      if (lastActive >= binStart && lastActive <= binEnd) {
        bins[bin]++;
        break;
      }
    }
  });

  // Data for the bar graph
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"], // X-axis labels
    datasets: [
      {
        label: "Sales", // Label for the dataset
        data: [65, 59, 80, 81, 56, 55, 40], // Data points for each month
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  return (
    <div style={{width: "500px"}}>
      <h2>{props.heading}</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
