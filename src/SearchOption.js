import React from 'react';

function SearchOption(props){
    var str = "symbol: " + props.symbol + ", name: " + props.name + ", country: " + props.country;
    return (
             <button href="#" class="list-group-item list-group-item-action">{str}</button>
      );
}

export default SearchOption;