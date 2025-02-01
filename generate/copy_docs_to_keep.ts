const fs = require('fs')
// import * as c from '../assets/common'

const source = './generate/docs_to_keep/'
const dest = './dist/'

fs.readdirSync(source).forEach((fileName) => {
  fs.copyFileSync(source + fileName, dest + fileName)
})

fs.writeFileSync(dest + 'CNAME', 'www.jasperstephenson.com')

console.log('Copied additional files (CNAME, etc) into /dist')


const axios = require('axios')
// import * as c from '../assets/common'

const config = {
  fullName: 'Jasper Stephenson',
  description: 'Digital Tinkerer, Friendly Ghost.',
  contentDoc: '1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I',
  CNAME: 'www.jasperstephenson.com',
  showNav: true,
  overlapTitle: true,
  titleBackgroundColor: true,
}

async function go() {
  const contentDoc = config.contentDoc
  let data = await axios
    .get(`https://p.jasperstephenson.com/3lix/doc/${contentDoc}`)
    .then((res) => {
      if (res.status === 500) return
      return res.data
    })
  if (!data) return

  let { content } = extractDataFrom3Lix(data) as any

  content =
    content
      .map((co, index) => {
        if (!co.color) return
        return {
          slug:
            index === 0
              ? undefined
              : encodeURIComponent(
                  slugify(
                    (/<h1[^>]*?>([^<]*)/.exec(co.content || '')?.[1] || '')
                      .replace(/<[^>]*?>/g, '')
                      .trim() as any,
                  ),
                ),
          color: co.color,
          thumbnail:
            co.thumbnail || /<picture.*?<\/picture>/g.exec(co.content)?.[0],
          tags: co.tags
            .split(',')
            .map((t) => t.trim().toLowerCase())
            .filter((t) => t),
          elements: co.content
            .replace(/<div class='table ?'>/gi, '')
            .split(`<div class='row'>`)
            .filter((s) => s)
            .map((content) => {
              const image = content
                .split(/<\/div><div class='cell[^>]*?>/g)?.[0]
                ?.replace(/^<div[^>]*?>/, '')
              const text = content
                .split(/<\/div><div class='cell[^>]*?>/g)?.[1]
                ?.replace(/(<\/div>)+$/g, '')
              return {
                image,
                text,
              }
            })
            .filter((co) => co.image || co.text),
        }
      })
      .filter((co) => co) || []

  const posts = fs.readdirSync('./dist/p/')
  posts.forEach(async (post) => {
    const generatedContent = fs.readFileSync(
      `./dist/p/${post}/index.html`,
      'utf8',
    )
    const foundContent = content.find((co) => co.slug === post)
    console.log(post, !!generatedContent, !!foundContent)

    const title = (
      /<h1[^>]*?>([^<]*)/g.exec(foundContent?.elements[0]?.text || '')?.[1] ||
      'Home'
    ).trim()
    const image =
      /src=(?:'|")([^"']*)/g.exec(
        foundContent?.elements[0]?.image || '',
      )?.[1] || ''
    const description = foundContent
      ? foundContent.elements[0].text
          .replace(/<h1.*<\/h1>/g, '')
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : config.description
    const headObject = {
      title: title + ' | ' + config.fullName,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:image', name: 'og:image', content: image },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
      ],
    }
    const headObjectAsTagString =
      `<title>${headObject.title}</title>` +
      headObject.meta
        .map(
          (m) =>
            `<meta hid="${m.hid}" name="${m.name}" content="${m.content}" />`,
        )
        .join('')
    const newContent = generatedContent
      .replace(/<title>.*<\/title>/g, '')
      .replace('</head>', headObjectAsTagString + '</head>')

    fs.writeFileSync(`./dist/p/${post}/index.html`, newContent, 'utf8')
  })

  console.log('added head content')
}

go()

function slugify(s = []) {
  if (!Array.isArray(s)) s = [s]
  return s.map((e: any) => e.toLowerCase().replace(/[^a-z0-9]/g, `-`)).join(`-`)
}

function extractDataFrom3Lix(s = '') {
  s = s
    .replace(/(”|“)/g, `"`)
    .replace(/<p><([^\s>]+)/g, `<$1`)
    .replace(/<img /g, `<img loading='lazy' `)
    .replace(/<iframe /g, `<iframe loading='lazy' `)

  const data = extractDataAsObject(s)

  const dataStringRegex = /<code data-id="([^"]*)">(.*)<\/code>/g
  const pageContent = s.replace(dataStringRegex, ``) // regular page content sans data strings

  return { ...data, pageContent }
}

function extractDataAsObject(s = '') {
  const data = {}
  const dataStringRegex = /<code data-id=(?:'|")([^"']*)(?:'|")>(.*)?<\/code>/g
  let match
  while ((match = dataStringRegex.exec(s))) {
    const key = slugify(match[1].replace('data', ``).trim())
    let value = match[2]
      .trim()
      .replace(/([^\s]*?)="([^"]*?)"/g, (match, key, value) => {
        return `${slugify(key)}='${value}'`
      })

    try {
      value = JSON.parse(value)
    } catch (e) {
      console.log(e)
    }
    data[key] = value
  }
  return data
}
