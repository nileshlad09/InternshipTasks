import React from 'react'
import './clinicitem.css'
import { useNavigate } from 'react-router-dom';
const ClinicItem = (props) => {
  const { d } =props;
  const navigate = useNavigate();


  return (
    <div className='clinic-item' onClick={()=>{
      navigate(`/clinic/${d.heading}`)
    }}>
      <div className="clinic-image">
            <img src={d.image} alt="image" srcset="" />
      </div>
      <div className="clinic-detail">
        <div className="clinic-heading">{d.heading}</div>
        <p className="clinic-subheading">{d.subheading}</p>
      </div>
    </div>
  )
}

export default ClinicItem
