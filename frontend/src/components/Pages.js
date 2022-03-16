// import { useTranslation } from "react-i18next";
import AboutSite from './content-components/AboutSite'
import AboutMe from './content-components/AboutMe'
import { Col } from 'react-bootstrap'
import ScrollButton from './ScrollButton'
import { Route, Routes } from 'react-router-dom'


function Pages(){
    // const { t } = useTranslation();

    return (
            <Col lg='10' xs='12' className='MainBody-outer'>
                <div id='Mainbody' >
                    <Routes>
                        <Route path='/' element={<AboutSite />} />
                        <Route path='/about-site' element={<AboutSite />} />
                        <Route path='/about-me' element={<AboutMe />} />
                    </Routes>
                    <ScrollButton />
                </div>
            </Col>
    );
}

export default Pages;