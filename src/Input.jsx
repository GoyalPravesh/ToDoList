import React, { useState } from 'react';
const Input =()=>
{
    const [name,setName]=useState({
        fname:'',
        lname:'',
        email:'',
        phone:''
    });
    
    const nameChange=(event)=>
    {
        const {value,name}= event.target;
        setName((preValue)=>{
            return{
                ...preValue,
                [name]: value,
            }
            // if (name==='fname')
            // {
            //     return {fname: value,
            //     lname: preValue.lname,
            //     email: preValue.email,
            //     phone: preValue.phone,};
            // }
            // else if (name=== 'lname')
            // {
            //     return {fname: preValue.fname,
            //     lname: value,
            //     email: preValue.email,
            //     phone: preValue.phone,};
            // }
            // else if (name=== 'email')
            // {
            //    return {fname: preValue.fname,
            //     lname: preValue.lname,
            //     email: value,
            //     phone: preValue.phone,};
            // }
            // else if (name=== 'phone')
            // {
            //     return {fname: preValue.fname,
            //     lname: preValue.lname,
            //     email: preValue.email,
            //     phone: value,
            // };
        }
        )
    };
    const namChange=()=>
    {
        alert('form submitted');
    };
    return(
        <>
        <h1>Hi {name.fname} {name.lname}</h1>
        <h5>{name.email}</h5>
        <h6>{name.phone}</h6>
        <input type='text' name='fname' placeholder='Enter First Name' onChange={nameChange} value={name.fname}></input>
        <input type='text' name='lname' placeholder='Enter Last Name' onChange={nameChange} value={name.lname}></input>
        <input type='email' name='email' placeholder='Enter email' onChange={nameChange} value={name.email}></input>
        <input type='number' name='phone' placeholder='Enter phone' onChange={nameChange} ></input>
        <button onClick={namChange}>Click Me!!</button>
        </>
    );
};
export default Input;