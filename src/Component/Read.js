import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export const Read = () => {

  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://636fbce4f2ed5cb047e426ee.mockapi.io/api/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(_id) {
    axios
      .delete(`https://636fbce4f2ed5cb047e426ee.mockapi.io/api/crud/${_id}`)
      .then(() => {
        alert("Record Deleted Successfully")
        getData()
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-2">
            <Link to="/">
            <button className='btn btn-primary'>Home</button>
            </Link>
          </div>
          <div className="col-lg-8">
            <h2 className='text-center'>Read operation</h2>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((eachData, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to={"/" + eachData.id}>
                      <button className='btn btn-success'>Edit</button>
                    </Link>
                  </td>
                  <td><button onClick={() => handleDelete(eachData.id)} className='btn btn-danger'>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  )
}
