import React from "react";
import './StockGraphContainer.css'
import StockGraph from "../StockGraph/StockGraph";

const StockGraphContainer = () => {

  const symbols = ['AAPL', 'MSFT', 'TSLA', 'AMZN'];

  return (
    <>
      <header>Overview</header>
      <div className="graph-container">
        {symbols.map((symbol, index) => (
          <StockGraph key={index} symbol={symbol} />
        ))}
      </div>
    </>
  );
};

export default StockGraphContainer;





