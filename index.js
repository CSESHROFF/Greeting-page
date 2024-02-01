import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date();
currDate = currDate.getHours();

let greeting="";
const cssStyle ={ };



if(currDate >= 1 && currDate<12)
{
    greeting='Good Morning';
    cssStyle.color='green';
}else if(currDate >12 && currDate<18)
{
    greeting='Good After Noon';
    cssStyle.color='orange';
}else{
    greeting='Good Night';
    cssStyle.color='blue';
}

ReactDOM.render(
    <div className='container'>
        <h1 className='heading'>Hello Sir <span style={cssStyle}>{greeting}</span> </h1>
    
    </div>,
    document.querySelector('#root')

);