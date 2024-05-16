import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';

function App() {
  return (
    <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          {/* <Route path='/All-news' element={<AllNews></AllNews>}></Route> */}
          {/* <Route path='/weather' element={<Weather/>}></Route> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
