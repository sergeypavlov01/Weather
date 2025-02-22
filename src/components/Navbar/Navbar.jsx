import { useState } from 'react';
import './Navbar.scss'

export const Navbar = ({ changeCity, hideNavbar }) => {
    const [value, setValue] = useState('');

    console.log(value);

    const handleClick = () => {
        changeCity(value);
        hideNavbar();
    }

    return (
        <nav className="navbar">
            <a className="navbar__details" href="/">Details about today</a>

            <form className="navbar__search-field">
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
