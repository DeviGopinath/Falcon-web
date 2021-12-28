import { Line } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import '../../../style/Chart.css';

const LineChart = (props) => {
	const datas = {
		labels: [...Object.keys(props.data)],

		datasets: [
			{
				label: `Total ${props.title} - ${props.month}`,
				data: [...Object.values(props.data)],
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

export default LineChart;
