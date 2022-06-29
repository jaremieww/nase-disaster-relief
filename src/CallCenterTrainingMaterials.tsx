import React, {useEffect, useState} from 'react'
import { Typography } from 'antd'
import DirectoryListing from './components/DirectoryListing'

const { Title } = Typography

export default function CallCenterTrainingMaterials() {
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    fetch('/directory.json').then(async resp => {
      var directory = JSON.parse(await resp.text())
      setFiles(directory.find((e: any) => e.name === 'call-center').entries.map((e: any) => e.name as string))
    })
  }, [])
  
  return <>
    <Title level={2}>Call Center Training Materials</Title>
    <DirectoryListing directory='call-center' />
  </>
}