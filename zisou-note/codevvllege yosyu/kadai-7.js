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



class KamenRider{
 constructor(series,riderName,sens ){
    this.series = series
    this.riderName = riderName
    this.riderSens = sens
    this.power = 0
 }

 getSerise(){
     console.log('この仮面ライダーは' + this.series + 'に出てくる仮面ライダーです')
 }
getRider(){
    console.log('仮面ライダー'　+ this.riderName + this.riderSens + '!ヤベーい!')
}

powerUprode(power){
   this.power += power
}

getPower(){
    console.log('このライダーの力は' + this.power + 'ポイントだ！')
}

}

const kamenRider = new KamenRider

//プロパティが変わらない場合は、class Kuga extends KamenRider{
    // constructor(series, name, sens,job){
        // super(series, name, sens)
// }  を省略できる

class Kuga extends KamenRider{}
const kuga = new Kuga ("クウガ","クウガ","みんなの笑顔を守りたい")
kuga.getSerise()
kuga.getRider()
kuga.powerUprode(2000)
kuga.getPower()


class Ryuki extends KamenRider{}
const ryuki = new Ryuki ("龍騎","王蛇","イライラする・・・祭りの場所はここか？")
ryuki.getSerise()
ryuki.getRider()
ryuki.powerUprode(2000)
ryuki.getPower()



//追加した場合は下記では職業を追加した場合は省略できない



class Agito extends KamenRider {
    constructor(series, name, sens,job){
        super(series, name, sens)
        this.Job =  job
    }
getJob(){
    console.log('彼の職業は' + this.Job + 'だ！')
}


}

const agito = new Agito("アギト","アナザーアギト","!アギトは私だけでいい",'医者')
agito.getSerise()
agito.getRider()
agito.powerUprode(2000)
agito.getPower()
agito.getJob()



