import React from 'react'
import Item from './Item'

const List = ({todos}) =>{
    
    return(
        <ul>
             {
                 todos.map( (todo,index) => <Item content = {todo.content} key = {index}/>)
             } 
        </ul>
    )
}
export default List