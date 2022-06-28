import React from 'react'
import { Typography } from 'antd'
const { Link } = Typography

export type Props = React.PropsWithChildren<{ href: string }>;

export default function PopoutLink({ href, children }: Props) {
  return <Link href={href} target="_blank" rel="noopener">
    {children}
  </Link>
}