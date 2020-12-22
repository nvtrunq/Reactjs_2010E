const checkError = event => {
  const value = event.target.value
  const regexNumber = /^[a-z0-9_]+$/
  if (!value.match(regexNumber)) {
    alert('Chỉ cho phép nhập vào các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới')
  }
}
