# Nano-RGB

A tiny (108B) chalk replacement for simple RGB terminal text.

## Usage

There are two functions. 

The first ```rgb``` injects a string with an ANSI RGB code after the escape sequence, all you need to worry about is the RGB.

```js
console.log(rgb(255,0,0) + 'This is red now.')
```

The second ```mix``` takes an RGB function and a message string, then returns the colored and reset string.

```js
const red = () => rgb(255,0,0)
console.log(mix(red, 'This is red and reset now.'))
```

Finally there is the utility function ```reset``` that always returns the command line to the default color.

```js
console.log(rgb(255,0,0) + 'This is red now.' + reset() + ' And this is reset.')
```

Here's a full example that does some weird color stuff, enjoy.

```js
const { rgb } = require('nano-rgb')
for (let i = 0; i < 25; i++) {
  let out = '';
  for (let y = 0; y < 25; y++) {
    out += rgb(222 - (3 * y), 255 - (10 * i), 0 + (y * i)) + '><'
  }
  console.log(out);
}
```