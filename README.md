# Uint8 To Hex

The fastest function to convert a Uint8Array to hexadecimal.

## Install

```sh
npm install --save uint8-to-hex
```

## Usage

```ts
import toHex from 'uint8-to-hex';

const uint8 = new Uint8Array ( [72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33] );
const hex = toHex ( uint8 ); // => '48656c6c6f2c20776f726c6421'
```

## License

MIT © Fabio Spampinato
