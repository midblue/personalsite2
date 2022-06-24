const fs = require('fs')
const source = './generate/docs_to_keep/'
const dest = './dist/'
fs.readdirSync(source).forEach((fileName) => {
  fs.copyFileSync(source + fileName, dest + fileName)
})
console.log('Copied additional files (CNAME, etc) into /dist')
