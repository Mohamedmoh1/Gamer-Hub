import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import ErrorAuth from './Components/ErrorAuth';
import EditProfil from './Components/EditProfil';
import ListUser from './Components/ListUsers';
import UserDescription from './Components/UserDescription';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import DescriptionProduct from './Components/DescriptionProduct';
import EditProduct from './Components/EditProduct';

function App() {
  return (
    <div>
      <NavAuth/>
      <ErrorAuth/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>    
        <Route path='/EditProfil' element={<EditProfil/>}/>  
        <Route path='/ListUser' element={<ListUser/>}/>    
        <Route path='/UserDescription/:id' element={<UserDescription/>}/>    
        <Route path='/ProductList' element={<ProductList/>}/>  
        <Route path='/AddProduct' element={<AddProduct/>}/>  
        <Route path='/DescriptionProduct/:id' element={<DescriptionProduct/>}/>  
        <Route path='/EditProduct/:id' element={<EditProduct/>}/>  
      </Routes>
    </div>
  );
}

export default App;