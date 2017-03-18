import 'should';
import {
  debugLog,
  timeLog,
} from '../src/index';

describe('annotation-logger', () => {
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

  let cat;
  beforeEach(() => {
    cat = new Cat();
  });

  describe('@debugLog', () => {
    it('should not modify original function and its arguments', () => {
      cat.hello('Cathy', 'Good Morning').should.equal('Good Morning, I am Cathy!');
      cat.info({ name: 'cathy', age: 8 }).should.deepEqual({
        type: 'cat',
        name: 'cathy',
        age: 8,
      });
    });
  });
  
  describe('@timeLog', () => {
    it('should display method consuming times', () => {
      cat.walk();
    });
  });
});
