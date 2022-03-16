import React, { useRef } from 'react'
import Sidebar from './Sidebar'
import Pages from './Pages'
import {Container, Tab, Row} from 'react-bootstrap'
import { BrowserRouter as Router} from 'react-router-dom'

function Layout() {
    const width = window.innerWidth;
    const breakpoint = 991;

    const contentRef = useRef()
    function scrollToContent () {
        contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
  return (
    <Container id='MainbodyContainer' fluid>
        <Tab.Container id="left-tabs" defaultActiveKey="aboutsite">
            <Row>
                <Router>
                    <Sidebar width={width} breakpoint={breakpoint} scrollToContent={scrollToContent} />
                    {width < breakpoint ? <div ref={contentRef}/> : null}
                    <Pages />
                </Router>
            </Row>
        </Tab.Container>
    </Container>
  )
}

export default Layout