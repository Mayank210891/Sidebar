import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { About } from './pages/About';
import { Analytics } from './pages/Analytics';
import { Dashboard } from './pages/Dashboard';
import { Comment } from './pages/Comment';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';

function App() {
  return (
    <div>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/comment' element={<Comment/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/productList' element={<ProductList/>}/>
    </Routes>
    </Sidebar>
    </div>
  );
}

export default App;
