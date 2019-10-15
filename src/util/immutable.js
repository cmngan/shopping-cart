export const changeArrayByIndex = (array, index, modifier) => {
  if(index < 0) {
    console.warn('changeArrayByIndex error. index is negative')
    return array
  }
  return [
    ...array.slice(0, index),
    modifier(array[index]),
    ...array.slice(index+1)
  ]
}

export const removeArrayElement = (array, index) => {
  if(index < 0) {
    console.warn('removeArrayElement error. index is negative')
    return array
  }
  return [
    ...array.slice(0, index),
    ...array.slice(index+1)
  ]
}
