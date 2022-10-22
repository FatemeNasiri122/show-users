import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import {UsersProvider} from "./components/context/UsersContext";


function App() {
  return (
      <UsersProvider>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<NotFound />} />
              </Routes>
          </Router>
      </UsersProvider>

  );
}

export default App;
