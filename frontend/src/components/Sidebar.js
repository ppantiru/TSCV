import '../Cyber.css';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";



function Sidebar() {
    const { t } = useTranslation();
    const buttons = ['About site', 'About me', 'skills', 'non-skills', 'My philosophies', 'evaluations','fun'];
  return (
    <Col className='sidebar-inner' xs='12' sm='12' lg='2'>
        {buttons.map((translationKey) => 
            <button key={translationKey} className='cybr-btn'>
                {t(translationKey)}<span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">root_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
        )}
    </Col>
  )
}

export default Sidebar