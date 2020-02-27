import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Crypto Portfolio Calculator</h1>
                <form>
                    <div className = "form-group">
                        <label>
                            Search for a currency:
                        </label><br/>
                        <input onChange={this.props.handleChange}
                                autoComplete="off" 
                                type="text" 
                                name="name" 
                                placeholder="Example: Bitcoin, Tezos, Chainlink, Ethereum..." 
                                value={this.props.name} 
                                className="field" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search