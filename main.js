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
  const obj = (obj = {}, input = []) => {
    for (let key in object) {
      input.forEach(importKey => {
        if (key === importKey) {
          delete(obj[key])
        }
      })
    }
  }

  return obj
}

//Lesson 8
const removeIndex = (arr) => {
  const remove = arr.splice(2, 3)

  return remove
}

//Lesson 9
const checkWhetherItPassesOrNot = () => {
  const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
  ]

  const 
}

//Lesson 10

