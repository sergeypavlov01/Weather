import './Header.scss';
import { BurgerButton } from '../UI/burger-button/BurgerButton';
import { City } from '../UI/city/City';
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <header className="header">
            <div className="header__inner container-max">
                <BurgerButton active={isActive} onClick={() => setIsActive(!isActive)}/>
                {isActive
                    ? <Navbar hideNavbar={() => setIsActive(false)}/>
                    : <City />
                }
            </div>
        </header>
    );
}
