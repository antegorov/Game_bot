'use strict'

const guessNumber = function (numBot) {
	let count = 10
	return function checked() {
		let num = prompt('Угадай число от 1 до 100')
		console.log(numBot)
		console.log(count)
		count -= 1
		if (count > 0) {
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
					alert('Загаданное число меньше, осталось попыток ' + count)
					checked()
				}
				if (num < numBot) {
					alert('Загаданное число больше, осталось попыток ' + count)
					checked()
				}
			} else {
				alert('Введи число!')
				checked()
			}
		} else {
			let repeat = confirm('Попытки закончились, хотите сыграть еще?')
			if (repeat) {
				let repeatGuessNumber = guessNumber(
					Math.floor(Math.random() * (100 - 1) + 1)
				)
				repeatGuessNumber()
			} else return
		}
	}
}

const numberBot = guessNumber(Math.floor(Math.random() * (100 - 1) + 1))
numberBot()
