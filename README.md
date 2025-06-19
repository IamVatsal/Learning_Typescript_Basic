# Learning TypeScript

This repository is a personal playground for learning and experimenting with TypeScript.  
It contains various small scripts and examples covering TypeScript basics, advanced features, and practical Node.js usage.

## Features

- TypeScript fundamentals and syntax practice
- Array and object manipulation examples
- CLI tool examples using [Commander.js](https://www.npmjs.com/package/commander)
- File reading and word frequency analysis
- Simple pagination and filtering utilities
- Example of a basic user service with TypeScript interfaces and classes

## Project Structure

```
src/
  1.ts         # String and array manipulation
  3.ts         # UserService interface and class example
  4.ts         # Array filtering utility
  5.ts         # Pagination function
  6.ts         # CLI: word frequency counter with Commander.js
  pizza.ts     # Pizza ordering simulation
dist/          # Compiled JavaScript output (after running `tsc`)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

### Install dependencies

```sh
npm install
```

### Build TypeScript

```sh
npm run build
```

### Run Examples

After building, run any script from the `dist` folder. For example:

```sh
node dist/3.js
```

#### Run the CLI Example

```sh
node dist/6.js -p path/to/textfile.txt --top 10 --ignoreStopwords
```

## Scripts

- `npm run build` — Compile TypeScript to JavaScript (`dist/`)
- `npm run watch` — Watch files and recompile on changes
- `npm run dev` — Run `index.ts` with ts-node-dev (if you add an `index.ts` entry point)

## Notes

- This repo is for learning and experimentation. Code may not follow production best practices.
- Feel free to explore, modify, and break things!

---

**Author:**# Learning TypeScript

This repository is a personal playground for learning and experimenting with TypeScript.  
It contains various small scripts and examples covering TypeScript basics, advanced features, and practical Node.js usage.

## Features

- TypeScript fundamentals and syntax practice
- Array and object manipulation examples
- CLI tool examples using [Commander.js](https://www.npmjs.com/package/commander)
- File reading and word frequency analysis
- Simple pagination and filtering utilities
- Example of a basic user service with TypeScript interfaces and classes

## Project Structure

```
src/
  1.ts         # String and array manipulation
  3.ts         # UserService interface and class example
  4.ts         # Array filtering utility
  5.ts         # Pagination function
  6.ts         # CLI: word frequency counter with Commander.js
  pizza.ts     # Pizza ordering simulation
dist/          # Compiled JavaScript output (after running `tsc`)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

### Install dependencies

```sh
npm install
```

### Build TypeScript

```sh
npm run build
```

### Run Examples

After building, run any script from the `dist` folder. For example:

```sh
node dist/3.js
```

#### Run the CLI Example

```sh
node dist/6.js -p path/to/textfile.txt --top 10 --ignoreStopwords
```

## Scripts

- `npm run build` — Compile TypeScript to JavaScript (`dist/`)
- `npm run watch` — Watch files and recompile on changes
- `npm run dev` — Run `index.ts` with ts-node-dev (if you add an `index.ts` entry point)

## Notes

- This repo is for learning and experimentation. Code may not follow production best practices.
- Feel free to explore, modify, and break things!

---

**Author:** Vatsal