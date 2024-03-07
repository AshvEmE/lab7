
const array1 = [1, 2, 3]
const array2 = ['apple', 'banana', 'orange']
const array3 = [true, false, true]
const array4 = [null, undefined]
const array5 = [{ name: 'John' }, { name: 'Alice' }]


for (let i = 0; i < array1.length; i++) {
	console.log(array1[i])
}


let j = 0
while (j < array2.length) {
	console.log(array2[j])
	j++
}


let k = 0
do {
	console.log(array3[k])
	k++
} while (k < array3.length)



function sum(numbers) {
	let total = 0
	for (let num of numbers) {
		total += num
	}
	return total
}



function getSentence(words) {
	return words.join(' ')
}

console.log(getSentence(['hallo', 'hello', 'привіт'])) 



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


function welcomeUsers(users) {
	const greetings = []
	for (let user of users) {
		greetings.push(`Welcome, ${user.name}!`)
	}
	return greetings
}


