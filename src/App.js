import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
