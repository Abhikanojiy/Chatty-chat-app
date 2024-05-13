import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import ChatProvider from './components/Context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <ChatProvider>
      
      
      <ChakraProvider> 
      
      <App/>
      
      </ChakraProvider>
      
    
    </ChatProvider>
    
    
    
    
  </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();
