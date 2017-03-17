# simple-logger

<!-- TOC -->

- [simple-logger](#simple-logger)
- [Install](#install)
- [Usage](#usage)

<!-- /TOC -->

# Install

```bash
yarn add simple-logger
```

or 

```bash
npm install simple-logger
```

# Usage

```js
import {
  loggable,
} from 'simple-logger';

class Cat {
  @loggable(arguments)
  public hello(name, msg) {
    return `${msg}, I am ${name}!`;
  }
}

const cat = new Cat();
cat.hello('Cathy', 'Good Morning')
// [loggable] Cat#hello
//         0: name = Cathy
//         1: msg = Good Morning
```
