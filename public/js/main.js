const illum = document.getElementById('Illuminance')
const co2 = document.getElementById('CO2')

const socket = io()

socket.on('message', ({ param, value }) => {
  if (param === 'Illuminance') {
    illum.innerHTML = value
  } else if (param === 'CO2') {
    co2.innerHTML = value
  }
})
