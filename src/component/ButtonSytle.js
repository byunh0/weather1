import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ButtonStyle = ({cities,setCity}) => {

  return (
    <div className="button-container">
      <Button variant="primary current-button-style">Current</Button>
      {cities.map((item)=>{
       return <button className="button-style" onClick={()=>{setCity(item)}}>{item}</button>
      })}
  </div>
  )
}

export default ButtonStyle