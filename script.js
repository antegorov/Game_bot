'use strict'

const guessNumber = function (numBot) {
	let count = 0
	return function checked() {
		let num = prompt('Угадай число от 1 до 100')
		console.log(numBot)
		if (num === null) {
			alert('Игра окончена')
			return
		}
		if (!isNaN(parseFloat(num)) && isFinite(num)) {
			if (num == numBot) {
				alert('Поздравляю, Вы угадали!!!')
				return
			}
			if (num > numBot) {
				alert('Загаданное число меньше')
				checked()
			}
			if (num < numBot) {
				alert('Загаданное число больше')
				checked()
			}
		} else {
			alert('Введи число!')
			checked()
		}
	}
}

const numberBot = guessNumber(Math.floor(Math.random() * (100 - 1) + 1))
numberBot()
