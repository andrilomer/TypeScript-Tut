function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("masala", 2);

function getChaiPrice(): number {
  return 30;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log(`Chai is ready`);
}

//this is an example of optional parameter
// function orderChai(type?:string){

// }

function orderChai(type: string = "Masala") {}

//standard practice is to place the default parameter at the end as well as if we are using optional parameter it must also be kept at last

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
