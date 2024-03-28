import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ShopContaxtProvider from './components/Context/ShopContaxt';
ReactDOM.render(
    
    <BrowserRouter><ShopContaxtProvider><App/> </ShopContaxtProvider>
    </BrowserRouter>
,
document.getElementById('root'));
