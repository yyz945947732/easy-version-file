# easy-version-file

> easy to read/write a VERSION file

## Install

```sh
npm install easy-version-file --save
```

## Usage

```js
import { readVersionFile, writeVersionFile } from "easy-version-file";

console.log(await readVersionFile());
//=> '1.0.0'

await writeVersionFile("1.0.1");

console.log(await readVersionFile());
//=> '1.0.1'
```

## Support

The following filenames will be supported

- VERSION
- VERSION.txt
- VERSION.md
- .VERSION
- VERSION.DEV
- VERSION.PROD
- VERSION.LOCAL
- VERSION.STAGE
- VERSION.TEST

## VSCode

Install [VERSION](https://marketplace.visualstudio.com/items?itemName=yaoyuanzhang.version-highlight) plugin to support `VERSION` file syntax highlight。

## License

[MIT](https://github.com/yyz945947732/easy-version-file/blob/master/LICENSE)
