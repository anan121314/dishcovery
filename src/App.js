import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <Router basename="/dishcovery">
    <Routes>
      <Route path="/" element={<Home />} />    
    </Routes>
  </Router>
  );
}

export default App;
