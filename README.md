# PPTX2JSON-TS

Fork from [pptx2json](https://github.com/pipipi-pikachu/pptx2json), using TypeScript

## Installation

https://www.npmjs.com/package/pptx2json-ts

```
npm i pptx2json-ts
```

## Usage

```typescript
import { parse } from 'pptx2json-ts'
import fs from 'fs'

const filename = 'test.pptx'
const buffer = fs.readFileSync(filename).buffer
const result = await parse(buffer)
console.log(result)
```

## License

[GPL-3.0](LICENSE)
