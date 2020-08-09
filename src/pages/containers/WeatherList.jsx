import React from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";

 const WeatherList = (props) => {

    const {weather} = props;
    console.log(weather)

    const renderWeather = (cityData) => {
        const temps = cityData.list.map(weather => weather.main.temp)
        console.log(temps)
        return (
          <tr key={cityData?.city?.name}>
            <td>{cityData?.city?.name}</td>
            <td>
              <Sparklines height={50} width={100} data={temps}>
                <SparklinesLine color="blue" />
              </Sparklines>
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