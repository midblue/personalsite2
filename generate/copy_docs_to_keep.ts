const fs = require('fs')
// import * as c from '../assets/common'

const source = './generate/docs_to_keep/'
const dest = './dist/'

fs.readdirSync(source).forEach((fileName) => {
  fs.copyFileSync(source + fileName, dest + fileName)
})

fs.writeFileSync(dest + 'CNAME', 'www.jasperstephenson.com')

console.log('Copied additional files (CNAME, etc) into /dist')
