import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Home() {
    const navigate=useNavigate();

    const [data,setData]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
        fetch("http://localhost:3000/user")
        .then((data)=>data.json())
        .then((res)=>setData(res))
    }

    const deletePopUp=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              handleDelete(id)
              fetchData()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    const handleDelete=(id)=>{
        fetch(`http://localhost:3000/user/${id}`,{method : "DELETE"})
        .then(fetchData())
    }

    return (
        <div>
            <div className="flx">
                <h1>User Details</h1>
                <button onClick={()=>{navigate("/add-user")}}>
                    Add New User
                </button>
            </div>

            {/* table>(thead>tr>th*4)+(tbody>tr>td*4)*3  */}
            <table>
                <thead>
                    <tr>
                        <th>si/no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <th>
                                    <button>Edit</button>
                                    <button onClick={() => deletePopUp(data.id)}>Delete</button>
                                    </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home