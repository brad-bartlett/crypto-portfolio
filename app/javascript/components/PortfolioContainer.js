import React, {Component} from 'react'
import Search from './Search'
import Calculate from './Calculate'

class PortfolioContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.name)
    }
    // this modifies the name value in state any time the field value changes

    render() {
        return(
            <div>
                <Search handleChange={this.handleChange} />
                <Calculate />
            </div>
        )
    }
}

export default PortfolioContainer