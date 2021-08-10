var person = {
  firstName: 'Meet',
  lastName: 'Patel',
  hobby: 'Coding'
};

console.log(person);
console.log(`The Person's name is: ${person.firstName}`);

person.job = 'Learning';
console.log(`The Person's current job is: ${person.job}`);

person.previousJob = 'Cable Service Provider';
console.log(`The Person's Previous job is: ${person.previousJob}`);

console.log('The Complete Person object:');
console.table(person);
