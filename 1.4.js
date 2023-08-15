// I did not get this one eithr but this is what i came up with

const targetObject = {};

const proxy = new Proxy(targetObject, {
  get: function (target, property) {
    return "404";
  },
});

console.log(proxy.test);
console.log(proxy.name);
console.log(proxy.age);
