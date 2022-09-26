import React, { Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function High() {
  const data = [40000, 80000, 50000, 150000, 70000, 100000, 120000, 60000];
  const series2 = data;
  const options = {
    title: { text: '' },
    chart: {
      type: 'line', // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          format: '<b>{point.y}</b>',
        },
      },
    },
    series: [{ name: 'data', data: series2 }],
  };
  return (
    <Fragment>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </Fragment>
  );
}
