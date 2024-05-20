import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import EditUser from './Components/EditUser';
import { Property } from './Components/Properties';
import PropertyDetails from './Components/PropertyDetails';

function App() {
  return (
    <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          
          <Route path='/sign-up' element={<SignUp/>}></Route>
          <Route path='/editUser' element={<EditUser/>}></Route>
          <Route path='/properties' element={<Property />}></Route>
          <Route exact path="/properties/:id" element={<PropertyDetails />} />
          {/* <Route path='/All-news' element={<AllNews></AllNews>}></Route> */}
          {/* <Route path='/weather' element={<Weather/>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
