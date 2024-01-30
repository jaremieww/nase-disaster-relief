const BUCKET = 'nase-erc-public-assets'

export const s3Url = (path: string) => `https://${BUCKET}.s3.amazonaws.com${path}`
