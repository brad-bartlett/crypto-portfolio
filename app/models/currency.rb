class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
        # multiplies current price by total amount owned then rounds to 4 decimal points
    end

    
    def current_price
        key = '9d3f657a-1454-4830-bf7a-aa87a09dc87a'
        url = 'https://api.binance.com/api/v1/ticker/price?symbol=LTCBTC'
        request = HTTParty.get(url + self.currency_symbol + 'USDT')
        response = JSON.parse(request.body)[0]["current_price"]
    end

end

