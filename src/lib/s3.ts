const BUCKET = 'nase-erc-assets'

export const s3Url = (path: string) => `https://${BUCKET}.s3.amazonaws.com${path}`