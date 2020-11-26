import React, { useState } from 'react';
const Time=()=>
{
    const t=new Date().toLocaleTimeString();
    const[time,setTime]=React.useState(t);
    const CurrTime=()=>
    {
        const x=new Date().toLocaleTimeString();
        setTime(x);
    }
    setInterval(CurrTime,1000);
return (
<>
<h1>{time}</h1>
</>
);
};
export default Time;