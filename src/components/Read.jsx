import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [candidateData, setCandidateData] = useState([]);
  const [search, setSearch] = useState("");

  const getCandidateData = async () => {
    try {
      const resp = await axios.get(
        "https://639c428042e3ad69272c0bdd.mockapi.io/Crud/CRUD"
      );
      setCandidateData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://639c428042e3ad69272c0bdd.mockapi.io/Crud/CRUD/${id}`)
      .then(() => {
        getCandidateData();
      });
  };

  const setDataToLocalStorage = (id,candidate,email,contact) => {
    localStorage.setItem('id',id);
    localStorage.setItem('candidate',candidate);
    localStorage.setItem('email',email);
    localStorage.setItem('contact',contact)
  };

  useEffect(() => {
    getCandidateData();
  }, []);

  return (
    <div className="mt-2">
      <div className="m-2 mb-2 read">
        <h2 className="mt-2 me-4">Read/Fecth</h2>
        <input
          class="form-control me-4"
          type="search"
          placeholder="Search Candidate"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Link to="/">
          <button className="btn btn-primary">backToform</button>
        </Link>
      </div>
      <hr />
      <table class="table border">
        <thead>
          <tr>
            <th scope="col">Ser.No</th>
            <th scope="col">Candidate</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {candidateData
            ?.filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.candidate.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.candidate}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to='/update'>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setDataToLocalStorage(
                            item.id,
                            item.candidate,
                            item.email,
                            item.contact
                          )
                        }
                      >
                        Edit
                      </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
