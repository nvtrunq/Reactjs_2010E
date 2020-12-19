//Lesson 1
const newArr = (string, numberOfIterations) => {
  const arr = []
  for (let i = 0; i < numberOfIterations; i++) {
    arr.push(string)
  }

  return arr
}

//Lesson 2
const reverseString = str => {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
}

//Lesson 3
const deleteStringFalse = arr => {
  const arrFilter = arr.filter(Boolean)
  
  return arrFilter
}

//Lesson 4
const newObj = importArr => {
  const createObj = {}

  importArr.forEach(arr => {
    createObj[arr[0]] = arr[1]
  })

  return createObj
}

//Lesson 5
const arrSort = (arr) => {
  arr.sort()

  return arr
}

//Lesson 6
const checkObj = obj => {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    return false
  } else {
    return true
  }
}

//Lesson 7
const checkObject = (key) => {
  const newObj = (obj = {}, input = []) => {
    for (let key in object) {
      input.forEach(importKey => {
        if (key === importKey) {
          delete(obj[key])
        }
      })
    }
  }

  return newObj
}

//Lesson 8
const removeIndex = (arr) => {
  const remove = arr.splice(2, 3)

  return remove
}
