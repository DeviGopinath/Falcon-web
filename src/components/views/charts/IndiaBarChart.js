import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import '../../../style/AllBarChart.css';

const AllBarChart = (props) => {
	const data = {
		labels: [...Object.keys(props.dataOne)],
		datasets: [
			{
				label: `No. of ${props.titleOne}`,
				data: [...Object.values(props.dataOne)],
				backgroundColor: ['#F7665E'],
			},
			{
				label: `No. of ${props.titleTwo}`,
				data: [...Object.values(props.dataTwo)],
				backgroundColor: ['#A2C1E0'],
			},
			{
				label: `No. of ${props.titleThree}`,
				data: [...Object.values(props.dataThree)],
				backgroundColor: ['#B8DEAB'],
			},
		],
	};
	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<div className='barChartContainer'>
			<Box
				sx={{
					width: 530,
					height: 350,
					backgroundColor: '#ffff',
				}}
				p={5}
			>
				<Bar data={data} options={options} />
			</Box>
		</div>
	);
};

export default AllBarChart;
