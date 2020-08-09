import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../services/weather/weatherAction';


class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group mt-5 d-flex justify-content-center">
                <input placeholder="Search forecast in cities"
                value={this.state.term}
                onChange={this.onInputChange}/>
                <button type="submit" className="btn btn-secondary ml-3">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
//mapStateProps,mapDispatchToProps