# rest.ground

[![license](https://img.shields.io/github/license/mkkhedawat/rest.ground.svg)](LICENSE)

Insomnia fork that doesn't sync to cloud and let you sleep in peace

![rest.ground API Client](https://raw.githubusercontent.com/mkkhedawat/rest.ground/develop/screenshots/main.png)

## How to use

- Download latest dmg version - https://github.com/mkkhedawat/rest.ground/releases
- Double click, Drag and drop to Applications folder
- Click on Applications > Find rest.ground > Right click > Open > Ignore warning (One time thingy since signing requires Annual fee to Apple)
- Command + Spacebar > rest.ground

## Migration from Insomnia

- export data from Insomnia
- import in rest.ground (one time activity)

## Bugs and Feature Requests

Have a bug or a feature request? First, read the
[issue guidelines](CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/mkkhedawat/rest.ground/issues).


## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md). Included are directions for opening issues, coding standards, and notes on development.

## Develop

Development on Insomnia can be done on Mac, Windows, or Linux as long as you have [Node.js](https://nodejs.org) and [Git](https://git-scm.com/). See the `.nvmrc` file located in the project for the correct Node version.

<details>
<summary>Initial Dev Setup</summary>

This repository is structured as a monorepo and contains many Node.JS packages. Each package has its own set of commands, but the most common commands are available from the root [`package.json`](package.json) and can be accessed using the `npm run …` command. Here are the only three commands you should need to start developing on the app.

```shell
# Install and Link Dependencies
npm i

# Run Lint
npm run lint

# Run type checking
npm run type-check

# Run Tests
npm test

# Start App with Live Reload
npm run dev
```

### Linux

If you are on Linux, you may need to install the following supporting packages:

<details>
<summary>Ubuntu/Debian</summary>

```shell
# Update library
sudo apt-get update

# Install font configuration library & support
sudo apt-get install libfontconfig-dev
```

</details>

<details>
<summary>Fedora</summary>

```shell
# Install libcurl for node-libcurl
sudo dnf install libcurl-devel
```

</details>

Also on Linux, if Electron is failing during the install process, run the following

```shell
# Clear Electron install conflicts
rm -rf ~/.cache/electron
```

### Windows

If you are on Windows and have problems, you may need to install [Windows Build Tools](https://github.com/felixrieseberg/windows-build-tools)

</details>

<details>
<summary>Editor Requirements</summary>

You can use any editor you'd like, but make sure to have support/plugins for the following tools:

- [ESLint](http://eslint.org/) - For catching syntax problems and common errors
- [JSX Syntax](https://facebook.github.io/react/docs/jsx-in-depth.html) - For React components

</details>

## Plugins

Search for, discover, and install plugins from the Insomnia [Plugin Hub](https://insomnia.rest/plugins/)!

## Acknowledgement
This project is fork of https://github.com/Kong/insomnia

## License

[MIT](LICENSE) &copy; [rest.ground](https://github.com/mkkhedawat/rest.ground/releases)
