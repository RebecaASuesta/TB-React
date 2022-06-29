import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;