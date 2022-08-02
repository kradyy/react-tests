import './App.scss';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import DummyData from './components/DummyData'

function App() {
  const cardCount = 4;

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section className="cards">
        <Card {...DummyData()} />
        <Card {...DummyData()} />
        <Card {...DummyData()} />
        <Card {...DummyData()} />
      </section>
    </div>
  );
}

export default App;
