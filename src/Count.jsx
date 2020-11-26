import React,{ useState } from 'react';
const Count=()=>
{
    const [cnt,setCnt]=React.useState(5);
    const IncNum=()=>
    {
        setCnt(cnt+5);
    };

return(
    <>
    <h1>{cnt}</h1>
    <button onClick={IncNum}>Click Me!!</button>
    </>
);
};
export default Count;