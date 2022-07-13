import logo from '../assets/logoTS-192.png';
import roFlag from '../assets/ro.svg';
import gbFlag from '../assets/gb.svg';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

function TopMenu(){
    const { t, i18n } = useTranslation(['translationGeneral']);

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    
    const logo = getLogo();
    return (
        <div id='TopMenuContainer'>
            <Navbar id='TopMenu' fixed='top'>
                <Navbar.Brand href="/">{logo}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <div id = 'rightSide'>
                        <button onClick={() => handleClick('en') }><img src={gbFlag} className="CountryFlag" alt="logo" /></button>
                        <button onClick={() => handleClick('ro') }><img src={roFlag} className="CountryFlag" alt="logo" /></button>
                        <span className='loginbuttons'>
                            <Link to={'/login'}>{t('login')}</Link> | <Link to={'/register'}>{t('register')}</Link>
                        </span>
                    </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

function getLogo() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
  
export default TopMenu;