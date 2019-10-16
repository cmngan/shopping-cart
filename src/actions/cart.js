import { CART_REMOVE_ITEM, CART_EDIT_ITEM_UNIT } from './actionTypes'

export const changeItemUnit = (id, unit) => {
  return {
    type: CART_EDIT_ITEM_UNIT,
    payload: {id, unit}
  }
} 

export const removeItem = (id) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: { id }
  }
}
