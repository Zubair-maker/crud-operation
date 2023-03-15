import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register from "../asset/images/register.png";

const Create = () => {
  const [candidate, setCandidate] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!candidate) {
      tempErrors.candidate = "candidate is required";
    }
    if (!email.includes("@")) {
      tempErrors.email = "Invalid email address";
    }
    if (!contact) {
      tempErrors.contact = "Contact is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (validate()) {
         await axios.post(
        "https://639c428042e3ad69272c0bdd.mockapi.io/Crud/CRUD",
        {
          candidate: candidate,
          email: email,
          contact: contact,
        }
      );
      navigate("/read");
    } else {
      console.error("Invalid Form");
    }
  };

  return (
    <div className="d-flex">
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
              onChange={(e) => setCandidate(e.target.value)}
            />
            {errors.candidate && <p>{errors.candidate}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
             
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Contant:</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setContact(e.target.value)}
              max={10}
            />
            {errors.contact && <p>{errors.contact}</p>}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="col-6">
        <img src={register} alt="image" width="600px" />
      </div>
    </div>
  );
};

export default Create;
