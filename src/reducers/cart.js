import {
  CART_REMOVE_ITEM,
  CART_EDIT_ITEM
} from '../actions/actionTypes'

const initialState = {
  items: [
    // { id, name, image, unit, price }
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
