import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Read from './Read';
import { Link } from 'react-router-dom';


const AddUser = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [experience, setExperience] = useState("");


    const postData = (event) => {
        event.preventDefault();
        console.log("Post data", name + " " + company + " " + experience);

        var body = {
            name,
            company,
            experience
        };
       axios.post(`https://61d01906cd2ee50017cc97c4.mockapi.io/fakedata`,body)
        .then(response => {
           console.log("response", response);
         })
         .catch(error => {
            console.log("Error",error)
         })

         

    }

    return (
        <>
            <Link className='btn btn-hover btn-danger m-lg-2' to="/login">LogOut</Link>

            <Link className='btn btn-hover btn-primary m-lg-2' to="/users">Save</Link>
            <div className='container'>
                <div className='row'>

                    <div className='col-8 bg-light'>
                        <Read />
                    </div>

                    <div className='col-4'>
                        <form onSubmit={postData} >

                            <label htmlFor="user id"></label>
                            <input type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Full Name'
                                required
                                autoComplete='off' /><br /><br />
                            <input type="text"
                                placeholder='Company'
                                required
                                onChange={(e) => setCompany(e.target.value)}
                                autoComplete='off' /><br /><br />

                            <input type="date"
                                required
                                onChange={(e) => setExperience(e.target.value)}
                                autoComplete='off' /><br /><br />

                            <button className='btn btn-hover btn-dark text-info'
                                type='submit'>Add User</button>


                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddUser
