const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello tests', () => {
  test('Shold say Hello World', () => {
    const response = sayHelloWorld.sayHello()

    expect(response).toBe('Hello World!')
  })

  test('Shold say Hello Macedo', () => {
    const response = sayHelloWorld.sayHello('Macedo')

    expect(response).toBe('Hello Macedo!')
  })

  test('Shold say Good Bye', () => {
    const response = sayHelloWorld.sayGoodBye()

    expect(response).toBe('Good Bye!')
  })

  test('Shold say Good Bye Macedo', () => {
    const response = sayHelloWorld.sayGoodBye('Macedo')

    expect(response).toBe('Good Bye Macedo!')
  })
})
