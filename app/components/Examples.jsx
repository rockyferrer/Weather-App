var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example cities to try out:</p>
            <ol>
                <li>
                    <Link to='/?city=Toronto'>Toronto, ON</Link>
                </li>
                <li>
                    <Link to='/?city=Manila'>Manila, Philippines</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;
