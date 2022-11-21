import React from "react";
import ReactApexChart from "react-apexcharts";

const TreeMapChart = ({ data, colors, title, isToolBarVisible }) => {
  const options = {
    legend: {
      show: false,
    },
    chart: {
      toolbar: {
        show: isToolBarVisible,
      },
      type: "treemap",
    },
    title: {
      text: title,
      align: "center",
    },
    colors: colors,
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };

  const series = [
    {
      data,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="treemap"
      height={"100%"}
    />
  );
};

export default TreeMapChart;
