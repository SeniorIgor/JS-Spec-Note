# JS Spec Note

A simple code snippet manager for developers built with TypeScript & React.

# Overview

The aim of this project is to make us more efficient by offering a pretty cool tool : a kind of notepad for our code.

# Install

```bash
npm install -g js-spec-note
```

```bash
# Otherwise adding before comands npx
npx js-spec-note serve
```

# Commands

### `serve`

`serve [filename]` - Save changes in specified file.

###### This commant not created a folders, only files.

```bash
# By default created notebook.js file in current folder.

js-spec-note serve

# Create file.js file in notes folder.

js-spec-note serve notes/file.js
```

`serve -p, --port <number>` - Running server on a specified port.

```bash
# By default running on port 4005.

js-spec-note serve

# Running server on port 3000.

js-spec-note serve --port 3000
```

### `help`

`--help [command]` - Display help for command.

```bash
# Get help for serve command.

js-spec-note --help serve
```

# Usage

Open in browser http://localhost:4005 (by default) to edit the file.

All changes will be saved in notebook.js file in current folder (by default).

### `show()`

Using `show()` function for the render react element!

```jsx
show(<h1>Hi there!</h1>);
```
