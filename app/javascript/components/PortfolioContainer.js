import React, {Component} from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'
import axios from 'axios'

class PortfolioContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }

    handleChange(e) {
        
        axios.post('http://localhost:3000/search',{
            search: e.target.value
        })
        .then((data) => {
            this.setState({
                search_results: [...data.data.currencies]
            })
        })
        .catch((data) => {
        })
        console.log(this.state.search_results)
    }
    // this modifies the name value in state any time the field value changes

    handleSelect(e){
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        const activeCurrency = this.state.search_results.filter( item => item.id == parseInt(id))
    
        this.setState({
          active_currency: activeCurrency[0],
          search_results: []
        })
      }

      handleSubmit(e) {
          e.preventDefault()
          let currecy = this.state.active_currency
          let amount = this.state.amount

          axios.post('http://localhost:3000/calculate', {
              id: currency.id,
              amount: amount
          }) .then((data) => {
              this.setState({
                  amount: '',
                  active_currency: null,
                  portfolio: [...this.state.portfolio, data.data]
              })
          })
          .catch((data) => {})
      }

      handleAmount(e) {
          this.setState({
              [e.target.name]: e.target.value
          })
      }

    render() {
        const searchOrCalculate = this.state.active_currency ? <Calculate handleChange={this.handleAmount} handleSubmit={this.handleSubmit} active_currency={this.state.active_currency} amount={this.state.amount} /> : <Search handleSelect={this.handleSelect} searchResults={this.state.search_results} handleChange={this.state.handleChange} />
        return(
            <div>
                {searchOrCalculate}
            </div>
        )
    }
}

export default PortfolioContainer