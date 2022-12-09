import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import Exercice1 from './exercices/Exercice1';
import Exercice2 from './exercices/Exercice2';
import Exercice3 from './exercices/Exercice3';
import Exercice4 from './exercices/Exercice4';
import Exercice5 from './exercices/Exercice5';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Navbar />
      <Routes>
      <Route path="/ex1" element={<Exercice1/>}/>
      <Route path="/ex2" element={<Exercice2/>}/>
      <Route path="/ex3" element={<Exercice3/>}/>
      <Route path="/ex4" element={<Exercice4/>}/>
      <Route path="/ex5" element={<Exercice5/>}/>
      </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
