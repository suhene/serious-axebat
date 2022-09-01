import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from "./components/navbar/navbar"
import { Cart } from './components/cart/cart';


const App = () => {
    return(
    <Router>
      <div className='main'>
        <Navbar/>
        <Cart/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
    )
}

export default App;
