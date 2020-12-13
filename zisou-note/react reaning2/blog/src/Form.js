import React, { useState } from 'react'

const Form = ({addTodos}) => {
    const [value,setValue] =useState('')
    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(value)
            if(!value.trim('')){
                alert('入力フォームが空欄です')
            }else{
                addTodos(value)
                setValue('')
            }

         

    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange = {e => {
                                    setValue(e.target.value)
                                 }
                }
                value = {value}
             />

        </form>
    )
}
export default Form