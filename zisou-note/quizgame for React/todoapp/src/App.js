import React, { useState } from 'react'
import Answer from './Answer'
import Select from './select'


const App = () =>{
    const [userAnswer,setUserAnswer]=useState('')
    const quizs =[
        {
            Problem:'この内私が持っていない電子ガジェットは？',
            Select : [
                'ipad pro',
                'mac book pro',
                'surface pro6',
                'surface go2'
            ],
            Correct: 'surface go2'
        },
        {
            Problem:'答えはBです！ほんとです',
            Select : ['A','B','C','D'],
            Correct: 'B'
        },
    ]
       //答え判別する処理（何を押されたかを受け取る）
       //コンポーネント化は使い回すのかどうかで判別する。

    const userSelect = (content) =>{
        setUserAnswer(content)
    }
   




    // const judge = () =>{
    //     if(!quizs[0].Correct){
    //         window.alert('不正解')
    //     }
    //         alert('正解')
    // }









    return(
        <>
            <h1>クイズゲーム</h1>
            <h2>{quizs[0].Problem}</h2>
            <Select  quizs = {quizs[0].Select}  userSelect = {userSelect}/>
            <Answer />
        
        </>


    )
}

export default App