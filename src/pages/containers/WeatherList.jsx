import React from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";

 const WeatherList = (props) => {

    const {weather} = props;
    console.log(weather)

    const renderWeather = (cityData) => {
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const icon0 = cityData.list.map((data,index) => data.weather[index])
       
        return (
          <tr key={cityData?.city?.name}>
            <td>{cityData?.city?.name}</td>
            <td>
              <Sparklines height={50} width={100} data={temps}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </td>
            <td><Sparklines height={50} width={100} data={pressure}>
                <SparklinesLine color="blue" />
              </Sparklines>
              </td>
            <td>
              <Sparklines height={50} width={100} data={humidity}>
                <SparklinesLine color="red" />
              </Sparklines>
            </td>
            <td>
              {/* <img src={`http://openweathermap.org/img/wn/${icon0}@2x.png` } alt="icon"/> */}
            </td>
          </tr>
        );
    }

    return (
        <div className="mt-5 p-5">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                        <th>Icon</th>
                    </tr>
                </thead>
                <tbody>
                    {weather.map(renderWeather)}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({weatherReducer}) => ({
    weather: weatherReducer,
})
export default connect(mapStateToProps, null)(WeatherList);