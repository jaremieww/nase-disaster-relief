import React, {useEffect, useState} from 'react'
import PopoutLink from './components/PopoutLink'
import { Space, Typography } from 'antd'
import { s3Url } from './lib/s3'

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
    <Space direction="vertical">
      {files.map(f => 
        <PopoutLink href={s3Url(`/call-center/${f}`)}>{f.replace(/\.pdf$/, '')}</PopoutLink>
      )}
    </Space>
  </>
}