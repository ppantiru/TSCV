import React from 'react'
import {Container, Nav, Col, Tab, Row} from 'react-bootstrap'
import Sidebar from './Sidebar'
import Pages from './Pages'
import TopMenu from './TopMenu'

function Layout() {
  return (
    <>
    <TopMenu />
    <Container id='MainbodyContainer' fluid>
        <Tab.Container id="left-tabs" defaultActiveKey="aboutsite">
            <Row>
                <Col sm='3' lg='2' className="d-none d-md-block sidebar" >
                    <Sidebar />
                </Col>
                <Col sm='9' lg='10' xs='12'>
                    <Pages />
                </Col>
            </Row>
        </Tab.Container>
    </Container>
    </>
  )
}

export default Layout