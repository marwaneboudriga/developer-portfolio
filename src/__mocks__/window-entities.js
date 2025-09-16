 
class Observer {
    observe = jest.fn();
    disconnect = jest.fn();
    unobserve = jest.fn();
  }
  
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
  
  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
  
  Object.defineProperty(window, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });
  
  Object.defineProperty(global, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: Observer,
  });

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
