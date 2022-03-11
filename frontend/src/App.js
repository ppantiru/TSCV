import './App.css';
import TopMenu from './components/TopMenu';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Mainbody />
        {/* <header className="App-header">
          <TopMenu />
        </header>
        <div className='AppBody'>
          <Mainbody />
        </div> */}
    </div>
  );
}

export default App;
