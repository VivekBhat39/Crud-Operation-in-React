import React from 'react'

export default function Update() {
  return (
    <div>
        <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text"
                    // onChange={(e) => setName(e.target.value)}
                    className="form-control" />
                    {/* <input type="text" name='name' value={data.name} onChange={(e) => {saveData(e)}} className="form-control" /> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="form-control" aria-describedby="emailHelp" />
                    {/* <input type="email" name='email' value={data.email} onChange={(e) => {saveData(e)}} className="form-control" aria-describedby="emailHelp" /> */}
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit"
                // onClick={handleSubmit}
                className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}
