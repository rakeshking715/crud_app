import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [experience, setExperince] = useState(false);
    const [id, setID] = useState(null);

    // with the help of this we are getting data from API on update page BY read page
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setCompany(localStorage.getItem('Company'));
        setExperince(localStorage.getItem('DOJ'))
    }, []);


    // This is for updating the data on API
    const updateAPIData = () => {
        axios.put(`https://61d01906cd2ee50017cc97c4.mockapi.io/fakedata/${id}`, {
            name,
            company,
            experience
        })
    }

    return (
        <>
            <div className='text-center mt-5 bg-light p-5 position-absolute'>
                <input placeholder='Name'
                    value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

                <input placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)} /><br /><br />

                <input type='date' placeholder='DOJ' value={experience} onChange={(e) => setExperince(e.target.value)} /><br /><br />

                {/* <Button onClick={updateAPIData}> Update </Button> */}

                <Link className='btn btn-primary' to='/users' onClick={updateAPIData}> UpDate </Link>

            </div>
        </>
    )
}