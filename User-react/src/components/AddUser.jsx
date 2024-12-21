import React, { useState } from 'react'
import Swal from 'sweetalert2';

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user)

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(() => {
      Swal.fire({
        title: "User Added Successfully!",
        text: "You clicked the button!",
        icon: "success"
      })
    }
    )
  }

  return (
    <div>
      <h1>Add New User:</h1>

      <form>
        <label htmlFor="name">Enter Name</label> <br />
        <input type="text" name="name" onChange={handleChange} /> <br /> <br />

        <label htmlFor="email">Enter email</label> <br />
        <input type="text" name="email" onChange={handleChange} /> <br /> <br />

        <label htmlFor="phone">Enter phone</label> <br />
        <input type="text" name="phone" onChange={handleChange} /> <br /> <br />

        <input type="submit" value="Add user" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default AddUser