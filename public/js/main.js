const illum = document.getElementById('Illuminance')
const co2 = document.getElementById('CO2')

const socket = io()
socket.emit('join', { message: 'hi. it came from join over ws' })

socket.on('message', ({ param, value }) => {
  if (param === 'Illuminance') {
    illum.innerHTML = value
  } else if (param === 'CO2') {
    co2.innerHTML = value
  }
})
