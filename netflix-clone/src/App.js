import './App.css';
import { Routes,Route } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Routes>
      <Route path='/' element={<Home />}>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
