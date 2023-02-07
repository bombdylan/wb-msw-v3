const illum = document.getElementById('Illuminance')
const co2 = document.getElementById('CO2')
const temp = document.getElementById('Temperature')
const hum = document.getElementById('Humidity')
const air = document.getElementById('AirQuality')
const sound = document.getElementById('SoundLevel')
const max_motion = document.getElementById('MaxMotion')
const cur_motion = document.getElementById('CurrentMotion')

const socket = io()

socket.on('message', ({ param, value }) => {
  if (param === 'Illuminance') {
    illum.innerHTML = value
  } else if (param === 'CO2') {
    co2.innerHTML = value
  }
  else if (param === 'Temperature') {
    temp.innerHTML = value
  }
  else if (param === 'Humidity') {
    hum.innerHTML = value
  }
  else if (param === 'Air Quality (VOC)') {
    air.innerHTML = value
  }
  else if (param === 'Sound Level') {
    sound.innerHTML = value
  }
  else if (param === 'Max Motion') {
    max_motion.innerHTML = value
  }
  else if (param === 'Current Motion') {
    cur_motion.innerHTML = value
  }
})
