import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './inde.css';
import List from './List';
 
const Todo =()=>
{
    const [item,setItem]=useState();
    const [list,setList]=useState([]);
    const itemEvent=(event)=>
    {
        setItem(event.target.value);
    };
    const listEvent=()=>
    {
        setList((olditem)=>{
            return [...olditem,item];
        }
        );
        setItem("");
    } ;
    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>TODO List</h1>
                <br/>
                <input type='text' placeholder='Add an item' onChange={itemEvent} value={item}/>
                <Button className='newBtn' onClick={listEvent}>
                <AddIcon/>
                </Button>
                <ol>
                {
                    list.map((value,index)=>
                    {
                        return <List key={index} text={value}></List>
                    })
                }
                </ol>
            </div>
        </div>
        </>
    )
}
export default Todo; 