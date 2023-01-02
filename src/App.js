import data from './data.js';
import globe from './globeIcon.svg'
import Card from './Card.js'
import './App.css';

function App() {
    const cards = data.map(item => {
      return(
        <Card 
            key={item.id}
            item={item}
        />
      )
    })
    return (
        <div className="App">
            <header className="App-header">
              <img src={globe} className="globeIcon" alt="globe" />
              <h4>Travel Journal</h4>
            </header>
            <section className="cards_section">
                {cards}
            </section>
        </div>
    );
}

export default App;
