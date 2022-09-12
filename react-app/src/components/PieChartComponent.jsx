import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function PieChartComponent() {
  //   const labels = ["2010", "2012", "2014", "2016", "2018"];
  //   const datasets = [
  //     {
  //       data: [2000, 4000, 2300, 2222, 3333],
  //       backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
  //     },
  //   ];
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [10, 20, 15, 5, 50],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    },
    options: {
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + "%";
          },
        },
      },
    },
  };
  //   return <Doughnut options={{ maintainAspectRatio: false }} data={data} />;
}

export default PieChartComponent;
