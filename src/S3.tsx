import { ReactNode } from 'react'
import PopoutLink from "./components/PopoutLink"

const S3 = `https://nase-erc-assets.s3.amazonaws.com`

export const formatS3Url = (path: string) => `${S3}/${path}`

type S3LinkProps = { path: string, children: ReactNode }
export const S3Link = ({ path, children }: S3LinkProps) => {
  return <PopoutLink href={formatS3Url(path)}>{children}</PopoutLink>
}