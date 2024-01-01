import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Dashboard from './components/Dashboard/Dashboard';
import Mobileplan from './components/Mobileplan/Mobileplan';
import Internetplan from './components/Internetplan/Internetplan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/e-sales/mobileplan" element={<Mobileplan/>}></Route>
          <Route path="/e-sales/internetplan" element={<Internetplan/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
