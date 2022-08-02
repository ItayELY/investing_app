import React from 'react';
import SearchOption from './SearchOption';

function SearchOptions(props){
    const filtered = props.filteredOptions.mapfilteredOptions.map(option =>  <SearchOption symbol={option["1. symbol"]} name={option["2. name"]} country={option["4. region"]} />); 
    return (
        <div className="App">
          {filtered}
        </div>
      );
}

export default SearchOptions;