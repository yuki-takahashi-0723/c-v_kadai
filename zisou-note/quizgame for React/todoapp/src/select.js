import React, { useState } from 'react'

const Select = ({quizs,userSelect}) => {
const [quizSelect,setQuizSelect] = useState('')
    const handleButton = (e) =>{
            setQuizSelect(e.target.innerHTML)
            console.log(quizSelect)
            userSelect(quizSelect)
          
        
    }
    return(
            
        quizs.map(
            (quiz,index) => <button 
                                key={index}
                                onClick={handleButton}           
                            >
                                    {quiz}
                            </button> 
        ) 
                    
    )
} 

export default Select