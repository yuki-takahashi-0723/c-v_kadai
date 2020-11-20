// 「メソッドの調べ方」のセクションに書いてある方法で、文字列のオブジェクトに対して用意されているメソッドを調べてください。

// 気になったメソッドを3つほどピックアップして、実際にプログラムを書いて動作を確認してください。
//trim 両端の空白を削除
const strings = ' hellow wold '
console.log(strings)
console.log(strings.trim())

//split 文字列の配列に分割
const string = strings.split('')
console.log(string[6])

// concat() メソッドは、文字列引数を呼び出し文字列に連結して、新しい文字列を返します。
const strings2 = 'aaaaaaa'
console.log(strings.concat(strings2))

//replace

const p = 'dededededededededede dogfrfrfrfrf dog'

const regex = /dog/gi;
console.log(p.replace(regex,'monkey'))
console.log(p.replace('dog','monky'))


//配列で同様に３つピックアップしてみる

// .isArray 渡された値がArrayがどうかを真偽値で返す

const array = [1,2,3,4,5,6]
const array2 = {
                    id: '7',
                    name: 'tanaka'
               }
const array3 = '123456'
const resalt1 = Array.isArray(array)
const resalt2 = Array.isArray(array2)
const resalt3 = Array.isArray(array3)


console.log(resalt1)  //true
console.log(resalt2)  //fals
console.log(resalt3)  //fals

// includes() メソッドは、特定の要素が配列に含まれているかどうかを true または false で返します。
console.log(array.includes(3))
console.log(array.includes(2))
console.log(array.includes(9))


// splice() メソッドは、in place で既存の要素を取り除いたり、置き換えたり、新しい要素を追加したりすることで、配列の内容を変更します。
array.splice( 6 , 0 , 7 , 8 , 9 )
console.log(array)

array.splice( 0,  3,  "first", "second" , "third")
console.log(array)




//classの継承に挑戦

class Car {
    constructor(color,name){
        this.color = color
        this.postion = 0
        this.name = name

    }
    getInfo(){
        console.log ('車の色は' + this.color + 'です' )
    }
    getName(){
         console.log('車種は'　+ this.name + 'です')
    }

    forword(){
        this.postion += 1
    }
     
    back() {
        this.postion -= 1
    }
 
    getPosition () {
        console.log(this.postion)
    }

}

const car = new Car('青','ウェイク')
car.getName()
car.getInfo()
car.forword()
car.forword()
car.forword()
car.back()
car.getPosition()

const car2 = new Car('赤')
car2.getInfo()

car2.back()
car2.back()
car2.back()
car2.back()
car2.getPosition()







class PatCar extends Car{
    constructor(color,name,option,option2){
        super(color,name)
       this.option = option
       this.option2 =option2
    }


    getOption(){
        console.log('この車両には' + this.option + 'がついてます')
    }
    getOption2(){
        console.log('この車両には'　+ this.option2 + 'がついています')
    }
}
    
const patcar = new PatCar('白と黒','パトカー','パトランプ','サイレン')
patcar.getName()
patcar.getInfo()
patcar.forword()
patcar.forword()
patcar.back()
patcar.getPosition()
patcar.getOption()
patcar.getOption2()
