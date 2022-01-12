function Header ({mainWeather, weatherDescription}) {
    return (<div id='header'>
        <h1>Nairobi Weather</h1>
        <h2>{mainWeather}: {weatherDescription}</h2>
    </div>)
}

export default Header;