import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const TreeMapChart = ({
  data,
  colors,
  textColors,
  title,
  isToolBarVisible,
  setCurrentSelected,
}) => {
  useEffect(() => {
    const chart = document.querySelector(".apexcharts-svg > .apexcharts-inner");
    if (chart) {
      const width = chart.getBoundingClientRect().width;
      const chartWrapper = document.querySelector(".apexcharts-svg");
      if (chartWrapper) {
        const diff = chartWrapper.clientWidth - width;
        //
        // scale according to diff
        const scale = 1 + diff / chartWrapper.clientWidth;
        chartWrapper.style.transform = `translateX(${
          diff / 2
        }px) scale(${scale})`;
      }
    }
  }, [data]);

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
      width: "100%",

      // zoom: {
      //   enabled: true,
      // },
      toolbar: {
        // autoSelected: "zoom",
        show: false,
        // tools: {
        //   download: true,
        //   selection: false,
        //   zoom: false,
        //   zoomin: true,
        //   zoomout: true,
        //   pan: false,
        // },
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
    // title: {
    //   text: title,
    //   align: "center",
    // },
    colors: colors,
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },

    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        show: true,
        formatter: () => "",
      },
      z: {
        show: false,
      },
    },
  };

  const series = [
    {
      data,
    },
  ];

  return (
    // <></>
    <ReactApexChart
      options={options}
      series={series}
      type="treemap"
      height={"100%"}
      width={"100%"}
    />
  );
};

export default TreeMapChart;
