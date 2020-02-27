import React, {Component} from 'react'
import PortfolioContainer from './PortfolioContainer'
import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
// sets token in headers before post request is made 

class App extends Component {
    render() {
        return (
            <PortfolioContainer />
        )
    }
}

export default App