import React from 'react'
import { useParams } from 'react-router-dom'
import { FaIcons } from "react-icons/fa";


const Productdetails = () => {
    const {id} = useParams();
  return (
    <div>
      <h2><FaIcons />      Product Id: {id} </h2>
    </div>
  )
}

export default Productdetails
