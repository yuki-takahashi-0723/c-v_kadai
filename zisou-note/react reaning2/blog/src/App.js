import React, { useState } from 'react'
import Form from './Form'
import List from './List'
const App = () =>{
    const [todos,setTodos] =useState([
        {
            content : '勉強する'
        },
        {
            content : '掃除する'
        },
        {
            content : '料理する'
        }
    ])
    const addTodos = (content) =>{
        setTodos(
           
            [
                ...todos,
                {
                    content : content
                }
            ]
            
        )
    }
    return(
        <>
          <h1>TODOリスト</h1>
          <Form addTodos = {addTodos}/>
          <List 　todos = {todos}/>
        </>
    )
}

export default App
