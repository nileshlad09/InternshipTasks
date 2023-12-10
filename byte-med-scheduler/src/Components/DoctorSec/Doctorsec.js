import React from 'react'
import DoctorItem from '../DoctorItem/DoctorItem';
import { useParams } from 'react-router-dom';
import {dentistData} from './../../data/dentistData'
import './doctorsec.css'

const Doctorsec = () => {
  const params = useParams();
  return (
    <div className='doctor-sec'>
      <h1>{params.doctype}</h1>
      <div className='listofDoc'>
        {dentistData.map((data)=>(
          <DoctorItem key={data._id} data={data}/>
        ))}
      </div>
    </div>
  )
}

export default Doctorsec;
