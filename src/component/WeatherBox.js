import React from 'react';

const WeatherBox = ({ weather }) => {
  // `weather`와 `weather.main`이 정의되어 있는지 확인하고, 정의되어 있으면 `temp` 값을 가져옵니다.
  const tempCelsius = weather?.main?.temp;
  // `tempCelsius`가 정의되어 있으면 섭씨 온도를 화씨 온도로 변환합니다. 소수점 둘째 자리까지 표시합니다.
  const tempFahrenheit = tempCelsius ? ((tempCelsius * 1.8) + 32).toFixed(2) : null;

  // `weather`가 정의되지 않았거나 `weather.main`이 정의되지 않은 경우 기본값을 설정합니다.
  const cityName = weather?.name || 'Unknown City'; // 도시 이름을 가져오거나, 정의되지 않은 경우 'Unknown City'를 사용합니다.
  const description = weather?.weather?.[0]?.description || 'No description available'; // 날씨 설명을 가져오거나, 정의되지 않은 경우 'No description available'을 사용합니다.
  
  return (
    <div className="weatherBox-container">
      <div className="city-name">{cityName}</div>
      <div className="cdo-box">
        {/* `tempCelsius`가 정의되어 있는 경우 섭씨 온도를 표시하고, 그렇지 않으면 'N/A'를 표시합니다. */}
        <span className="do-style">{tempCelsius !== undefined ? `${tempCelsius}C` : 'N/A'}</span>
        <span className="do-style">/</span>
        {/* `tempFahrenheit`가 null이 아닌 경우 화씨 온도를 표시하고, 그렇지 않으면 'N/A'를 표시합니다. */}
        <span className="do-style">{tempFahrenheit !== null ? `${tempFahrenheit}F` : 'N/A'}</span>
      </div>
      <div className="description-style">{description}</div>
    </div>
  );
};
export default WeatherBox;
