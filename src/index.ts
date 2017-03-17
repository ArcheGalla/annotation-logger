/*
 * original: https://davidwalsh.name/javascript-arguments
 */
function getArgumentNames(func) {
  const args = func.toString().match(/\w.+?\(([^)]*)\)/)[1];
  return args.split(',').map(arg => {
    return arg.replace(/\/\*.*\*\//, '').trim();
  }).filter(arg => arg);
}

/**
 * Wrap function and log about its parameters info.
 *    [loggable] Cat#hello
 *         0: name = Cathy
 *         1: msg = Good Morning
 */
export function loggable(...params): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    return {
      ...descriptor,
      value() {
        const func = descriptor.value;
        const args = arguments;
        console.info(`[loggable] ${target.constructor.name}#${propertyKey}`);
        const argsName = getArgumentNames(func);
        Object.keys(args).forEach(index => {
          console.info(`           ${index}: ${argsName[index]} = ${args[index]}`);
        });
        // calls original function with original arguments
        return func(...arguments);
      },
    };
  };
}
