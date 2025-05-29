import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const defaultMonthlyData = [
  { month: "Jan", last_year: 12000, this_year: 15000 },
  { month: "Feb", last_year: 15000, this_year: 18000 },
  { month: "Mar", last_year: 10000, this_year: 14000 },
  { month: "Apr", last_year: 13000, this_year: 16000 },
  { month: "May", last_year: 17000, this_year: 19000 },
  { month: "Jun", last_year: 14000, this_year: 20000 },
];

const ComparisonChart = () => {
  const [monthlyData, setMonthlyData] = useState(defaultMonthlyData);

  // If you want to enable database fetching later, you can uncomment this:
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await initializeDatabase();

        const monthlyDataRes = db.exec("SELECT * FROM monthly_data");
        const monthlyData = monthlyDataRes[0].values.map((row) => ({
          month: row[1],
          last_year: row[2],
          this_year: row[3],
        }));
        setMonthlyData(monthlyData);
      } catch (error) {
        console.error("Failed to fetch monthly data:", error);
      }
    };

    fetchData();
  }, []);
  */

  const data = {
    labels: monthlyData.map((data) => data.month),
    datasets: [
      {
        label: "This year",
        data: monthlyData.map((data) => data.this_year),
        backgroundColor: "#007BFF",
        borderRadius: 4,
      },
      {
        label: "Last year",
        data: monthlyData.map((data) => data.last_year),
        backgroundColor: "#99DAFF",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          padding: 10,
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        barPercentage: 0.4,
        categoryPercentage: 0.4,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
          callback: (value) => `${value / 1000}k`,
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Comparison</h2>
        <select className="px-3 py-1 text-sm border rounded-lg appearance-none bg-white cursor-pointer">
          <option value="6">6 months</option>
          <option value="12">12 months</option>
          <option value="3">3 months</option>
          <option value="1">1 month</option>
        </select>
      </div>
      <div className="h-64 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ComparisonChart;
