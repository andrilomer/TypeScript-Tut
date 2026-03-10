interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "Masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "ChaiCodeCafe",
};

// s.id=23

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },

  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}
const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

//as we can see both the interfaces got merged and now we have to satisfy both the properties of age as well as name
const u: User = {
  name: "Andril",
  age: 23,
};

interface A {
  a: string;
}

interface B {
  b: string;
}

interface C extends A, B {}
