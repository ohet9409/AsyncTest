function a(number) {
  return new Promise ((resolve, reject) => {
    if (number > 4) {
      // then 메소드가 실행되지 않도록 설정
      reject();
      // 변수가 4이상일 경우 아래 코드가 실행되지 않도록 설정
      return
    }
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000)
  })
}

// function test() {
//   a(7)
//     .then(() => {
//       console.log('Resolve!')
//     })
//     .catch(() => {
//       console.log('Reject!')
//     })
//     .finally(() => {
//       console.log('Done!')
//     })
// }

// async, await를 이용하여 예외처리를 하는 방법
async function test() {
  try {
    await a(8)
    console.log('Resolve!')
  } catch (error) {
    console.log('Reject')
  } finally {
    console.log('Done!')
  }
  
}
test()