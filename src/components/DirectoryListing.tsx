import { Tree, TreeDataNode } from 'antd'
import { FilePdfTwoTone, FilePptTwoTone, FileWordTwoTone, FileExcelTwoTone } from '@ant-design/icons'
import PopoutLink from './PopoutLink'
import { useState, useEffect } from 'react'
import { DirectoryEntry, Directory, isDirectory } from '../lib/directory'
import { s3Url } from '../lib/s3'
import { orderBy } from 'lodash'

import { ReactNode } from 'react'

type Props = { directory: string }
type Node = TreeDataNode & { isDirectory: boolean, icon?: ReactNode }

const iconStyle = { fontSize: '100%' }
const icons = {
  'pdf': <FilePdfTwoTone style={iconStyle} />,
  'doc': <FileWordTwoTone style={iconStyle} />,
  'docx': <FileWordTwoTone style={iconStyle} />,
  'ppt': <FilePptTwoTone style={iconStyle} />,
  'pptx': <FilePptTwoTone style={iconStyle} />,
  'xls': <FileExcelTwoTone style={iconStyle} />,
  'xlsx': <FileExcelTwoTone style={iconStyle} />,
}

const getIcon = (file: string) => {
  const ext = file.substring(file.lastIndexOf('.') + 1)
  if (Object.keys(icons).includes(ext)) {
    const result = icons[ext as keyof typeof icons]
    console.log(result)
    return result
  }
}

const trimExtension = (s: string) => s.replace(/\.[a-z]{2,}/i, '')

const parseDirectoryToTreeNodes = (entries: DirectoryEntry[], keyPrefix: string) => {
  const nodes = entries.map((e: DirectoryEntry): Node => {
    var key = `${keyPrefix}/${e.name}`
    if (isDirectory(e)) {
      return {
        title: e.name,
        key: key,
        children: parseDirectoryToTreeNodes(e.entries, key),
        isDirectory: true
      }
    }

    return {
      title: trimExtension(e.name),
      key,
      isDirectory: false,
      icon: getIcon(e.name)
    }
  })

  return orderBy(nodes, ['isDirectory', 'title'], ['desc', 'asc'])
}

export default function DirectoryListing({ directory }: Props) {
  const [files, setFiles] = useState<TreeDataNode[]>([])

  useEffect(() => {
    fetch('/directory.json').then(async resp => {
      const directoryFile = JSON.parse(await resp.text()) as DirectoryEntry[]
      if (directoryFile) {
        const files = (directoryFile.find((e: any) => e.name === directory) as Directory).entries
        setFiles(parseDirectoryToTreeNodes(files, ''))
      }
    })

  }, [directory])

  return <>
  <Tree 
    style={{fontSize: '115%'}}
    treeData={files}
    selectable={false}
    showIcon={true}
    titleRender={node => node.children
      ? node.title
      : <PopoutLink href={s3Url(`/${directory}${node.key}`)}>{node.title}</PopoutLink>
    }
  >
  </Tree>
</>
}