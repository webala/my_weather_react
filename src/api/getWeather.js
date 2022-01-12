const getWeather = (url, setStateValues, isLoaded) => {
    console.log('get weather called');
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setStateValues('isLoaded', true);
        setStateValues('weather', data)
        console.log(isLoaded);
    })
    .catch(error => {
        console.log(error);
        setStateValues('isLoaded', false);
        setStateValues('error', error);
    })

}

export default getWeather;