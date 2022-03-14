import './App.css';
import {Container, Col, Tab, Row} from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import Pages from './components/Pages'
import TopMenu from './components/TopMenu'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
