import React from 'react'
import SearchBar from './containers/SearchBar'
import WeatherList from './containers/WeatherList'

 const MainPage = () => {
    return (
        <div>
            <SearchBar/>
            <WeatherList/>
        </div>
    )
}
export default MainPage;