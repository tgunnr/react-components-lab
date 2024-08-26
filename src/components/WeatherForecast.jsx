import './WeatherForecast.css'

const WeatherForecast = (props) => {
  const { img, imgAlt, conditions, time } = props
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions: {conditions} </span>current weather conditions</p>
      <p><span>time: {time} </span>time of day</p>
    </div>
  )
}

export default WeatherForecast