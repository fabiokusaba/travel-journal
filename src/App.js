import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data';

function App() {
  const travels = data.map(item => (
    <Card 
      key={item.id}
      {...item}
    />
  ))
  return (
    <div className="App">
      <Navbar />
      {travels}
    </div>
  );
}

export default App;
