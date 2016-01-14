# JavaScript Soufflé Style v3.0.0 [![js-souffle-style](https://img.shields.io/badge/code%20style-soufflé-brightgreen.svg)](https://github.com/kt3k/souffle)

> A style checker. based on eslint, similar to [standard](https://github.com/feross/standard), allows more spaces.

# Install

```
npm install --save souffle-cli
```

The above installs `souffle` command.

# Rules

- **4 spaces** for indent (configurable)
- **no semicolons** (configurable)
- **allow padded block**
- Check [feross/standard](https://github.com/feross/standard) for the rest of the rules.

***Any rule can be modified by the option settings in package.json***

You can create a similar command with your .eslintrc using [white-lint](https://github.com/kt3k/white-lint) module.

# Usage

## Package options

The behaviour of the command can be modified by the object at `souffle` key of the package.json.

See the examples below for details.

### `globals`: Array<String>

Set globals variables.

```json
{
    "name": "your-package",
    "souffle": {
        "globals": ["$", "util"]
    }
}
```

The above sets `$` and `util` as global variables.


### `parser`: String

Set the custom parser.

```json
{
    "name": "your-package",
    "souffle": {
        "parser": "babel-eslint"
    }
}
```

The above use babel-eslint as the parser.

### `rules`: Object

Set or overwrite any rules of eslint.

```json
{
    "name": "your-package",
    "souffle": {
        "rules": {
            "operator-linebreak": 0
        }
    }
}
```

The above turns `operator-linebreak` rule off.

### `indent`: Number|'tab'

Set space indent size or tab indent. (default: 4)

```json
{
    "name": "your-package",
    "souffle": {
        "indent": "tab"
    }
}
```

The above sets tab indent.

```json
{
    "name": "your-package",
    "souffle": {
        "indent": 2
    }
}
```

The above sets 2 space indent.

### `semi`: Boolean

Set `true` if you use semicolon at the end of each line.

```json
{
    "name": "your-package",
    "souffle": {
        "semi": true
    }
}
```

The above sets to use semicolons.

## Command line options

Optionally the command behaviour can be modified by the command line options.

```
Usage:
    souffle <flags> [FILES...]

    If FILES is omitted, then all JavaScript source files (*.js, *.jsx) in the current
    working directory are checked, recursively.

    Certain paths (node_modules/, .git/, coverage/, *.min.js, bundle.js) are
    automatically ignored.

Flags:
        --global    Declare global variable (can be set multiple times)
        --parser    Use custom js parser (e.g. babel-eslint)
    -2, --2         Use 2 space indent
    -4, --4         Use 4 space indent
        --tab       Use tab indent
        --semi      Use semicolon
        --no-semi   Don't use semicolon
    -h, --help      Show usage information
    -v, --version   Show current version
```

# Badge

[![js-soufflé-style](https://img.shields.io/badge/code%20style-soufflé-brightgreen.svg)](https://github.com/kt3k/souffle)

```md
[![js-soufflé-style](https://img.shields.io/badge/code%20style-soufflé-brightgreen.svg)](https://github.com/kt3k/souffle)
```


# License

MIT
