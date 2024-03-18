import { useState } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreatedBook = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    publisher: "",
    name: "",
    date: "",
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/create", values)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    navigate('/')
  }
  return (
    <>
    <div className="d-flex justify-content-center mt-4 fs-1 fw-bold">Add a Book</div>
    <div className="d-flex justify-content-center mt-3">
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label className="form-label">Publisher: </label>
          <input type="text" 
          className="form-control" 
          id="publisher" 
          placeholder="enter publisher name" 
          name="publisher"
          onChange={(e)=>setValues({...values, publisher: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Name: </label>
          <input type="text" 
          className="form-control" 
          placeholder="enter book name" 
          name="name"
          onChange={(e)=>setValues({...values, name: e.target.value})}
          />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label">Publish Date: </label>
          <input type="date" 
          className="form-control" 
          name="date"
          onChange={(e)=>setValues({...values, date: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary"> Submit</button>
      </form>
    </div>
    </>
  )
}

export default CreatedBook