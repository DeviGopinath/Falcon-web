const projectdetailsapi = (pid) => {
    const requestOptions = {
        method: "GET",
    };
    return fetch(
        `http://localhost:5000/projects/getIndividualProject?pid=${pid}`,
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

export default projectdetailsapi;
