import { describe, expect, it } from 'vitest'
import { extractFileExtension } from '../src/utils'

describe('util function test', () => {
  it('extractFileExtension', () => {
    const png = extractFileExtension('aaa.png')
    const jpg = extractFileExtension('aaa.jpg')
    const jpeg = extractFileExtension('aaa.jpeg')
    const tiff = extractFileExtension('aaa.tiff')
    expect(png).toBe('png')
    expect(jpg).toBe('jpg')
    expect(jpeg).toBe('jpeg')
    expect(tiff).toBe('tiff')
  })
})
