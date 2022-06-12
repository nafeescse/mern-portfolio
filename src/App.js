import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import Project from './components/Project';
import Details from './components/Details';

function App() {
  return (
    <div className="">
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:Id' element={<Details></Details>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
