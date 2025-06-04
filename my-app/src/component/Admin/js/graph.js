// // graph.js
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TaskCompletionGraph = () => {
//   // Dummy task completion data by month
//   const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//   ];

//   const taskCounts = months.map(() => Math.floor(Math.random() * 100) + 20); // Random tasks completed (20–120)

//   const data = {
//     labels: months,
//     datasets: [
//       {
//         label: "Tasks Completed",
//         data: taskCounts,
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Task Completion Over Time",
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Months",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Tasks Completed",
//         },
//       },
//     },
//   };

//   return (
//      <div
//     style={{
//       marginTop: "20px",
//       padding: "20px",
//       width: "100%",      // allow it to expand
//       maxWidth: "1000px",  // limit on large screens
//       height: "450px",    // ✅ fixed height for canvas
//       backgroundColor: "#fff",
//       boxShadow: "0 0 10px rgba(0,0,0,0.05)",
//       borderRadius: "10px",
//       marginLeft:'50px'
//     }}
//   >
//     <Bar data={data} options={options} />
//   </div>
//   );
// };

// export default TaskCompletionGraph;


// graph.js
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const generateData = (view) => {
  let labels, data;

  if (view === "weekly") {
    labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    data = labels.map(() => Math.floor(Math.random() * 20) + 5);
  } else if (view === "yearly") {
    labels = ["2020", "2021", "2022", "2023", "2024"];
    data = labels.map(() => Math.floor(Math.random() * 1200) + 300);
  } else {
    labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    data = labels.map(() => Math.floor(Math.random() * 100) + 20);
  }

  return {
    labels,
    datasets: [
      {
        label: "Tasks Completed",
        data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
};

const TaskCompletionGraph = ({ view }) => {
  const data = generateData(view);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Task Completion Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: view === "yearly" ? "Year" : view === "weekly" ? "Days" : "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Tasks Completed",
        },
      },
    },
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        width: "100%",
        maxWidth: "1000px",
        height: "450px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        borderRadius: "10px",
        marginLeft: "50px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default TaskCompletionGraph;
