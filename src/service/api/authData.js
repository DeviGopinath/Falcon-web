const authData = (data) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: data,
	};

	return fetch(
		'https://kronos-test.idc.tarento.com/api/v1/user/login',
		requestOptions
	).then(handleResponse);
};

const handleResponse = (response) => {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		return data;
	});
};

export default authData;
