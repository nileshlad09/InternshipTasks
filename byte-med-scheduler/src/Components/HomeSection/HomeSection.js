import React from 'react'
import ClinicItem from '../ClinicItem/ClinicItem'
import {clinic} from './../../data/clinic'
import './homesection.css'
const HomeSection = () => {
  return (
    <div className='home-section'>
      <h3>Book an appointment for an in-clinic consultation</h3>
      <p>Find experienced doctors across all specialities</p>
      <div className="clinicSection">
        {
            clinic.map((d)=>(

                <ClinicItem d={d}/>
            ))
        }
      </div>
    </div>
  )
}

export default HomeSection
