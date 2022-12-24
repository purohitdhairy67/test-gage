import React from "react";
import ReactApexChart from "react-apexcharts";

const TreeMapChart = ({
  data,
  colors,
  textColors,
  title,
  isToolBarVisible,
  setCurrentSelected,
}) => {
  const options = {
    legend: {
      show: false,
    },
    dataLabels: {
      style: {
        colors: [(e) => textColors?.[e?.dataPointIndex]],
      },
    },
    chart: {
      toolbar: {
        show: isToolBarVisible,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 300,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },

      type: "treemap",

      events: {
        dataPointSelection: (event, chartContext, config) => {
          setCurrentSelected(config.dataPointIndex);
        },
      },
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
