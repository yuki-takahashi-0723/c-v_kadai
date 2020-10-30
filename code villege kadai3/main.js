console.log(`hello`)


//課題１
function cointoss() {
    const num = Math.random() // numは0.0〜1.0のランダムな数値

    // console.log(num)
    if (num >= 0.5 ){
        console.log(`表`)
    } else{
        console.log(`裏`)
    }

  }
  
  for (let i= 0; i < 10 ; i++) {

    cointoss()
  }


  ///課題２


  function scoring(score) {

        if (score >= 90) {
            return'秀'
        } else if (score >= 75) {
           return'優'
        } else if (score >= 60) {
           return'良'
        } else if (score >= 30) {
            return'可'
        } else {
             return'不可'
        }

  }
  
  // 動作確認
  console.log(scoring(100)) //=> 秀
  console.log(scoring(60)) //=> 良
  console.log(scoring(13)) //=> 不可
  console.log(scoring(35))



//課題３



const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
    if (score >= 90) {
        return'秀'
    } else if (score >= 75) {
       return'優'
    } else if (score >= 60) {
       return'良'
    } else if (score >= 30) {
        return'可'
    } else {
         return'不可'
    }

}

scores.forEach((score) => {
    console.log(scoring(score)) 
})














