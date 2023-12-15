function msg(msg: string): never {
    throw new Error(msg);
}

function infiniteLoop(): never {
    while (true) {
    }
}

let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns(); // OK, never is a subtype of anything (but never can't be assigned to never)