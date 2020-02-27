class CurrenciesController < ApplicationController
    def index
    end

    def search
        @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
        render json: {currencies: @currencies}
    end
    # search for results, send back json with currencies related

    def calculate
        amount = params[:amount]
        render json: {
            currency: currency,
            current_price: currency.current_price,
            amount: amount,
            value: currency.calculate_value(amount)
        }
    end
    #takes in currency ID and amount owned, returns final calculation

    private

    def currency
        @currency ||= Currency.find[params][:id]
    end
end
