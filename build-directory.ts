const { S3Client, ListObjectsCommand } = require('@aws-sdk/client-s3')
const { parseEntries } = require('./src/lib/directory')
const fs = require('fs/promises')

const buildDirectory = async () => {
  const client = new S3Client()
  const cmd = new ListObjectsCommand({
    Bucket: 'nase-erc-assets'
  })

  const output = await client.send(cmd) as any
  if (output?.Contents) {
    const files = output.Contents.map((x: any) => x.Key) as string[]
    return parseEntries(files)
  }
  throw "something bad happened"
}

buildDirectory().then(r => fs.writeFile(process.argv[2], JSON.stringify(r)))