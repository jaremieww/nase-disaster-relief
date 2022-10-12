import PopoutLink from "./PopoutLink"
import platform from 'platform'
import React from "react"

export type Props = {
  address: string[],
  addressLink?: string
}

const mapLink = (address: string[]) => platform.os?.family === 'iOS'
  ? `https://maps.apple.com?q=${encodeURIComponent(address.join('\n'))}`
  : `https://maps.google.com?q=${encodeURIComponent(address.join('\n'))}`


export default ({ address, addressLink }: Props) => <p>
  <PopoutLink href={addressLink ?? mapLink(address)}>
    {address.map(line => <React.Fragment key={line}>{line}<br /></React.Fragment>)}
  </PopoutLink>
</p>