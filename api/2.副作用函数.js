function effect(obj, fn) {
  Object.defineProperty(obj, 'b', {
      set(newValue) {
          fn();
          this._value = newValue;
      },
      get() {
          return this._value;
      }
  });
}

let a = { b: 1 };

effect(a, () => {
  console.log("--");
});

a.b = 2; 