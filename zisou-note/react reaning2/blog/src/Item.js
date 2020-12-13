import React, { useState } from 'react'

const Item = ({content}) =>{
    const [isDone,setIsDone]=useState(false)
    return(
        <li>
            <input
                type = 'checkbox' 
                onChange ={()=>setIsDone(!isDone)}/>  
            <span
                style={
                    {textDecoration : isDone ? 'line-through': 'none'}
                }>
                    {content}
            </span>
        </li>
    )
}
export default Item

// onChangeやonclickなどのイベントに対しては　~~ = {()=>{関数}}の書式で対応する