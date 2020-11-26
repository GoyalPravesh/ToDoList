import React, { useState } from 'react';
const Click = () =>
{
    const [name,setName]=useState('CLICK ME!');
    const nameChange=()=>
    {
        setName('OUCH!!');
    };
    const naamChange=()=>
    {
        setName('Bsss....');
    };
    return (
        <button onClick={nameChange} onDoubleClick={naamChange}>{name}</button>
    );
};
export default Click;