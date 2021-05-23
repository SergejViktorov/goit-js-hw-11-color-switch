const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
]

const body = document.querySelector('body')
const btn = document.querySelector('[data-action="start"]')
const btnClose = document.querySelector('[data-action="stop"]')
const NOTIFICATION_DELAY = 1000
let intervalId = null
const min = 0
const max = colors.length

btn.addEventListener('click', onStart)
btnClose.addEventListener('click', onClose)

function onStart() {
	if (intervalId !== null) {
		return
	}

	intervalId = setInterval(() => onRundomColor(), NOTIFICATION_DELAY)
	btn.setAttribute('disabled', 'disabled')
}

function onRundomColor() {
	let color = colors[randomIntegerFromInterval(min, max)]
	body.style.backgroundColor = color
}

function onClose() {
	clearInterval(intervalId)
	btn.removeAttribute('disabled')
	intervalId = null
}

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random(colors) * (max - min + 1) + min)
}
