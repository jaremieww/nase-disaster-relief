import { parse, merge, parseEntries } from './directory'

describe('directory.parse()', () => {
  it('parses leaf nodes', () => expect(parse('foo.txt')).toEqual({ name: 'foo.txt' }))

  it('parses single nested files', () => {
    const result = parse('foo/bar.txt')
    expect(result).toEqual({ name: 'foo', entries: [{ name: 'bar.txt' }] })
  })

  it('parses deeply nested files', () => {
    const result = parse('foo/bar/baz/quux.txt')
    expect(result).toEqual({
      name: 'foo',
      entries: [{
        name: 'bar',
        entries: [{
          name: 'baz',
          entries: [{
            name: 'quux.txt'
          }]
        }]
      }]
    })
  })
})

describe('directory.merge', () => {
  it('merges leaf nodes at root level', () => {
    const a = parse('foo.txt')
    const b = parse('bar.txt')

    expect(merge([a, b])).toEqual([a, b])
  })

  it('merges two files in the same directory', () => {
    const a = parse('foo/a.txt')
    const b = parse('foo/b.txt')

    expect(merge([a, b])).toEqual([{
      name: 'foo',
      entries: [
        { name: 'a.txt' },
        { name: 'b.txt' },        
      ]
    }])
  })

  it('merges a complicated scenario', () => {
    const files = [
      'a/b/c/d/e.txt',
      'z/y/x/w.txt',
      'a/b/c/d/f.txt',
      'a/b/z/y.txt',
      'z/y/x/u.txt'
    ]

    expect(parseEntries(files)).toEqual([
      {
        name: 'a',
        entries: [
          { 
            name: 'b',
            entries: [
              {
                name: 'c',
                entries: [
                  {
                    name: 'd',
                    entries: [
                      { name: 'e.txt' },
                      { name: 'f.txt' }
                    ]
                  }
                ]
              },
              {
                name: 'z',
                entries: [
                  { name: 'y.txt' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'z',
        entries: [
          { 
            name: 'y',
            entries: [
              {
                name: 'x',
                entries: [
                  { name: 'w.txt' },
                  { name: 'u.txt' }
                ]
              }
            ]
          }
        ]
      }
    ])
  })
})