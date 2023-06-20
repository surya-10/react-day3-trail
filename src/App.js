import logo from './logo.svg';
import './App.css';
import Base from './compenents/base';
import Home from './compenents/home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './compenents/dashboard';
import Buttons from './compenents/buttons';
import Cards from './compenents/cards';
import Colors from './compenents/colors';
import Border from './compenents/border';
import Login from './compenents/loginPage';
import Register from './compenents/registerPage';
import Reset from './compenents/forgotPassword';
import Error from './compenents/error';
import BlankPage from './compenents/blank';
import Animation from './compenents/animation';
import Others from './compenents/others';
import Table from './compenents/table';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/buttons' element={<Buttons/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/colors' element={<Colors/>}/>
        <Route path='/borders' element={<Border/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/nopage' element={<Error/>}/>
        <Route path='/blank' element={<BlankPage/>}/>
        <Route path='/animation' element={<Animation/>}/>
        <Route path='/others' element={<Others/>}/>
        <Route path='/table' element={<Table/>}/>
      </Routes>
    </div>
  );
}

export default App;
