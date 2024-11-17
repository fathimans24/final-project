import React from 'react';
import Header from './componet/header/Header.jsx';
import Search from './componet/search/Search.jsx';
import './App.css';
import InfoSection from './componet/info/InfoSection.jsx';
import Articles from './componet/explore/Articles.jsx';
import Getstart from './componet/getstart/Getstart.jsx';
import Footer from './componet/footer/Footer.jsx'; 
import Video from './componet/video/Video.jsx';
import Login from './componet/pages/Login.jsx';
import Clientsign from './componet/pages/client/ClientSign.jsx';
import ClientCard from './componet/pages/Find.jsx';
import FreeDash from './componet/pages/FreeDash.jsx';
import AdminDashboard from './componet/pages/AdminDash.jsx';
import { Routes, Route } from 'react-router-dom'; 
import MainAccountType  from './componet/pages/MainAcount.jsx';
import Register from './componet/pages/Register.jsx'
import ClientAcount from './componet//pages/clientAcount/ClientAcount.jsx';
import About from './componet/pages/About.jsx'
import Signup from './componet/pages/Signup.jsx';
import Solutions from './componet/pages/Solutions.jsx';

function Layout({ children }) {
  return (
    <div className="App">
      <Search />
      <br />
      {children} 
      <Articles />
      <br />
      <Video />
      <br />
    </div>
  );
}

// Main App component with routes
function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path='/solution' element={<Solutions/>}/>
        <Route path='/freelancer' element={<FreeDash />} />
        <Route path="/findjobs" element={<ClientCard />} />
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Layout><InfoSection /></Layout>} />
        <Route path="/getstart" element={<Getstart />} />
        <Route path='/client' element={<Clientsign />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<MainAccountType />} />
        <Route path="/register" element={<Register />} />
        <Route path='/about'element={<About/>}/>
        <Route path="/clientacount" element={<ClientAcount/>} />
        <Route path='/about'element={<About/>}/>
        <Route path='/sign' element={<Signup/>}/>
        {/* <Route path='/home' element={<Search/>}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
