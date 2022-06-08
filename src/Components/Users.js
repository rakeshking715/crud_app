import React from 'react'
import { Link } from 'react-router-dom'
import Read from './Read'

const Users = () => {
    return (
        <>

            <Link className='btn btn-hover btn-danger m-lg-2' to="/login">LogOut</Link>

            <Link className='btn btn-hover btn-primary m-lg-2' to="/add">Add User</Link>

            <div className='m-lg-2-auto m-lg-2'>
                <Read />
            </div>

        </>
    )
}

export default Users
