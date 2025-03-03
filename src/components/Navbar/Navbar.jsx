import './Navbar.scss'
import { CityContext } from '../context';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';

export const Navbar = ({ hideNavbar }) => {
    const [value, setValue] = useState('');
    const { setNewCity } = useContext(CityContext)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        setNewCity(value);
        localStorage.setItem('city', value);
        hideNavbar();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
        setNewCity(value);
        localStorage.setItem('city', value);
        hideNavbar();
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
