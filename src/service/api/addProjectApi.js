const getAllData = (data) => {
    console.log(data);
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    };
    console.log(requestOptions.body);
    return fetch(
        `http://localhost:5000/projects/addProject`,
        requestOptions
    ).then(handleResponse);
};

const handleResponse = (response) => {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        console.log(data.data);
        return data;
    });
};

export default getAllData;
