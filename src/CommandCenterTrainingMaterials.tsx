import React, { useEffect, useState } from 'react'
import PopoutLink from './components/PopoutLink'
import { Space, Typography, Tree, TreeDataNode } from 'antd'
import { s3Url } from './lib/s3'
import { DirectoryEntry, Directory, isDirectory } from './lib/directory'

const { Title } = Typography

const parseDirectoryToTreeNodes = (entries: DirectoryEntry[], keyPrefix: string) => {
  return entries.map((e: DirectoryEntry): TreeDataNode => {
    var key = `${keyPrefix}/${e.name}`
    if (isDirectory(e)) {
      return {
        title: e.name,
        key: key,
        children: parseDirectoryToTreeNodes(e.entries, key)
      }
    }
    return {
      title: e.name,
      key
    }
  })
}

export default function CallCenterTrainingMaterials() {
  const [files, setFiles] = useState<TreeDataNode[]>([])

  useEffect(() => {
    fetch('/directory.json').then(async resp => {
      var directory = JSON.parse(await resp.text()) as DirectoryEntry[]
      if (directory) {
        const files = (directory.find((e: any) => e.name === 'command-center') as Directory).entries
        setFiles(parseDirectoryToTreeNodes(files, ''))
      }
    })

  }, [])

  const trimExtension = (s: string) => s.replace(/\.[a-z]{2,}/i, '')

  return <>
    <Title level={2}>Command Center Training Materials</Title>
    <Space direction="vertical">
      {/* {files.map(f =>
        <PopoutLink href={s3Url(`/command-center/${f}`)}>{trimExtension(f)}</PopoutLink>
      )} */}
      <Tree 
        treeData={files}
        selectable={false}
        titleRender={node => node.children
          ? node.title
          : <PopoutLink href={s3Url(`/command-center${node.key}`)}>{node.title}</PopoutLink>
        }
      >
      </Tree>
    </Space>
  </>
}