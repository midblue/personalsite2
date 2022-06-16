const fillCharacter = `.`

let longest = 0

const reset = `\x1b[0m`,
  dim = `\x1b[2m`,
  bright = `\x1b[1m`

const colors: any = {
  gray: `\x1b[2m`,
  red: `\x1b[31m`,
  green: `\x1b[32m`,
  yellow: `\x1b[33m`,
  blue: `\x1b[34m`,
  pink: `\x1b[35m`,
  cyan: `\x1b[36m`,
  white: `\x1b[37m`,
}

export function log(...args: any[]) {
  const regexResult =
    /(?:[^\n\r]*log\.[jt]s[^\n]*\n)+(?:[^\n]*?massProfiler[^\n]*?\.[jt]s[^\n]*\n)?(?:[^\n]*?embedProfiler[^\n]*?\.[jt]s[^\n]*\n)?([^\n\r]*\/([^/\n\r]+\/[^/\n\r]+\/[^/:\n\r]+))\.[^:\n\r]+:(\d+)/gi.exec(
      `${new Error().stack}`,
    )
  const fullPath: string = regexResult?.[1] || ``
  const lineNumber: string = regexResult?.[3] || ``
  const pathName: string =
    regexResult?.[2]?.replace(/(dist\/|src\/)/gi, ``) || ``

  let mainColor = `white`

  for (let index = 0; index < args.length; index++) {
    const arg = args[index]
    if (typeof arg === `string` && arg in colors) {
      if (index === 0) mainColor = arg

      if (!args[index + 1]) continue
      if (typeof args[index + 1] === `object`) {
        args.splice(index, 1)
      } else {
        args[index + 1] = colors[arg] + `${args[index + 1]}` + reset
        args.splice(index, 1)
      }
    }
  }

  let prefix = String(
    reset +
      dim +
      `${new Date().toLocaleTimeString(undefined, {
        hour12: false,
        hour: `2-digit`,
        minute: `2-digit`,
      })} ` +
      pathName,
    // +
    // `:` +
    // lineNumber,
  )

  if (prefix.length > longest) longest = prefix.length
  while (prefix.length < Math.min(45, Math.max(25, longest)))
    prefix += fillCharacter
  prefix += reset

  console.log(prefix, ...args)
}

export function slugify(s: string | string[] = []) {
  if (!Array.isArray(s)) s = [s]
  return s.map((e) => e.toLowerCase().replace(/[^a-z0-9]/g, `-`)).join(`-`)
}

export function extractDataFrom3Lix(s = '') {
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
  const data: { [key: string]: any } = {}
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
