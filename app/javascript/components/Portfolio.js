import React, {Component} from 'react'
import PortfolioItem from './PortfolioItem'

class Portfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const PortfolioItems = this.props.portfolio.map((item, index) => <PortfolioItem key={index} item={item} />)
        const total = this.props.portfolio.reduce((total, curr) => total + curr.value, 0)
        const formatted_total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    
        return (
            <div>
                <div className="portfolio-value">
                    <div className="portfolio-value-header">
                        Your total portfolio value is:
                    </div>
                    </div>
                    <div className="portfolio-items">
                        {portfolioItems}
                    </div>
            </div>
        )
    }
}

export default Portfolio