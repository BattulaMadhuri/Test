import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';

function App() {
  return (
    <div>
        {/* <HeaderComponent /> */}
        <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes>
                      <Route path = "/" exact element = {<ListEmployeeComponent/>}></Route>
                      <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
                      <Route path = "/add-employees/:id" element = {<ListEmployeeComponent/>}></Route>
                    </Routes>    
                </div>
              <FooterComponent />
        </Router>
        </div>
        {/* <FooterComponent /> */}
    </div>
  );
}

export default App;

