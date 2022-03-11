import React from 'react'
import { Nav, Col, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
    const { t } = useTranslation();
  return (
    <Col className='sidebar-inner' sm='3' lg='2'>
        <nav className="flex-column">
            {/* <Nav.Item>
                <Nav.Link eventKey="aboutsite">{t('About site')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="aboutme">{t('About me')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="philosophies">{t('My philosophies')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="skills">{t('skills')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="nonskills">{t('non-skills')}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="evaluations">{t('evaluations')}</Nav.Link>
            </Nav.Item> */}
            <ul>
                <li>{t('About site')}</li>
                <li>{t('About me')}</li>
                <li>{t('My philosophies')}</li>
                <li>{t('skills')}</li>
                <li>{t('non-skills')}</li>
                <li>{t('evaluations')}</li>
            </ul>
        </nav>
    </Col>
  )
}

export default Sidebar