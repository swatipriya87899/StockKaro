import React from 'react';
import './StockDataList.css'

const StockDataList = ({ response }) => {
    return (
        <div className='stockdata'>
            <header>{response && response?.meta?.symbol} Overview</header>
            {
                response && response.values.slice(0,10).map((stock,i) =>
                    <div key={i}>
                    <div className='list'>
                        <div>
                            {stock.datetime}
                        </div>
                        <div><span>$ {stock.close}</span><span style={stock.open-stock.close>0?{color:'green'}:{color:'red'}}>{(stock.open-stock.close).toFixed(2)}</span></div>
                    </div>
                    {i !== 9 && <div className='hr'></div>} {/* Add horizontal line if not the last element */}
                    </div>
                )
            }
        </div>
    )
}

export default StockDataList
