import React from 'react'
import{useState,useEffect}from"react"
import WeatherBox from "./component/WeatherBox"
import ButtonStyle from "./component/ButtonSytle"
import "./App.css"
import ClipLoader from "react-spinners/ClipLoader"

//1.앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//2.현재 도시의 날씨 정보에는 도시, 섭씨, 화씨 날씨 정보가 들어감.
//3.5개의 버튼이 있다.(1개는 현재의 위치, 4개는 다른 위치)
//4.도시 버튼을 누르면 도시 별 날씨가 보임.
//5.현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6.데이터 들고 오는 동안 로딩 스피너가 돈다.
const App = () => {

const [weather,setWeather]=useState(null);
const cities=["Seoul","JEJU","Italia","Hawai"]
const [city,setCity]=useState("")
const [loading,setLoading]=useState(false)
const [clickevent,setClickEvent]=useState("")
const getCurrentLocation=()=>{
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
   console.log("현재 위치",lat,long)//위치정보를 알려줌.
   getCurrentLocationWeather(lat,long)
  
  });
}
//많이 (여러모로) 쓸 정보 정리해두기
const getCurrentLocationWeather=async(lat,long)=>{
  let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5187ebbfd48666717271535c3df7f946&units=metric`
  setLoading(true)
  let response = await fetch(url)
  let data = await response.json()
  console.log("data",data)
  setWeather(data)
  setLoading(false)
}



const getAnoterCityWeather=async()=>{
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5187ebbfd48666717271535c3df7f946&units=metric`
  setLoading(true)
  let waitapi =await fetch(url)
  let data = await waitapi.json()
  setWeather(data)
 
  setLoading(false)
 
 
}
useEffect(()=>{
  if(city==""){ getCurrentLocation()}
  else {getAnoterCityWeather()}
},[city])

const currentLoction=(item)=>{
  if (item === "current") {
    getCurrentLocation();
    setClickEvent("current")

  } else {
    setCity(item);
    setClickEvent(item)
  }
}


  return (
    <div >
    {loading ? (<div className="bigContainer"><ClipLoader color ="#f88c6b" loading={loading} size={70}/></div>): 
     (<div  className="bigContainer">
    <div>
     <WeatherBox weather={weather}/>
    </div>
    <ButtonStyle cities={cities}  currentLoction={currentLoction} clickevent={clickevent}/>
  </div>)
  }
  </div>
   
    
  )
}

export default App