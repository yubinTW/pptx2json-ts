import { describe, expect, it } from 'vitest'
import { parse } from '../src/index'
import path from 'path'
import fs from 'fs'

describe('Basic parsing test', () => {
  it('should be parsed successfully', async () => {
    const filename = path.join(__dirname, 'fixtures/test.pptx')
    const buffer = fs.readFileSync(filename).buffer
    const result = await parse(buffer)
    const slides = result.slides
    expect(slides).toHaveLength(19)
  })
})
