function a() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000)
  })
}
function b() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      console.log('B')
      resolve()
    }, 1000)
  })
}
function c() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      console.log('C')
      resolve()
    }, 1000)
  })
}
function d() {
  return new Promise ((resolve) => {
    setTimeout(() => {
      console.log('D')
      resolve()
    }, 1000)
  })
}
function test() {
  // const promise = a()
  // promise.then(() => {
  //   console.log('B')
  // })
  
  // a().then(() => {
  //   b().then(() => {
  //     c().then(() => {
  //       d().then(() => {
  //         console.log('Done!')
  //       })
  //     })
  //   })
  // })

  // a().then(() => {
  //   return b()
  // }).then(() => {
  //   return c()
  // }).then(() => {
  //   return d()
  // }).then(() => {
  //   console.log('Done!!!')
  // })

  a()
    .then(() => b())
    .then(() => c())
    .then(() => d())
    .then(() => {
      console.log('Done!!!!')
    })
}

test()