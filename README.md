# react-zustand

A lightweight, efficient state management library for React, powered by [Zustand](https://github.com/pmndrs/zustand). This library is designed to simplify state management in React applications by leveraging the power of Zustand, providing a clean and minimal API with excellent performance.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Simple API**: Easily set up and manage global state.
- **Small Bundle Size**: Zustand is a small, lightweight library, which means minimal impact on your app’s bundle size.
- **Reactivity**: State changes trigger re-renders only where necessary.
- **Asynchronous Actions**: Handle async state updates with ease.
- **TypeScript Support**: Built-in TypeScript types for a seamless experience.

## Installation

To install `react-zustand`, use npm or yarn:

```bash
npm install zustand
# or
yarn add zustand
```

## Getting Started
To start using Zustand with React, import create from Zustand and define a store.
```bash
import create from 'zustand';

// Define your store
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
```

## Usage
Once your store is defined, you can use it in any component.
```bash
import React from 'react';
import useStore from './path-to-your-store';

function Counter() {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
```

## API Reference
- create(setupFunction): Creates a Zustand store.
  - setupFunction: A function that defines the initial state and actions for the store.
- set: A function that allows you to update the state.

## Contributing
We welcome contributions! If you want to contribute to react-zustand, please follow these steps:

1. Fork this repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
