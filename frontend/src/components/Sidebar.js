import '../Cyber.css';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";



function Sidebar() {
    const { t } = useTranslation();
    const buttonKeys = ['About site', 'About me', 'skills', 'non-skills', 'My philosophies', 'evaluations','fun'];
  return (
    <Col className='sidebar-inner' sm='3' lg='2'>
        <nav className="flex-column">
            <ul>
                {buttonKeys.map((translationKey) => 
                    <li className='btn' id='about-site'>
                        <span className="btn__content">{t(translationKey)}_</span>
                        <span className="btn__glitch"></span>
                        <span className="btn__label">r25</span>
                    </li>
                )}
            </ul>

        </nav>
    </Col>
  )
}

export default Sidebar