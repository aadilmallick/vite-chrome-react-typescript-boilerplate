export class DOM {
  static createDomElement(html: string) {
    const dom = new DOMParser().parseFromString(html, "text/html");
    return dom.body.firstElementChild as HTMLElement;
  }
  static $ = (selector: string): HTMLElement | null =>
    document.querySelector(selector);
  static $$ = (selector: string): NodeListOf<HTMLElement> =>
    document.querySelectorAll(selector);

  static selectWithThrow = (selector: string): HTMLElement => {
    const el = DOM.$(selector);
    if (!el) {
      throw new Error(`Element not found: ${selector}`);
    }
    return el;
  };
}

HTMLElement.prototype.$ = function (
  this: HTMLElement,
  selector: string
): HTMLElement | null {
  return this.querySelector(selector);
};

HTMLElement.prototype.$$ = function (
  this: HTMLElement,
  selector: string
): NodeListOf<HTMLElement> {
  return this.querySelectorAll(selector);
};

export function debounce(callback: CallableFunction, delay: number) {
  let timeoutId: ReturnType<Window["setTimeout"]>;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export function createReactiveProxy<T extends Record<string, any>>(
  state: T,
  onSet: (state: T) => void
) {
  const singleProperty = Object.keys(state)[0] as keyof T;
  const proxy = new Proxy(state, {
    set(target, p, newValue, receiver) {
      if (p === singleProperty) {
        target[p as keyof T] = newValue;
        onSet(target);
      }
      return Reflect.set(target, p, newValue, receiver);
    },
  });
  return proxy;
}

const thing = createReactiveProxy({ count: 0 }, (state) => {
  console.log(state.count);
});

export function createReactiveFunction<T extends CallableFunction>(
  func: T,
  onCall: (argsList: any[]) => void
) {
  const proxy = new Proxy(func, {
    apply(targetFunc, thisArg, argArray) {
      onCall(argArray);
      return Reflect.apply(targetFunc, thisArg, argArray);
    },
  });
  return proxy;
}

export class ObservableStore<T extends CallableFunction> {
  private observers: Set<T> = new Set();
  notify(...args: any[]) {
    this.observers.forEach((observer) => observer(...args));
  }
  notifyAndReturn(...args: any[]) {
    const returnValues = Array.from(this.observers).map((observer) =>
      observer(...args)
    );
    return returnValues;
  }
  addObserver(observer: T) {
    this.observers.add(observer);
  }
  removeObserver(observer: T) {
    this.observers.delete(observer);
  }
}
