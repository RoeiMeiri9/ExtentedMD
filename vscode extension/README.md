# ExtendedMD

**ExtendedMD (EMD)** is a powerful enhancement of the standard Markdown syntax, designed to bridge the gap between static text and dynamic content.

While standard Markdown is great for documentation, it lacks the ability to reuse data or handle logic. **EMD** solves this by introducing a compilation layer that transforms dynamic `.emd` files into clean, ready-to-use `.md` files.

## Required tools

In order to compile a `.emd` file to a `.md` file, you need to install the emd package from npm:

```BASH
$ npm install extendedmd
```

then ran:

```BASH
$ emd --watch path/to/your/file-or-folder
```

For more detailed explanation, visit [the official github page](https://github.com/RoeiMeiri9/extendedmd/tree/master/npm%20package)

## Features

- Write Markdown files with variables
- IntelliSense support

![Intellisense in action](https://raw.githubusercontent.com/RoeiMeiri9/extendedmd/refs/heads/master/vscode%20extension/branding/emd.gif)

## Prettifying

If you want to prettifying a `.emd` file, you need to choose prettier as your default prettifier (you can download it from here: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))

Then just prettify the `.emd` file as usual.

## Release Notes

### 1.0.0

Initial release of ExtendedMD

## License

This project is licensed under the [MIT License](./LICENSE).
