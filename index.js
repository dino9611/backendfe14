//var bebas=require('./satu') //import bebas from './satu' 
// var {nama,namalengkap}=require('./satu/satu') //import {nama,namalengkap} from './satu
var namalengkap=require('./satu/satu') 
// console.log(nama)
console.log(namalengkap('blabla'))

// function jumlahkan(...params){
//     console.log(...params)
// }

// var b=null
// var c= b || 'salah'


var obj={
    a:2,
    b:3,
    c:5,
    d:6
}
var {b,c,d}=obj

function hoss({c,b}){
    return c
}
console.log(hoss(obj))
// console.log(c)
