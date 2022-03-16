// rcc, rccp -> ES6 class component
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker',
};

Header.propType = {
    title: PropTypes.string.isRequired,
}

// INSERT CSS in JS:
// to the html tag: style={headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

// Class version alternative:
// class Header extends Component {
//     render() {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }

export default Header;