function greet(greeting, name) {
  console.log(`${greeting}, ${name}!!!`);
}

const aussieGreet = greet.bind(null, "G'day");

const spitefulGreet = greet.bind(null, "I hate you");
