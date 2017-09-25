function myModule() {
  // 数据
  var data = 'atguigu'
  // 操作数据的函数
  function doSomething() {
    console.log('doSomething() '+ data)
  }
  function doOtherthing() {
    console.log('doOtherthing() '+ data)
  }

  return {
    doSomething, doOtherthing
  }
}