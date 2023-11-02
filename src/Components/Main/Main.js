import React, { useState, useEffect } from 'react'
import StockGraph from '../StockGraph/StockGraph';
import UseFetch from '../../Hooks/UseFetch';
import { API_KEY } from './../../config/config'
import Dropdown from '../CustomDropdown/CustomDropdown';
import './Main.css'
import StockDataList from '../StockDataList/StockDataList';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const Main = () => {

    const [stockData, setStockData] = useState([]);
    const tickerOptions = ['AAPL', 'MSFT', 'TSLA', 'AMZN', 'META'];
    const [symbol, setSymbol] = useState('AAPL')
    const [performance, setPerformance] = useState([])
    const [ticker, setTicker] = useState(null)
    const [interval, setInterval] = useState('1day')

    const { response, error, loading } = UseFetch(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${API_KEY}&outputsize=749&dp=2&source=docs`);

    //Saving Stock Fetched Data
    useEffect(() => {
        if (response && response.values) {
            const priceData = response.values.map((value) => {
                return { time: value.datetime, price: value.close }
            })
            setStockData(priceData);
            setPerformance([{
                option: 'Open',
                value: response.values[0].open
            },
            {
                option: 'Close',
                value: response.values[0].close
            },
            {
                option: 'High',
                value: response.values[0].high
            },
            {
                option: 'Low',
                value: response.values[0].low
            }])
        }
    }, [response])

    //getting value of selected ticker from drodown component
    function selectedTicker(selectedOption) {
        setTicker(selectedOption)
    }


    //if value of drodown/ticker changes
    useEffect(() => {
        if (ticker) {
            setSymbol(ticker)
        }
    }, [ticker])

    // Get select interval from ButtonGroup Component
    function getSelectedButton(value) {
        setInterval(value);
    }


    return (
        <div className='main'>
            <div>
                {/* Ticker Name & Dropdown */}
                <div className='main-header'>
                    {/* Ticker Name & Price */}
                    <div className='stock-details'>
                        <header>{symbol} Stocks Price</header>
                        <div>{stockData && stockData[0]?.price}<span> {interval}</span></div>
                    </div>
                    <div><Dropdown options={tickerOptions} selectedTicker={selectedTicker} title="Select Ticker" /></div>
                </div>

                {/* Stock/Ticker Graph with interval buttons */}
                <StockGraph stockData={stockData}></StockGraph>
                <ButtonGroup getSelectedButton={getSelectedButton} />

                {/* Performance of ticker */}
                <div className='performance'>
                    Today's Performance
                    <div>
                        {
                            performance.map((performance,i) =>
                                <div key={i}>
                                    <div>{performance.option}</div>
                                    <div><b>{performance.value}</b></div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* List of Stocks Info */}
            <StockDataList response={response} />

        </div>
    )
}

export default Main
