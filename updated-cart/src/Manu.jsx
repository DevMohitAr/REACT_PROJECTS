import React from 'react'
import cartItems from './data'

export const Manu = () => {
 const cart = new Map()
 cart.set('apple',{name:'apple',price:250,quantity:1})
 cart.set('strawberry',{name:'strawberry',price:500,quantity:2})
 cart.set('orange',{name:'orange',price:150,quantity:3})
 const appleDetails = cart.get('apple');
 cart.delete('apple')
const x = [['apple',{id:1,name:"apple",place:"azadpur"}],['mango',{id:2,name:"mango",place:"delhi"}]]
const y = new Map(x)

  return (
    <div>manu</div>
  )
}
