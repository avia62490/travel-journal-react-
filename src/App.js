import logo from './logo.svg';
import data from './data.js';
import globe from './globeIcon.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={globe} className="globeIcon" alt="globe" />
        <h4>Travel Journal</h4>
      </header>
    </div>
  );
}

export default App;
