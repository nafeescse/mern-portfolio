import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import Details from './components/Details';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:Id' element={<Details></Details>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
