import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './components/signup/signup';
import Navbar from './components/nav/nav';

function App() {
  return (
    <div className="container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
