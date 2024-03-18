import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    publisher: "",
    name: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/getrecord/${id}`)
      .then((res) =>
        setValues({
          publisher: res.data.publisher,
          name: res.data.name,
          date: res.data.date,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/update/${id}`, values)
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update Book</h1>
      <div className="d-flex justify-content-center mt-3">
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label className="form-label">Publisher: </label>
            <input
              type="text"
              className="form-control"
              id="publisher"
              placeholder="enter publisher name"
              value={values.publisher || ""}
              name="publisher"
              onChange={(e) =>
                setValues({ ...values, publisher: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Book Name: </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter book name"
              name="name"
              value={values.name  || ""}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label">Publish Date: </label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={values.date || ""}
              onChange={(e) => setValues({ ...values, date: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;