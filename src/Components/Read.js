import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton, Tooltip } from '@material-ui/core';

const Read = () => {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://61d01906cd2ee50017cc97c4.mockapi.io/fakedata`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])


  // this is for getting data from API to show on page
  const getData = () => {
    axios.get(`https://61d01906cd2ee50017cc97c4.mockapi.io/fakedata`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }


  // this is for fetching data on update page
  const updateData = (data) => {
    let { id, name, company, experience } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Company', company);
    localStorage.setItem('DOJ', experience)
  }


  //this is for delete a data from API
  const onDelete = (id) => {
    axios.delete(`https://61d01906cd2ee50017cc97c4.mockapi.io/fakedata/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <>

      <table className="table table-hover mt-0">
        <thead>
          <tr className='bg-dark text-info'>
            <th>Full Name</th>
            <th>Company</th>
            <th>DOJ</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.company}</td>
                <td>{data.experience}</td>

                <td>
                  <Tooltip title='Update'><IconButton>
                    <Link to='/update'>
                      <EditIcon color='primary'
                        onClick={() => updateData(data)}>
                        Update
                      </EditIcon>
                    </Link>
                  </IconButton>
                  </Tooltip>


                  <Tooltip title='Delete'>
                    <IconButton>
                      <DeleteIcon color='secondary'
                        onClick={() => onDelete(data.id)}>
                        Delete
                      </DeleteIcon>
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            )
          })
          }

        </tbody>
      </table>

    </>
  )
}

export default Read
