import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from './Books';
import CreatedBook from './CreatedBook';
import UpdateBook from "./UpdateBook"
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/create' element={<CreatedBook/>}/>
        <Route path='/update' element={<UpdateBook/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
