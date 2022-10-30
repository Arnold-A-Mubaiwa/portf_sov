import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Importing page components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// adding bootstrap css and js
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

function App() {
  return (
    <div id='home' className="App container-fluid">
      <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
