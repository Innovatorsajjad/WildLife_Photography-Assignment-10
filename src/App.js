import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services'
import AboutMe from './components/About-me/AboutMe'
import Login from './components/Log_In/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='service' element={<Services/>}></Route>
        <Route path='about_me' element={<AboutMe/>}></Route>
        
      </Routes>
       
      
    </div>
  );
}

export default App;
