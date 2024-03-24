//Створити 5 масивів з різними типами даних
const array1 = [1, 2, 3]
const array2 = ['apple', 'banana', 'orange']
const array3 = [true, false, true]
const array4 = [null, undefined]
const array5 = [{ name: 'John' }, { name: 'Alice' }]

//Використати цикл for
console.log('Використовуємо цикл for для масиву 1');
console.log(array1);
for (let i = 0; i < array1.length; i++) {
	console.log(array1[i])
}
console.log('-');
console.log('-')
console.log('-')

//Використати цикл while
console.log('використовуємо цикл while для масиву 2');
let j = 0
while (j < array2.length) {
	console.log(array2[j])
	j++
}
console.log('-')
console.log('-')
console.log('-')

//Використати цикл do while
console.log('використовуємо цикл do while для масиву 3');
let k = 0
do {
	console.log(array3[k])
	k++
} while (k < array3.length)
console.log('-')
console.log('-')
console.log('-')


//Створити функцію sum, яка буде приймати масив чисел та повертати суму всіх чисел вхідного масиву.
console.log(
	'Функція яка приймає масив чисел та повертає суму - для виклику прописати sum')
function sum(numbers) {
	let total = 0
	for (let num of numbers) {
		total += num
	}
	return total
}
console.log('-')
console.log('-')
console.log('-')


// Створити функцію getSentence, яка буде приймати масив слів та повертати речення побудоване із слів вхідного масиву.
console.log(
	'Функція яка приймає масив слів та повертає речення - для виклику прописати getSentence')
function getSentence(words) {
	return words.join(' ')
}
console.log('-')
console.log('-')
console.log('-')



//Створити функцію sumNumArrays, яка буде приймати 2 масива чисел та повертати суму всіх чисел вхідних масивів
console.log('Функція яка приймає 2 масиви чисел та повертає суму = для виклику прописати sumNumArrays')
function sumNumArrays(array1, array2) {
	let total = 0
	for (let num of array1) {
		total += num
	}
	for (let num of array2) {
		total += num
	}
	return total
}
console.log('-')
console.log('-')
console.log('-')

//Створити функцію welcomeUsers, яка буде приймати масива об’єктів з данимикористувачів та формувати привітання для кожного з них у вигляді нового масиву рядків.
console.log("Функція яка приймає масив об'єктів з даними користувача та буде формувати привітання");
function welcomeUsers(users) {
	const greetings = []
	for (let user of users) {
		greetings.push(`Welcome, ${user.name}!`)
	}
	return greetings
}


