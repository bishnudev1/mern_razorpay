import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home.jsx';
import PaymentDone from './screens/PaymentDone.jsx';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Payment-Successful' element={<PaymentDone />} />
      
    </Routes>
  )
}

export default App