// HELLO WORLD
// console.log('HELLO WORLD')

// BABY STEPS
// let total = 0
// for (var i = 2; i < process.argv.length; i++) {
//   total += Number(process.argv[i])
// }
// console.log(total)

// MY FIRST I/0
// let fs = require('fs')
// let buffer = fs.readFileSync(process.argv[2]).toString()
// let str = buffer.split('\n').length
// console.log(str - 1)

// MY FIRST ASYNC I/0
// let fs = require('fs')
// fs.readFile(process.argv[2], (err, data) => {
//   if (err) {
//     console.log('oops, error: ' + err)
//   }
//   else {
//     console.log((data.toString().split('\n').length) -1)
//   }
// })

// FILTERED LS
// let fs = require('fs')
// let extension = process.argv[3]
// let callback = (err, list) => {
//   if (err) {
//     console.log('HEY ' + err)
//   }
//   else {
//     let newList = list.filter((el) => {
//       if (el.includes(`.${extension}`)) {
//         console.log(el)
//       }
//     })
//   }
// }
// fs.readdir(process.argv[2], callback)

// MAKE IT MODULAR
let filter_dir = require('./mymodule')
dir = process.argv[2]
ext = process.argv[3]

filter_dir(dir, ext, function(err, files) {
  for (file of files) {
    console.log(file)
  }
})

// HTTP CLIENT
// let http = require('http')
// let url = process.argv[2]
//
// http.get(url, (response) => {
//   response.on('data', (data) => {
//     console.log(data.toString())
//   })
// })
