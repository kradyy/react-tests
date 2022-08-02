import './App.scss';
import Header from './components/Header'
import Card from './components/Card'
import locations from './data'

function App() {
  return (
    <div className="App">
      <Header />

      <section className="cards">
        {locations.map(location => {
          return <Card {...location} />
        })}
      </section>
    </div>
  );
}

export default App;
