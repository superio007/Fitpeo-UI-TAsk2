import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart,
  ArcElement,
  Tooltip,
  Legend 
} from 'chart.js';

Chart.register(
  ArcElement,
  Tooltip,
  Legend 
);

function DoughnutChart() {
  const data = {
    datasets: [
      {
        data: [2.5,5.5,5],
        backgroundColor: ['rgb(244,54,152)', 'rgb(93,54,233)', 'rgb(241,240,248)'],
        borderColor: ['white'],
        borderWidth: [1,8,15],
      },
    ],
  };
  const options = {
    responsive: true,
    cutoutPercentage: 50,
  }

  return (
    <div id='dougnut'>
        <div id='text'>
        <h2>65%</h2>
        <p id='p1'>Total New</p>
        <p id='p2'>Customers</p>
        </div>
      <Doughnut data={data}
	options={options}  />
    </div>
  );
}

export default DoughnutChart;




