import './App.css';
import {Routes,Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Resume from './components/Resume';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container container-fluid">
      <div className="row flex-nowrap">
        
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={ <Home/> } exact></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/mywork" element={<MyWork/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
