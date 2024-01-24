const { S3Client, ListObjectsCommand } = require('@aws-sdk/client-s3')
const { parseEntries } = require('./src/lib/directory')
const fs = require('fs/promises')
const md5 = require('md5')

const buildDirectory = async () => {
  const client = new S3Client()
  const cmd = new ListObjectsCommand({
    Bucket: 'nase-erc-public-assets'
  })

  const output = await client.send(cmd) as any
  if (output?.Contents) {
    const files = output.Contents.map((x: any) => x.Key) as string[]
    return parseEntries(files)
  }
  throw "something bad happened"
}

buildDirectory().then(async r => {
  const hash = md5(r).slice(0, 8)
  const directoryFile = `directory-${hash}.json`
  fs.writeFile(`public/${directoryFile}`, JSON.stringify(r))
  const config = JSON.parse(await fs.readFile('src/config.json'))
  config.directory = directoryFile
  await fs.writeFile('src/config.json', JSON.stringify(config))
})
