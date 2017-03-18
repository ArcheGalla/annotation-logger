/*
 * original: https://davidwalsh.name/javascript-arguments
 */
function getArgumentNames(func) {
  const args = func.toString().match(/\w.+?\(([^)]*)\)/)[1];
  return args.split(',').map(arg => {
    return arg.replace(/[{}]/, '').replace(/\/\*.*\*\//, '').trim();
  }).filter(arg => arg);
}

function buildParamsLog(args, argsName) {
  return Object.keys(args).map(index => {
    if (typeof args[index] === 'object') {
      return Object.keys(args[index]).map(key => {
        return `${key}="${args[index][key]}"`;
      }).join(', ');
    } else {
      return `${argsName[index]}="${args[index]}"`;
    }
  }).join(', ');
}

/**
 * Wrap function and log about its parameters info.
 *     [debugLog] Cat#hello(name="Cathy", msg="Good Morning")
 */
export function debugLog(...params): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    return {
      ...descriptor,
      value() {
        const func = descriptor.value;
        const argsName = getArgumentNames(func);
        const args = arguments;
        console.log(`[debugLog] ${target.constructor.name}#${propertyKey}(${buildParamsLog(args, argsName)})`);
        return func(...arguments); // calls original function with original arguments
      },
    };
  };
}

export function timeLog(...params): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    return {
      ...descriptor,
      value() {
        const func = descriptor.value;
        const argsName = getArgumentNames(func);
        const args = arguments;
        const tag = `[timeLog] ${target.constructor.name}#${propertyKey}(${buildParamsLog(args, argsName)})`;
        console.time(tag);
        func(...arguments); // calls original function with original arguments
        console.timeEnd(tag);
      },
    };
  };
}
