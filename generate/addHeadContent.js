const fs = require('fs')
const axios = require('axios')

async function go() {
  const contentDoc = '1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I'
  let data = await axios
    .get(
      `https://us-central1-lix-338122.cloudfunctions.net/refresh/${contentDoc}`,
    )
    .then((res) => {
      if (res.status === 500) return
      return res.data
    })
  if (!data) return

  let { content } = extractDataFrom3Lix(data)

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
                      .trim(),
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
                .split(/<\/div><div class='cell'>/g)?.[0]
                ?.replace(/^<div[^>]*?>/, '')
              const text = content
                .split(/<\/div><div class='cell'>/g)?.[1]
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

    const title =
      /<h1[^>]*?>([^<]*)/g.exec(foundContent?.elements[0]?.text || '')?.[1] ||
      'Home'
    const image =
      /src=(?:'|")([^"']*)/g.exec(
        foundContent?.elements[0]?.image || '',
      )?.[1] || ''
    const url = foundContent
      ? `https://jasperstephenson.com/p/${foundContent.slug}`
      : `https://jasperstephenson.com/`
    const description = foundContent
      ? foundContent.elements[0].text
          .replace(/<h1.*<\/h1>/g, '')
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : 'Digital Tinkerer, Friendly Ghost.'
    const headObject = {
      title: title + ' | ' + 'Jasper Stephenson',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jasper Stephenson',
        },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:image', name: 'og:image', content: image },
        { hid: 'og:url', name: 'og:url', content: url },
      ],
    }
    const headObjectAsTagString =
      `<title>${headObject.title}</title>` +
      headObject.meta
        .map(
          (m) =>
            `<meta hid="${m.hid} name="${m.name}" content="${m.content}" />`,
        )
        .join('')
    const newContent = generatedContent
      .replace(/<title>.*<\/title>/g, '')
      .replace('</head>', headObjectAsTagString + '</head>')

    fs.writeFileSync(`./dist/p/${post}/index.html`, newContent, 'utf8')
  })
}

go()

function slugify(s = []) {
  if (!Array.isArray(s)) s = [s]
  return s.map((e) => e.toLowerCase().replace(/[^a-z0-9]/g, `-`)).join(`-`)
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
      log(e)
    }
    data[key] = value
  }
  return data
}
