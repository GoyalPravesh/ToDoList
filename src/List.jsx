import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './inde.css';
 const List =(props)=>
 {
     const [line,setLine]=useState(false);
     const cutIt=()=>
     {
         setLine(true);
     }
return(
<>
    <div className='todo'>
    <span onClick={cutIt}>
        <DeleteIcon className='dlet'/>
        </span>
    <li style={{textDecoration:line? 'line-through' : 'none'}}>{props.text}</li>
    </div>
</>
);
 };
 export default List;