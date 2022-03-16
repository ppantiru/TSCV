import Home from './content-components/Home'
import AboutMe from './content-components/AboutMe'
import { Col } from 'react-bootstrap'
import ScrollButton from './ScrollButton'
import { Route, Routes } from 'react-router-dom'


function Pages(){

    return (
            <Col lg='10' xs='12' className='MainBody-outer'>
                <div id='Mainbody' >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/about-me' element={<AboutMe />} />
                    </Routes>
                    <ScrollButton />
                </div>
            </Col>
    );
}

export default Pages;