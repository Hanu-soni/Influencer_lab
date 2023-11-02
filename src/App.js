import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Navbar} from './Pages/Navbar/Navbar.jsx';
import {Home} from './Pages/Home/Home.jsx';
import {Teacher} from './Pages/Teacher/Teacher.jsx';
import {Marks} from './Pages/Marks/Marks.jsx';
import {Student} from './Pages/Student/';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Student" element={<Student/>}/>
                <Route path="/Teacher" element={<Teacher/>}/>
                <Route path="/Marks" element={<Marks/>}/>

      </Routes>
    </div>
  );
}

export default App;
