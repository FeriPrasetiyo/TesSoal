const axios = require('axios');
const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=a272079f67b8e98effc47ef3ed470812')
  .then(function (response) {
    const data = response.data.list
    const result = []
    const tempPeratur = []
    for (let i = 2; i <= 34; i += 8) {
      result.push(data[i].dt_txt.split(' '))
      tempPeratur.push(data[i].main.temp)
    }
    const pusing = []
    const finis = []
    for (let i = 0; i < 5; i++) {
      const suhu = Math.ceil(tempPeratur[i])
      const celcius = JSON.stringify(suhu)
      pusing.push(result[i][0].split('-')[2] + " " + 'Apr' + ' ' + result[i][0].split('-')[0])
      const newData = celcius.split('')
      finis.push(newData[0] + newData[1] + ',' + newData[2])
    }
    const day = ['Fri', 'Sat', 'Sun', 'Mou', 'Tue', 'Wed']
    const tampilan = []
    for (let i = 0; i < 5; i++) {
      tampilan.push(day[i] + ',' + ' ' + pusing[i] + ' : ' + finis[i] + '°c')
    }
    console.log('Weather forecaset :' + ' ' + tampilan)
  })
  .catch(function (error) {
    console.log(error);
  })

module.exports = router;
