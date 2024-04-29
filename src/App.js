import './App.css';
import Mainpage from './components/Mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResultPage from './components/SearchResultPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
