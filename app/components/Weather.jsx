var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },

    handleSearch: function(city) {
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(city).then(function(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },

    render: function() {
        var {city, temp, isLoading} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} city={city} />;
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
