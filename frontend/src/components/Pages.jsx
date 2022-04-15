import { Col } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import BackToTop from './BackToTop'
import Skills from '../pages/Skills'
import NonSkills from '../pages/NonSkills'
import Portfolio from '../pages/Portfolio'
import Evaluations from '../pages/Evaluations'
import Fun from '../pages/Fun'


function Pages(){

    return (
            <Col lg='10' xs='12' className='MainBody-outer'>
                <div id='Mainbody' >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/about-me' element={<AboutMe />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/non-skills' element={<NonSkills />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/evaluations' element={<Evaluations />} />
                        <Route path='/fun' element={<Fun />} />
                    </Routes>
                    <BackToTop />
                </div>
            </Col>
    );
}

export default Pages;