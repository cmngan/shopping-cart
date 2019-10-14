import { CART_REMOVE_ITEM, CART_EDIT_ITEM } from './actionTypes'

export const removeItem = (id) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: { id }
  }
}
