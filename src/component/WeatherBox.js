import React from 'react'

const WeatherBox = ({weather}) => {
    let Fahrenheit =((weather?.main.temp * 1.8) + 32).toFixed(3);
//가끔씩 나라에 따라 이상하게 소수점이 길게 나타낼때가 있어요.ㅠ
  return (
    <div className="weatherBox-container">
        <div className="city-name">{weather?.name}</div>
        <div className="cdo-box">
            <span className="do-style">{weather?.main.temp}C</span>
            <span className="do-style">/</span>
            <span className="do-style">{Fahrenheit}</span>
        </div>
        <div className="description-style">{weather&&weather.weather[0].description}</div>
    </div>
  )
}

export default WeatherBox