import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ButtonStyle = ({cities,currentLoction}) => {

  return (
    <div className="button-container">
      <Button variant="primary current-button-style" onClick={()=>{currentLoction("current")}}>Current</Button>
      {cities.map((item)=>{
       return <button className="button-style" onClick={()=>{currentLoction(item)}}>{item}</button>
      })}
  </div>
  )
}
export default ButtonStyle