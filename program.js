var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

var buftostring = buffer.toString().split('/n').length
console.log(buftostring - 1)
