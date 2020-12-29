// 'use strict';
const students = [
    {
      id: 1,
      name: 'Nguyễn Thị Trà Ly',
      gender: 'Nữ',
      age: 18
    },
    {
      id: 2,
      name: 'Nguyễn Văn Trung',
      gender: 'Nam',
      age: 21
    },
    {
      id: 3,
      name: 'Nguyễn Thị Thu Hiền',
      gender: 'Nữ',
      age: 21
    }
  ]
  
  let editMode = false
  let studentIdTmp
  
  // document ready
  document.addEventListener('DOMContentLoaded', function() {
    renderStudents()
  })
  
  function enableEditMode() {
    editMode = true
  }
  
  function disableEditMode() {
    editMode = false
  }
  
  // render student
  function renderStudents() {
    let html = ''
      for (let i = 0;  i < students.length; i++) {
        const student = students[i]
        html += '<tr>'
        html += '<th scope="row">' + student.id + '</th>'
        html += '<td>' + student.name + '</td>'
        html += '<td>' + student.gender + '</td>'
        html += '<td>' + student.age + '</td>'
        html += '<td>'
        html += '<button type="button" class="btn btn-primary" onclick="onStudentsEdit(' + i + ')">Edit</button>'
        html += '<button type="button" class="btn btn-danger" onclick="onStudentsDelete(' + i + ')">Delete</button>'
        html += '</td>'
        html += '</tr>'
      }
      let stuentsListElement = document.getElementById('studentsList')
      stuentsListElement.innerHTML = html
  
      // setHTML('#studentsList', html)
  }
  
  // get value from input
  function getInputValue(selector) {
    const inputElement = document.querySelector(selector)
    return inputElement.value
  }
  
  function onEditHandle() {
    const id = getInputValue('.student-form .id')
    const name = getInputValue('.student-form .name')
    const gender = getInputValue('.student-form .gender')
    const age = getInputValue('.student-form .age')
  
    //edit student
    students[studentIdTmp] = {
      id,
      name,
      gender,
      age
    };
  
    renderStudents()
  }
  
  // add student
  function onclickCreateStudents() {
    if (editMode) {
      onEditHandle()
    } else {
      const id = getInputValue('.student-form .id')
      const name = getInputValue('.student-form .name')
      const gender = getInputValue('.student-form .gender')
      const age = getInputValue('.student-form .age')
    }
    
    //add student
    addStudents({
      id: id,
      name: name,
      gender,
      age: age
    })
  
    //render view
    renderStudents()
  }
  
  // add students
  function addStudents(student) {
    students.push(student)
  }
  
  // delete students
  function studentsDelete(index) {
    students.splice(index, 1)
  }
  
  // onclick to delete students
  function onStudentsDelete(index) {
    if (confirm('Are you sure??????')) {
      studentsDelete(index)
  
      renderStudents()
    }
  }
  
  // onclick to edit students
  function onStudentsEdit(index) {
    studentIdTmp =  index
  
    let student = getStudent(index)
  
    setInputValue('.student-form .id', student.id)
    setInputValue('.student-form .name', student.name)
    setInputValue('.student-form .gender', student.gender)
    setInputValue('.student-form .age', student.age)
  
    //enable editMode
    enableEditMode()
  
    setHTML('.btn-success', 'Save')
  }
  
  //inner HTML to insite a el
  function setHTML(selector, html) {
    const element = document.querySelector(selector)
    element.innerHTML = html
  }
  
  // get student
  function getStudent(index) {
    return students[index]
  }
  
  // set value to input by selector
  function setInputValue(selector, value) {
    let element = document.querySelector(selector)
    element.value = value;
  }
  