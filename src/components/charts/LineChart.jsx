import React, { Fragment } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { arrayDays, getDate } from '../../utils/commonFunction';

export default function LineChart(props) {
  const data = props.data;
  const series2 = data;
  const days = arrayDays(getDate(), 8, 'before');
  const options = {
    title: { text: '' },
    accessibility: {
      enabled: false,
    },
    chart: {
      type: 'line', // bar차트. 아무 설정이 없으면 line chart가 된다.
    },
    // backgroundColor: 'rgba(255, 255, 255, 0)',
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
      categories: days,
    },
    yAxis: [
      {
        title: {
          text: '',
        },
        labels: {
          enabled: false,
        },
      },
    ],

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
    series: [{ name: props.name, data: series2 }],
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
