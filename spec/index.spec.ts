import 'should';
import {
  debugLog,
} from '../src/index';

describe('Decorator', () => {
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
  }

  let cat;
  beforeEach(() => {
    cat = new Cat();
  });

  describe('@loggable', () => {
    it('should display console.info about method params info');
    it('should not modify original function and its arguments', () => {
      cat.hello('Cathy', 'Good Morning').should.equal('Good Morning, I am Cathy!');
      cat.info({ name: 'cathy', age: 8 }).should.deepEqual({
        type: 'cat',
        name: 'cathy',
        age: 8,
      });
    });
  });
});
