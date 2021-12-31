const getAllData = (month) => {
    const requestOptions = {
        method: "GET",
    };
    return fetch(
        `http://localhost:5000/allocation/getAllocation?month='${month}'`,
        requestOptions
    ).then(handleResponse);
};

const handleResponse = (response) => {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        console.log(data);
        return data;
    });
};

export default getAllData;
