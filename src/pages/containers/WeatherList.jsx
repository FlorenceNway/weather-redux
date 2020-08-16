import React from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";
import _ from 'lodash';

 const WeatherList = (props) => {

    const {weather} = props;
    console.log(weather)

    const renderWeather = (cityData) => {
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
       
        return (
          <tr key={cityData?.city?.name}>
            <td>{cityData?.city?.name}</td>
            <td>
              <Sparklines height={50} width={100} data={temps}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </td>
            <td>
              <Sparklines height={50} width={100} data={pressure}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </td>
            <td>
              <Sparklines height={50} width={100} data={humidity}>
                <SparklinesLine color="red" />
              </Sparklines>
            </td>
          </tr>
        );
    }

    const renderTime = (weather) => {
        const dts = weather.list.map(lis => lis.dt_txt)
        const timesFullArray = dts.map(time => time.split(' ')[1]) // output: [date, time] and then grab time of index 1
        const times = timesFullArray.slice(0,8)
      return times.map(time => <th>{time.slice(0,5)}</th>)
    }

    const renderIcon = (weather) => {
        const fullIcons = weather.list.map((data, index) => {return data.weather.map(da => da.icon)})
        const icons = fullIcons.slice(0,8)
 
      return icons.map((icon) => (
          <td key={_.uniqueId()}>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="icon"
            />
         </td>
        ))
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
                  </tr>
              </thead>
              <tbody>
                  {weather.map(renderWeather)}
              </tbody>
            </table>

            <table className="table table-hover">
              <thead>
                <tr>
                  {weather.map(renderTime)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {weather.map(renderIcon)}
                </tr>
              </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({weatherReducer}) => ({
    weather: weatherReducer,
})
export default connect(mapStateToProps, null)(WeatherList);