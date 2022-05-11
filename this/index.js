// This keyword

const user = {
  name: 'Denis',
  sayHi() {}
}

const admin = {
  name: 'Administrator',
} 

// Why is useful this keyword?

const user2 = {
  name: 'Denis',
}
const admin2 = {
  name: 'Administrator',
}

// A small problem that u can encounter

const person = {
  name: 'John',
  walk() {}
}

// The fix

const fixedPerson = {
  name: 'John',
  walk() {}
}