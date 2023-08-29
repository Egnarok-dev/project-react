
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          </Routes> 
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
