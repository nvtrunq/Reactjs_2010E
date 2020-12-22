const timeBlock = new Date()

function blockTime() {
  console.log('Hover lúc:' + timeBlock.getDate() + '-' + timeBlock.getMonth() + '-' + timeBlock.getFullYear() + '-' +  timeBlock.getHours()+ 'giờ' + timeBlock.getMinutes()+ 'phút' + timeBlock.getSeconds() + 'Giây')
}

function hiddenTime() {
  console.log( 'Out hover lúc:' + timeBlock.getDate() + '-' + timeBlock.getMonth() + '-' + timeBlock.getFullYear() + '-' +  timeBlock.getHours()+ 'giờ' + timeBlock.getMinutes()+ 'phút' + timeBlock.getSeconds() + 'Giây')
}
