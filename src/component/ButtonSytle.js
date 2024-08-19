import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const ButtonStyle = ({cities,currentLoction,clickevent}) => {

  return (
    <div className="button-container">
      <Button variant={`${clickevent=="current"?"secondary current-button-style":"primary current-button-style"}`} onClick={()=>{currentLoction("current")}}>Current</Button>
      {cities.map((item)=>{
       return <button className={`${clickevent!=item?"button-style":"warning"} `}onClick={()=>{currentLoction(item)}}>{item}</button>
      })}
  </div>
  )
}
export default ButtonStyle