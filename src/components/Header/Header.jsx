import './Header.scss';
import { BurgerButton } from '../UI/burger-button/BurgerButton';
import { City } from '../UI/city/City';
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';

export const Header = ({ isLoadedError, city, changeCity }) => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <header className="header">
            <div className="header__inner header__inner-container">
                <BurgerButton active={isActive} onClick={() => setIsActive(!isActive)}/>
                {isActive
                    ? <Navbar changeCity={changeCity} hideNavbar={() => setIsActive(false)}/>
                    : <City isLoadedError={isLoadedError} city={city}/>
                }
            </div>
        </header>
    );
}
