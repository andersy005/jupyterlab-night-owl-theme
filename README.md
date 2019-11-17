![Github Actions Status](https://github.com/andersy005/night-owl-jupyterlab-theme/workflows/CI/badge.svg)

<div align="center">
<img height="64" width="64" alt="owl" src="https://i.imgur.com/iL6cZ25.png" /></a>
<h1>Night Owl</h1>

> A Jupyterlab theme for the night owls out there!

</div>

Adaption of [@sdras](https://github.com/sdras/)' [Night Owl VS Code theme](https://github.com/sdras/night-owl-vscode-theme) for Jupyterlab®.

## Requirements

- JupyterLab >= 1.0

## Install

```bash
jupyter labextension install @andersy005/night-owl
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to night-owl directory
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall @andersy005/night-owl
```
