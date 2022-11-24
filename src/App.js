import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Component/Create';
import { Read } from './Component/Read';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}/>
        <Route exact path="/:id" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/crud/:id" element={<Read />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
