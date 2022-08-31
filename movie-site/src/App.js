import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from "./components/navbar/navbar"

const App = () => {
    return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
    )
}

export default App;
