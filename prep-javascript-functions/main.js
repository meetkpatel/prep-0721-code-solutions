function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMin = convertHoursToMinutes(2);
console.log(hoursToMin / 60 + ' Hours is equal to ' + hoursToMin + ' Minutes');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greetingReceived = getGreeting('Meet');
console.log(greetingReceived);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Received = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5: ', addAndMultiplyBy5Received);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var multiplyAndDivideBy5Received = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5: ', multiplyAndDivideBy5Received);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersReceived = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers: ', subtractTwoNumbersReceived);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
var getCircleCircumferenceReceived = getCircleCircumference(5);
console.log('getCircleCircumference: ', getCircleCircumferenceReceived);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameReceived = getFullName('Meet', 'Patel');
console.log('getFullName: ', getFullNameReceived);

function cube(number) {
  return number * number * number;
}
var cubeReceived = cube(5);
console.log('cube: ', cubeReceived);
