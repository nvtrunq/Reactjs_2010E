const checkNumber = event => {
  const value = event.target.value
  const regex = /^[a-z0-9]+$/
  if (!value.match(regex)) {
    alert('Các ký tự được phép sử dụng là 0-9')
  }
  if (Number(value) < 0) {
    alert('Số tiền không được phép âm')
  }
  if (Number(value) <= 1000) {
    alert('Số tiền nhập tối đa là 1000')
  }
}
