import { ReactNode } from 'react'

export type CommandCenterProps = {
  name: string
  phoneNumber: string
  address: string[]
  email: string
  campingAddress?: string[]
  campingAddressLink?: string
  campingAddressNote?: ReactNode
  registrationLink: string
  closeoutFormLink?: string

  director?: {
    name: string
    phoneNumber: string
  }

  areaOversight: {
    name: string
    phoneNumber: string
  }[]

  assignedStakes: string[]

  additionalInformation?: ReactNode
  afterAssignments?: ReactNode
  sundayServices?: ReactNode
}

