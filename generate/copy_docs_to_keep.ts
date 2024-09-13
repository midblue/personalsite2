const fs = require('fs')
import * as c from '../assets/common'

const source = './generate/docs_to_keep/'
const dest = './dist/'

fs.readdirSync(source).forEach((fileName) => {
  fs.copyFileSync(source + fileName, dest + fileName)
})

// make CNAME file with c.config.CNAME as content
fs.writeFileSync(dest + 'CNAME', c.config.CNAME)

c.log('Copied additional files (CNAME, etc) into /dist')
