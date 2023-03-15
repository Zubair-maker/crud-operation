import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'

const App = () => {

   return(
    <>
     <div className='container'>
      <h2 className='mt-2'>CRUD OPERATION</h2>
      <BrowserRouter>
        <Routes>
         <Route exact path='/' element={<Create/>}/>
         <Route exact path='/read' element={<Read/>}/>
         <Route exact path='/update' element={<Update/>}/>
        </Routes>  
      </BrowserRouter>

    </div>
    </>
   )
  
   
  
}

export default App

