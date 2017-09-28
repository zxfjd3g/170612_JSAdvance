/**
 * 要分线程执行的js
 */
function fibonacci (number) {// 递归调用
  return number<=2 ? 1 : fibonacci(number-1) + fibonacci(number-2)
}
console.log(this)
// alert('-----') // alert is not defined

// 分线程接收主线程发送的消息
var onmessage = function (event) {
  const number = event.data
  console.log('分线程接收主线程发送的消息', number)
  // 处理
  const result = fibonacci(number)
  // 分线程向主线程返回数据
  postMessage(result)
  console.log('分线程向主线程返回数据', result)
}