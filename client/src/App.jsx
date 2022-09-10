// 1. Libraries
import styles from './App.module.css';
// 2. Components
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/search_header/Header';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Items from './components/video_items/Items';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Items />} />
          <Route exact path="/detail/:itemId" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
