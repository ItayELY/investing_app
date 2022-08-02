

import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'20vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;