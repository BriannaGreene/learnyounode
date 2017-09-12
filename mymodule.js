// these requires don't need to be in module exports
let fs = require('fs')
let path = require('path')

module.exports = function readdir(dir, ext, callback)
{
  let full_ext = "." + ext

  // async read files
  fs.readdir(dir, function(err, list) {
    // handle the fails
    if (err) {
      return callback(err, null)
    }

    // filter the file list
    let filtered = list.filter((file) => path.extname(file) === full_ext)

    // call the callback
    callback(null, filtered)

  })
}
