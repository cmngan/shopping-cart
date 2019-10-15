import {
  CART_REMOVE_ITEM,
  CART_EDIT_ITEM_UNIT
} from '../actions/actionTypes'

import { changeArrayByIndex, removeArrayElement } from 'util/immutable'

import food1 from 'resources/food1.png'
import food2 from 'resources/food2.png'
import food3 from 'resources/food3.png'

const initialState = {
  items: [
    { 
      id: '4316542', 
      name: 'Chicken momo', 
      image: food1, 
      unit: 1, 
      price: 10.5
    },
    { 
      id: '4276532', 
      name: 'Spicy Mexican potatoes', 
      image: food2, 
      unit: 1, 
      price: 8.5
    },
    { 
      id: '4387438', 
      name: 'Breakfast', 
      image: food3, 
      unit: 1, 
      price: 5.9
    },
  ]
}

const ACTION_HANDLERS = {
  [CART_REMOVE_ITEM]: (state, action) => ({
    ...state,
    items: removeArrayElement(state.items, state.items.findIndex(({id}) => action.payload.id === id))
  }),
  [CART_EDIT_ITEM_UNIT]: (state, action) => {
    return ({
      ...state,
      items: changeArrayByIndex(state.items, state.items.findIndex(({ id }) => action.payload.id === id), p => ({...p, unit: action.payload.unit}))
    })
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
