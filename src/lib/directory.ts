export type File = { name: string }
export type Directory = File & { entries: DirectoryEntry[] }
export type DirectoryEntry = File | Directory

export const isDirectory = (entry: DirectoryEntry | undefined): entry is Directory => {
  return entry !== undefined && (entry as Directory).entries !== undefined
}

export const parse = (path: string): DirectoryEntry => {
  const parts = path.split('/')

  return parts
    .reverse()
    .reduce(
      (acc: DirectoryEntry | null, x: string) => acc
        ? ({ name: x, entries: [acc] })
        : ({ name: x }),
      undefined as unknown as DirectoryEntry)
}

export const merge = (entries: DirectoryEntry[]): DirectoryEntry[] => {
  let result: DirectoryEntry[] = []
  entries.forEach(e => {
    const existing = result.find(x => x.name === e.name)
    if (existing && isDirectory(existing) && isDirectory(e)) {
      existing.entries = merge([...existing.entries, ...e.entries])
      return
    } else {
      result.push(e)
    }
  })
  return result
}

export const parseEntries = (files: string[]): DirectoryEntry[] => merge(files.map(parse))