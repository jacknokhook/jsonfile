'use strict'

const fs = require('fs');

let menu = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]

let data = JSON.stringify(menu)
fs.writeFileSync('mene.json', data)