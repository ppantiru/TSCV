import '../Cyber.css';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";



function Sidebar() {
    const { t } = useTranslation();
  return (
    <Col className='sidebar-inner' sm='3' lg='2'>
        <nav className="flex-column">
            <ul>
                <li className='btn' id='about-site'>
                    <span className="btn__content">{t('About site')}_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">r25</span>
                </li>
                <li className='btn' id='about-me'>
                    <span className="btn__content">{t('About me')}_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">r25</span>
                </li>
                <li className='btn' id='skills'>
                    <span className="btn__content">{t('skills')}_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">r25</span>
                </li>
                <li className='btn' id='non-skills'>
                    <span className="btn__content">{t('non-skills')}_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">r25</span>
                </li>
                <li className='btn' id='philosophies'>
                    <span className="btn__content">{t('My philosophies')}_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">r25</span>
                </li>
                <li className='btn' id='evaluations'>
                    <span className="btn__content">{t('evaluations')}_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">r25</span>
                </li>
            </ul>

        </nav>
    </Col>
  )
}

export default Sidebar