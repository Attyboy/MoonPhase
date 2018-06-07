const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const Classes = require('./styles.scss');

module.exports = () => (

    <div>
        <h1>Stranger and Stranger Luv</h1>
        <NavLink exact to='/' activeClassName={Classes.activeRoute}>
            Home
        </NavLink>
        {' + '}
        <NavLink to='/counter' activeClassName={Classes.activeRoute}>
            Counter
        </NavLink>
        {' + '}
        <NavLink to='/moonphase' activeClassName={Classes.activeRoute}>
            Moonphase
        </NavLink>
    </div>

);
