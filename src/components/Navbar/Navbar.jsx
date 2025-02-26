import './Navbar.scss'
import { useState } from 'react';
import { Link } from 'react-router';

export const Navbar = ({ changeCity, hideNavbar }) => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        changeCity(value);
        hideNavbar();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        changeCity(value)
        hideNavbar()
    }

    return (
        <nav className="navbar">
            <Link to={'/details'} className="navbar__details">Details about today</Link>

            <form 
            className="navbar__search-field"
            onSubmit={(e) => handleSubmit(e)}
            >
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="navbar__search-input"
                        type="text"
                        name="city"
                        id="search"
                        placeholder='Enter city...'
                    />
                    <span onClick={handleClick} className="navbar__icon"></span>
            </form>
        </nav>
    );
};
