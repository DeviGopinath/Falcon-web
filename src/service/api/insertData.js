const insertData = (month, d1, d2, d3, d4, d5, d6, d7) => {
	const data = {
		month: month,
		data1: d1,
		data2: d2,
		data3: d3,
		data4: d4,
		data5: d5,
		data6: d6,
		data7: d7,
	};
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	console.log(requestOptions.body);
	return fetch('http://localhost:5000/home/insert', requestOptions).then(
		handleResponse
	);
};
const handleResponse = (response) => {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		return data;
	});
};

export default insertData;
