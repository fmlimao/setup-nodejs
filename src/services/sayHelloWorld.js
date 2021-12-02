exports.sayHello = (name = '') => {
  return `Hello ${name || 'World'}!`
}

exports.sayGoodBye = (name = '') => {
  return `Good Bye${name ? ` ${name}` : ''}!`
}
