var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h2>It is {temp} in {city}.</h2>
    );
};

module.exports = WeatherMessage;
