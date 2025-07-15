import { useState } from 'react'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Layout from './Components/Layout';
import HomeTeachers from './Student/HomeTeachers';
import BatchTeachers from './Student/BatchTeachers';
import Result from './Student/Result';
import Exam from './Student/Exam';
import TeachersRouting from './Student/TeachersRouting';
import TeachersPayment from './Student/TeachersPayment';
import TeachersPresence from './Student/TeachersPresence';
function App() {

  return (
    <>

    <BrowserRouter>
    
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/layout" element={<Layout/>} >
      
          
        
      </Route>


          <Route path="/home-teachers" element={<HomeTeachers/>} />
          <Route path="/batch-teachers" element={<BatchTeachers/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/exam" element={<Exam/>} />
          <Route path="/routing" element={<TeachersRouting/>} />
          <Route path="/payment" element={<TeachersPayment/>} />
          <Route path="/presence" element={ <TeachersPresence/>  } />
    
    </Routes>
 
    </BrowserRouter>
      
    </>
  )
}

export default App
