const updateArrayElement = (array, element, newValues) => {
  const elementIndex = array.indexOf(element)
  const clonedArray = [...array]
  clonedArray[elementIndex] = { ...element, ...newValues }
  return clonedArray
}

export default updateArrayElement
