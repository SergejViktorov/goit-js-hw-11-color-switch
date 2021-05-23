let intervalId = null
const min = 0
const max = colors.length

btn.addEventListener('click', onStart)
btnClose.addEventListener('click', onClose)

function onStart() {
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
}

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random(colors) * (max - min + 1) + min)
}
