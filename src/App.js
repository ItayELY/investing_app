import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchOptions from './SearchOptions';
import Search from './Search';


var prevSym = ""
const listStocks = [
  {
    name: "IBM",
    country: "usa"
  },
  {
    name: "IBM",
    country: "israel"
  },
  {
    name: "MSFT",
    country: "usa"
  },
  {
    name: "MSFT",
    country: "israel"
  }
]
function App() {
  const [stockPrice, setStockPrice] = useState([])
  const [showPrice, setShowPrice] = useState([])
  const [symbol, setSymbol] = useState([])
  const [search, setSearch] = useState([])
  const [searchOptions, setSearchOptions] = useState([])
  const [listStocksSearch, setListStocksSearch] = useState([])
  const fetchStockPrice = async (sym) =>{
    const response = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + sym + "&apikey=UP2VVRF5MWD24UNI"
    ).then((response) => response.json());
    //var timeSeries = response["Time Series (5min)"]

    // update the state
    setStockPrice(response["Global Quote"]["05. price"]);
    console.log(sym)
    setShowPrice("the " + sym + " stock's price is currently " + response["Global Quote"]["05. price"] + ".")
    prevSym = symbol
  }

  const fetchSearch = async (keywords) => {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + keywords + "&apikey=UP2VVRF5MWD24UNI"
    ).then((response) => response.json());

  }

  return (
    <div className="App">
      <header className="App-header">
      <Search details={listStocks}/>
     <div className='mt-5'>
        <div><input onChange={(event) => { setSymbol(event.target.value);}} placeholder='insert symbol'></input></div>
        <div>
        <button onClick={() =>{if(symbol === prevSym){return}; console.log(prevSym + " symbol: " + symbol); fetchStockPrice(symbol)}} className=" btn btn-primary mt-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        view data
        </button>
        </div>
        <div class="collapse mt-2" id="collapseExample">
          <div class="card card-body text-primary">{showPrice}
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
