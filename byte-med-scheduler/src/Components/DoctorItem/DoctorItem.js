import React from 'react'
import './doctoritem.css'
import { useParams } from 'react-router-dom'
const DoctorItem = ({data}) => {

  const params = useParams();
  return (
    <div className='doctoritem'>
      <div className="doc-porfile">
        <img src={`https://xsgames.co/randomusers/assets/avatars/${data.gender}/${data.experience}.jpg`} alt="" />
      </div>
      <div className="doc-detail">
        <h3 className="doc-name">{data.name}</h3>
        <p className="doc-profician">{params.doctype}</p>
        <p className='doc-experience'>{data.experience} years experience overall</p>

        <div className='address'>
        <p className='clinic-addr'>
          <b>{data.city} - </b>
          {data.address}
        </p>
        <p className='doc-fee'>Rs.200 Consultation fee at clinic</p>
        </div>

        <div className='doc-rating-sec'> 
          <span> <i class="fa-solid fa-thumbs-up"></i> 100%</span>
          <a href='#'>{data.no_of_review} Patient Stories</a>
        </div>

      </div>
      <div className="bool-appointment-sec">
        <p>
        <i class="fa-solid fa-calendar-days"></i>
         Available Today</p>
        <button>
          <span>Book Appointment</span>
          <p>No Booking Fee</p>
        </button>
      </div>
    </div>
  )
}

export default DoctorItem
