import './App.css'
import Layout from './components/Layout'
import TopMenu from './components/TopMenu'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu />
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
