import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["week1", "week2", "week3", "week4"];

export const options = {
  reponsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: false,
      position: "left",
      grid: {
        drawOnChartArea: true,
      },
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: "Activities",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: [200, 400, 200, 300, 400, 300],
      borderWidth: "2",
      borderColor: "rgba(155, 221, 124, 1)",
      backgroundColor: "rgba(255, 255, 255, 1)",
      yAxisID: "y",
      tension: 0.5,
    },
    {
      label: "Guest",
      data: [200, 300, 200, 300, 400, 100],
      borderWidth: "2",
      innerHeight: "45",
      borderColor: "rgba(233, 160, 160, 1)",
      backgroundColor: "rgba(255, 255, 255, 1)",
      yAxisID: "y1",
      tension: 0.5,
    },
  ],
};
