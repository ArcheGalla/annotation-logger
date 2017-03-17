import 'should';
import {
  loggable,
} from '../src/index';

describe('Decorator', () => {
  class Cat {
    @loggable(arguments)
    public hello(name, msg) {
      return `${msg}, I am ${name}!`;
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
    });
  });
});
