var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>
                This is a simple weather application built on React
            </p>
            <p>
                Tools used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JavaScript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - API for weather data
                </li>
                <li>
                    <a href="http://foundation.zurb.com/">Foundation</a> - CSS framework used
                </li>
                <li>
                    <a href="https://webpack.github.io/">Webpack</a> - Module bundler
                </li>
                <li>
                    <a href="https://www.heroku.com/">Heroku</a> - Deployment
                </li>
            </ul>
        </div>
    );
}

module.exports = About;
