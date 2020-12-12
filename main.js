//Unit 1
const multiplicationTable = (x) => {
  for (let i = 1; i <= 10; i++)
  console.log(x + 'x' + i + '=' + (x * i))
}

//Unit 2
function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}

//Unit 3
function sumOfPositiveIntegers(n) {
  let total = 0

  for (let i = 0; i <= n; i++) {
    total += i
  }
  
  return total
}

//Unit 4
function factorials(a) {
  if (a == 0) {
    return 1
  } else if (a < 0) {
    console.log('Nhập sai')
  } else {
    let result = 1
    for (let i = 2; i <= a; i++) {
      result *= i
    }

    return result
  }
}

//Unit 5
const inputArray = (arr) => {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && typeof(arr[i] == 'number')) {
      count++
    }
  }

  console.log(count)
}

//Unit 6
function deleteDuplicate(arr) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  
  return newArr
}

//Unit 7
function createObjectStudents () {
  let students = []
  const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
  ]
  const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
  ]

  function createObject(id, name, score) {
    this.id = id
    this.name = name
    this.score = score
  }

  for (let i = 0; i < studentNames.length; i ++) {
    for (let j = 0; j < studentScores.length; j ++) {
      if (studentNames[i].id ===studentScores[j].id) {
        let student = new createObject (studentNames[i].id, studentNames[i].name, studentScores[j].score)
        students.push(student)
      }
    }
  }
  
  console.log(students)
}

//Unit 8
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const searchStudentsMaxMin = () => {
  let scoreMin = 10;
  let scoreMax = 0;
  let studentsScoreMin = {}
  let studentsScoreMax = {}

  for (let i = 0; i < students.length; i++) {
    if (students[i].score < scoreMin) {
      scoreMin = students[i].score
    } 
    if (students[i].score > scoreMax) {
      scoreMax = students[i].score
    }
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i].score == scoreMin) {
      studentsScoreMin.id = students[i].id
      studentsScoreMin.name = students[i].name
      studentsScoreMin.score = students[i].score
    }
    if (students[i].score == scoreMax) {
      studentsScoreMax.id = students[i].id
      studentsScoreMax.name = students[i].name
      studentsScoreMax.score = students[i].score
    }
  }
  console.log(studentsScoreMin)
  console.log(studentsScoreMax)
}