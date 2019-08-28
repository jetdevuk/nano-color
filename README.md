# Nano-Color

A tiny (63B) chalk replacement for people who aren't afraid to keep an ANSI 3/4 bit color chart at their workstation.

## Usage

There are two functions. 

The first "```col```" injects a string with an ANSI code after the escape sequence.

```js
console.log(col(31) + 'This is red now.')
```

The second "```mix```" takes an ANSI code and a message string, then returns the colored and reset string.

```js
console.log(mix(31, 'This is red and reset now.'))
```

You can also nest ```mix``` statements:

```js
const port = 4052;
console.log(`Server listening @ ${mix(1, mix(33, port))}`)
```