---
author: Roei Meiri
version: 0.0.1
date: 22/11/2025
---

# ExtendedMD

This is the parser for ExtendedMD.

## How to work with ExtendedMD

Working with ExtendedMD is easy - especially if you install the ExtendedMD for Visual Studio Code.
Just make a new `.emd` file, write your Markdown file as usual, and each time you want to insert a recurring string, write "" and insert your value inside.

All of the values must be written under `variables` in the `Front Matter`, for example:

```YAML
---
variables:
  app-name: "ExtendedMD"
  mark-down: "Markdown"
  file-type: "`.emd`"
  markdown-file-type: "`.md`"
  front-matter: "Front Matter"
  variables: "`variables`"
---
```

To compile the `.emd` file, install the ExtendedMD package using:

```BASH
$ npm install emd
```

> [!Note]
> The compiler will remove the `variables` block, but will keep you with every other metadata that was written there.
> If the Front Matter contains only `variables`, the compiler will remove the Front Matter altogether, leaving you with a clean file.

To run:

```BASH
$ emd --watch path\to\file-or-folder
```

Then, every time you save your `.emd` file, a `.md` file will be generated next to the original `.emd`.

## Features

- Complete `.md` support (this is an extension of classic Markdown after all)
- Use variables in your `.emd` file
- Compile to `.md` super fast

## Benchmarks

More to come, stay tunes :)

| File Size | Time (in ms) |
| --------- | ------------ |
| < 1mb     | ~0 - 4       |
| 14mb      | ~451         |

## History

### Ver 1.0.0

Initial release

## License

This project is licensed under the [MIT License](./LICENSE).
