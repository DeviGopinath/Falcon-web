import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import '../../../style/Chart.css';

const TotalChart = (props) => {
	// console.log(props);
	var sum = { ...props.dataTwo };
	Object.keys(props.dataOne).forEach((key) => {
		if (sum.hasOwnProperty(key)) {
			if (props.dataThree) {
				sum[key] = props.dataOne[key] + sum[key] + props.dataThree[key];
			}
			if (!props.dataThree) {
				sum[key] = props.dataOne[key] + sum[key];
			}
		}
	});
	const datas = {
		labels: [...Object.keys(sum)],

		datasets: [
			{
				label: `Total Employees ${props.title} - ${props.month}`,
				data: [...Object.values(sum)],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1,
				fill: true,
				tension: 0.5,
			},
		],
	};

	return (
		<div className='barChartContainer'>
			<Box
				sx={{
					width: 530,
					height: 310,
					backgroundColor: '#ffff',
				}}
				p={5}
			>
				<Line className='linechart' data={datas} />
			</Box>
		</div>
	);
};

export default TotalChart;
