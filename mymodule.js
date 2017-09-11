let fs = require('fs')
let ext = process.argv[3]
let directory = fs.readdir(process.argv[2])

let filterList = (err, data) => {
  if (err) {
    return err
  }
  else {
    let newData = data.filter((el) => {
      if (el.includes(`.${extension}`)) {
        console.log(el)
      }
    })
  }
}
