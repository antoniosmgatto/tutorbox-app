
const removeArrayElement = (array, element) => {
  const clonedArray = [...array]
  const elementIndex = clonedArray.indexOf(element)
  clonedArray.splice(elementIndex, 1)
  return clonedArray
}

export default removeArrayElement
