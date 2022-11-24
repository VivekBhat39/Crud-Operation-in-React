import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom";



function Create() {
    let { id } = useParams();
    const [data, setData] = useState({
        name: "",
        email: ""
    });
    const navigate = useNavigate();

    function saveData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (id !== undefined) {
            axios.get("https://636fbce4f2ed5cb047e426ee.mockapi.io/api/crud/" + id)
                .then((res) => {
                    setData({ name: res.data.name, email: res.data.email })
                })
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === undefined) {
            axios.post("https://636fbce4f2ed5cb047e426ee.mockapi.io/api/crud", data)
                .then((res) => {
                    console.log(res.data);
                    alert("Data Submited successfully")
                    navigate("/read")
                });
        }
        else {
            axios.put("https://636fbce4f2ed5cb047e426ee.mockapi.io/api/crud/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    alert("Data Submited successfully")
                    navigate("/read")
                })
        }
    };

    return (
        <div>
            <div className='row mt-4 mb-4'>
                <h2 className='col-lg-10'>Crud Operation</h2>
                <div className='col-lg-2'>
                    <Link to="/read">
                        <button className='btn btn-primary'>List</button>
                    </Link>
                </div>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" name='name' value={data.name} onChange={(e) => saveData(e)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' value={data.email} onChange={(e) => saveData(e)} className="form-control" aria-describedby="emailHelp" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create;
