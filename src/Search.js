import React, { useEffect, useState } from 'react';
import Scroll from './Scroll';
import SearchOption from './SearchOption';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchOptionsList, setSearchOptionsList] = useState([]);
  const [whenSearch, setWhenSearch] = useState("")

  useEffect(()=>{
    console.log("set: " + filteredOptions);
    if(filteredOptions != undefined){
        setSearchOptionsList(
            <div class="list-group">
                {filteredOptions.map(option =>  <SearchOption symbol={option["1. symbol"]} name={option["2. name"]} country={option["4. region"]} />)}
            </div>
        )

    }
    else{
        console.log("undefined")
        setSearchOptionsList([])
    }
  }, [filteredOptions])
  useEffect(() => {
    setWhenSearch(searchOptionsList)
  }, [searchOptionsList])
/*
  const filteredOptions = details.filter(
    option => {
      return (
        option
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        option
        .country
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  */
  const fetchSearch = async (keywords) => {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + keywords + "&apikey=UP2VVRF5MWD24UNI"
    ).then((response) => {console.log("hi"); return response.json(); });
    console.log("matches: " + response["bestMatches"])
    setFilteredOptions(response["bestMatches"])
  }
  const handleClick = async e => {
    await fetchSearch(searchField)

  };
  const handleChange = async e => {
    setSearchField(e.target.value);
  };

  
  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your stock</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          style={{margin: "10px"}}
          type = "search" 
          placeholder = "Search Stocks" 
          onChange={handleChange}
        />
      </div>
      <button className='btn btn-primary' onClick={handleClick}>search</button>
      <Scroll>
        {whenSearch}
      </Scroll>
    </section>
  );
}

export default Search;