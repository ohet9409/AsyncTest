function a(callback) {
  const str = 'Hello A'
  // 1초후 동작하도록 설정
  setTimeout(() => {
    console.log('A');
    callback(str);
  }, 1000)
  
}

function b() {
  console.log('B');
}
// a함수를 호출할때 callvack함수를 이용해서 순서를 보장한다(비동기)
a(function(event) {
  console.log(event)
  b()
})

function c(callback) {
  // 1초후 동작하도록 설정
  setTimeout(() => {
    console.log('C');
    callback();
  }, 1000)
}

function d(callback) {
  // 1초후 동작하도록 설정
  setTimeout(() => {
    console.log('D');
    callback();
  }, 1000)
}

c(function() {
  d(function() {
    console.log('Done!')
  })
})

function AA (){
  // promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('AA')
      resolve('Hello A');
    }, 1000)
  })
}

function BB () {
  console.log('BB');
}

async function test() {
  const res = await AA();
  console.log('res:', res)
  BB();
}

test();

function A1 (){
  // promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('A1')
      resolve('Hello A1');
    }, 1000)
  })
}

function A2 (){
  // promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('A2')
      resolve('Hello A2');
    }, 1000)
  })
}

function A3 (){
  // promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('A3')
      resolve('Hello A3');
    }, 1000)
  })
}

function A4 (){
  // promise: 약속의 객체!
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('A4')
      resolve('Hello A4');
    }, 1000)
  })
}

test1();