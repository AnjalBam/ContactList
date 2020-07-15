import React from 'react';
import { Link } from 'react-router-dom'

const Person =({contact, OnClickHanlder}) =>{
  const  {cell, email, name: {last, first}, fullname, picture: {large, medium, thumbnail}} = contact;
  return(
    <Link to= {`/Contactinfo/${fullname}`}  className='col-md-4 my-3'>
        <div className='card d-flex flex-row align-items-center p-3'>
          <img style={{width:'70px', height: '70px', borderRadius:'50%', objectFit: 'cover'}} className='card-img-top' src={large} alt={`${first} ${last }`}/>
        <div className='content ml-4'>
          <h6>Name: {fullname} </h6>
          <p>Number: {cell} </p>
        </div>
        </div>
    </Link>
  )
}

export default Person;
