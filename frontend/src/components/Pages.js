import Home from './content-components/Home'
import AboutMe from './content-components/AboutMe'
import { Col } from 'react-bootstrap'
import ScrollButton from './ScrollButton'
import { Route, Routes } from 'react-router-dom'
import NonSkills from './content-components/NonSkills'
import Skills from './content-components/Skills'
import Portfolio from './content-components/Portfolio'
import Evaluations from './content-components/Evaluations'
import Fun from './content-components/Fun'


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
                    <ScrollButton />
                </div>
            </Col>
    );
}

export default Pages;