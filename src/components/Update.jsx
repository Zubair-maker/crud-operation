import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0);
    const [candidate, setCandidate] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState(0);
    
    const navigate = useNavigate();
    const handleUpdate = async(e) =>{
       e.preventDefault();
       await axios.put(`https://639c428042e3ad69272c0bdd.mockapi.io/Crud/CRUD/${id}`, {
          candidate: candidate,
          email: email,
          contact: contact
       }).then(()=>{
           navigate('/read')
       })
    }

    useEffect(()=>{
      setId(localStorage.getItem('id'));
      setCandidate(localStorage.getItem('candidate'));
      setEmail(localStorage.getItem('email'));
      setContact(localStorage.getItem('contact'))
    },[]);

  return (
    <div className="col-6">
      <div className="m-2 creat">
        <h2 className="mt-2">Create/Post</h2>
        <Link to="/read">
          <button className="btn btn-primary">ShowCandidate</button>
        </Link>
      </div>
      <form className="form">
        <div className="mb-3">
          <label className="form-label">Candidate</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setCandidate(e.target.value)}
            value={candidate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contant:</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Submit
        </button>
         <Link to='/read'>
          <button className="btn btn-success mt-8 mx-2">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
