# annotation-logger

<!-- TOC -->

- [annotation-logger](#annotation-logger)
- [Install](#install)
- [Usage](#usage)

<!-- /TOC -->

# Install

```bash
yarn add annotation-logger
```

or 

```bash
npm install annotation-logger
```

# Usage

```js
import {
  loggable,
} from 'annotation-logger';

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
