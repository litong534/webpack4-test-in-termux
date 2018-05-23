require('./stylus/style.styl')
const dog = require('./image/fav.jpg')
const clickMe = () => import('./print.js')

function component() {
	var element = document.createElement('div')
	var btn = document.createElement('button')
	btn.innerHTML = 'click this'
	btn.onclick = clickMe
	element.appendChild(btn)
	var baidu = document.createElement('img')
	baidu.src = dog
	element.appendChild(baidu)
	return element
}

document.body.appendChild(component())
