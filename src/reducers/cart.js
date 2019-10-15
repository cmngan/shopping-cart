import {
  CART_REMOVE_ITEM,
  CART_EDIT_ITEM
} from '../actions/actionTypes'

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
  }),
  [CART_EDIT_ITEM]: (state, action) => ({
    ...state,
  })
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
