document.getElementById('main').remove()
const h1 = document.createElement('h1')
h1.id = 'victory'

document.body.append(h1)

const newHeader = document.querySelector('h1#victory')

newHeader.textContent = 'Anna is the champion'
