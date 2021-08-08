# JS Spec Note

A simple code snippet manager for developers built with TypeScript & React.

# Overview

The aim of this project is to make us more efficient by offering a pretty cool tool - a kind of notepad for our code.

# Install

```sh
$ npm install -g js-spec-note
```

Otherwise adding before comands npx

```sh
$ npx js-spec-note serve
```

# Commands

### `serve`

Running server on port `4005` and created `notebook.js` file in current folder.

```sh
$ js-spec-note serve
```

#### `serve [filename]`

Save changes in specified file. By default created `notebook.js` file in current folder.

```sh
$ js-spec-note serve
```

Create `first-note.js` file in notes folder.

```sh
$ js-spec-note serve notes/first-note.js
```

> This command not created a folders, only files.

#### `serve -p, --port <number>`

Running server on a specified port. By default running on port `4005`.

```sh
$ js-spec-note serve
```

Running server on port `3000`.

```sh
$ js-spec-note serve --port 3000
```

### `help`

#### `--help [command]`

Display help for commands. Get help for serve command.

```sh
$ js-spec-note --help serve
```

# Usage

Open in browser http://localhost:4005 (by default) to edit the file.

All changes will be saved in notebook.js file in current folder (by default).

### `show()`

Using `show()` function for the render react element!

```jsx
show(<h1>Hi there!</h1>);
```

# Advanced usage

The project consists of multiple packages. For managing this project using
<a href="https://github.com/lerna/lerna">Lerna</a> tool.

For install dependencies use the next command.

```sh
$ lerna bootstrap
```
