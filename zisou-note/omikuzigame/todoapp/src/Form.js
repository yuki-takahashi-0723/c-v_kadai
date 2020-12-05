import React from 'react'



const Form = () =>{
    const [text, setText] = React.useState(false)
    const answer = () =>{
    const userPoint = Math.floor(Math.random()*100)
   　console.log(userPoint)
        if(userPoint<=10){
            console.log('大吉')
            return  '大吉'
        }else if(userPoint<=30){
            console.log('中吉')
            return  '中吉'
        }else if(userPoint<=60){
            return '吉'
        }else if(userPoint<=80){
            return '小吉'
        }else if(userPoint<=90){
            return '末吉'
        }else{
            return '凶'
        }
    }
    
    return(
        <>
        <button　onClick = {() => {setText(!text)}}>
            おみくじを引こう！
            </button>
    <h2 style={
        {display: text ? 'inline':'none'}
       }>
          <br></br> 今日の運勢は {answer()}！
    
    </h2>
           
        </>
    )
}
export default Form

