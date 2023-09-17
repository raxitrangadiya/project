import './App.css';
// import Navbar from './Navbar.jsx'
import MainRouter from './Common Component/MainRoouter.jsx'
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
    <>
    <RouterProvider router={MainRouter}/>
    </>
  );
}

export default App;
