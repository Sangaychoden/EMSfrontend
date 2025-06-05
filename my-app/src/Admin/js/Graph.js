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

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const generateData = (view) => {
//   let labels, data;

//   if (view === "weekly") {
//     labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     data = labels.map(() => Math.floor(Math.random() * 20) + 5);
//   } else if (view === "yearly") {
//     labels = ["2020", "2021", "2022", "2023", "2024"];
//     data = labels.map(() => Math.floor(Math.random() * 1200) + 300);
//   } else {
//     labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     data = labels.map(() => Math.floor(Math.random() * 100) + 20);
//   }

//   return {
//     labels,
//     datasets: [
//       {
//         label: "Tasks Completed",
//         data,
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };
// };

// const TaskCompletionGraph = ({ view }) => {
//   const data = generateData(view);

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
//           text: view === "yearly" ? "Year" : view === "weekly" ? "Days" : "Months",
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
//     <div
//       style={{
//         marginTop: "20px",
//         padding: "20px",
//         width: "100%",
//         maxWidth: "1000px",
//         height: "450px",
//         backgroundColor: "#fff",
//         boxShadow: "0 0 10px rgba(0,0,0,0.05)",
//         borderRadius: "10px",
//         marginLeft: "50px",
//       }}
//     >
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default TaskCompletionGraph;
import React, { useEffect, useState } from "react";
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
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TaskCompletionGraph = ({ view, employeeId }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveAnalytics = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8765/LEAVESERVICE/api/leaves/analytics", {
          params: {
            view: view.toLowerCase(),
            employeeId: employeeId || undefined
          }
        });

        const backendData = response.data[view.toLowerCase()];
        const labels = Object.keys(backendData);
        const data = Object.values(backendData);

        setChartData({
          labels,
          datasets: [
            {
              label: "Leaves Taken",
              data,
              backgroundColor: "#C9DEDD",
              borderColor: "#4A6D7C",
              borderWidth: 1,
            },
          ],
        });
        setError(null);
      } catch (err) {
        console.error("Error fetching leave analytics:", err);
        setError("Failed to load leave analytics data");
        // Fallback to generated data if API fails
        setChartData(generateFallbackData(view));
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveAnalytics();
  }, [view, employeeId]);

  const generateFallbackData = (view) => {
    let labels, data;

    if (view === "weekly") {
      labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
      data = labels.map(() => Math.floor(Math.random() * 5) + 1);
    } else if (view === "yearly") {
      labels = ["2020", "2021", "2022", "2023", "2024"];
      data = labels.map(() => Math.floor(Math.random() * 20) + 5);
    } else if (view === "daily") {
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      data = labels.map(() => Math.floor(Math.random() * 3) + 1);
    } else {
      labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      data = labels.map(() => Math.floor(Math.random() * 10) + 2);
    }

    return {
      labels,
      datasets: [
        {
          label: "Leaves Taken (Sample Data)",
          data,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Leave Analytics - ${view.charAt(0).toUpperCase() + view.slice(1)} View`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: view === "yearly" ? "Year" : view === "weekly" ? "Weeks" : view === "daily" ? "Days" : "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Leaves Taken",
        },
      },
    },
  };

  if (loading) {
    return (
      <div style={{
        marginTop: "20px",
        padding: "20px",
        width: "100%",
        maxWidth: "1200px",
        height: "750px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        borderRadius: "10px",
        marginLeft: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        Loading leave analytics...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        marginTop: "20px",
        padding: "20px",
        width: "100%",
        maxWidth: "1000px",
        height: "450px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        borderRadius: "10px",
        marginLeft: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red"
      }}>
        {error} (Showing sample data)
      </div>
    );
  }

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
        marginLeft: "350px",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TaskCompletionGraph;