import './App.css';
import {Container, Col, Tab, Row} from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import Pages from './components/Pages'
import TopMenu from './components/TopMenu'
import MobleMenu from './components/MobileMenu';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Container id='MainbodyContainer' fluid>
          <Tab.Container id="left-tabs" defaultActiveKey="aboutsite">
              <Row>
                  <Col lg='2' className="d-none d-lg-block sidebar" >
                      <Sidebar />
                  </Col>
                  <Col xs='12' className='d-lg-none mobile-outer'>
                    <MobleMenu  />
                  </Col>
                  <Col lg='10' xs='12' className='MainBody-outer'>
                      <Pages />
                  </Col>
              </Row>
          </Tab.Container>
      </Container>
    </div>
  );
}

export default App;
