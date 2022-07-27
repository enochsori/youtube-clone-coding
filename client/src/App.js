import './App.css';
import Header from './components/Header';
import Items from './components/Items';

function App() {
  return (
    <div className='wrapper'>
      <div className='layout'>
        <Header />
        <Items />
      </div>
    </div>
  );
}

export default App;
