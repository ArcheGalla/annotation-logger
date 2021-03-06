# annotation-logger

[![npm version](https://badge.fury.io/js/annotation-logger.svg)](https://badge.fury.io/js/annotation-logger) [![CircleCI](https://circleci.com/gh/kenju/annotation-logger.svg?style=svg)](https://circleci.com/gh/kenju/annotation-logger)

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
  debugLog,
} from 'annotation-logger';

class Cat {
  @debugLog(arguments)
  public hello(name, msg) {
    return `${msg}, I am ${name}!`;
  }
  
  @debugLog(arguments)
  public info({ name, age }) {
    return {
      type: 'cat',
      name,
      age,
    };
  }
  
  @timeLog(arguments)
  public walk() {
    console.log('walking...');
    for (let i = 0; i < 100; i++) {
      // do nothing
    }
    console.log('now I feel sleepy...');
  }
}

const cat = new Cat();

cat.hello('Cathy', 'Good Morning')
// [debugLog] Cat#hello(name="Cathy", msg="Good Morning")

cat.info({ name: 'cathy', age: 8 });
// [debugLog] Cat#info(name="cathy", age="8")

cat.walk()
// walking...
// now I feel sleepy...
// [timeLog] Cat#walk(): 0.154ms
```
