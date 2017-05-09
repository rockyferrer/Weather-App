var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h3 className="text-center">It is {temp}°C in {city}.</h3>
    );
};

module.exports = WeatherMessage;
