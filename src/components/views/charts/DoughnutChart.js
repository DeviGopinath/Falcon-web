import { Doughnut } from 'react-chartjs-2';
import Box from '@mui/material/Box';

const DoughnutChart = (props) => {
	var confirmed = props.sumData[0].Confirmed;
	const total = 1398124254;
	const recovered = props.sumData[0].Recovered;
	const deceased = props.sumData[0].Deceased;
	const active = confirmed - recovered;
	const notAffected = -(total - (active + recovered + deceased));
	const data = {
		labels: ['Active cases', 'Recovered', 'Deaths', 'Not affected'],
		datasets: [
			{
				label: 'Covid Cases in India',
				data: [active, recovered, deceased, notAffected],
				backgroundColor: ['#F4C8CA', '#93CDDD', '#FAF47A', '#C3D69B'],
				borderColor: [
					'rgba(255, 99, 132)',
					'rgba(153, 102, 255)',
					'rgba(255, 206, 86)',
					'rgba(75, 192, 192)',
				],
				borderWidth: 0.1,
			},
		],
	};
	const options = {
		cutoutPercentage: 10,
	};
	return (
		<Box
			sx={{
				width: 320,
				height: 330,
				backgroundColor: '#ffff',
			}}
			p={5}
		>
			<Doughnut data={data} width={20} height={20} options={options} />
		</Box>
	);
};

export default DoughnutChart;
