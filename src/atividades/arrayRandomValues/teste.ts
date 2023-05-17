import ArrayRandomValues from './ArrayRandomValues'

const arrayRandomValues = new ArrayRandomValues()
arrayRandomValues.generateArrayWithRandomNumbers(10)
const randomNumbers = arrayRandomValues.getArray()
console.log(randomNumbers)
