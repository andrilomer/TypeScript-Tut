type ChaiOrder = { type: string; sugar: number; strong: boolean };

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

interface Response{
  ok:true|false
}

class myRes implements Response{
  ok: boolean=false
}

// when working with classes use interface and not type it might work with classes but we dont generally use type with classes 

type TeaType="masala"| "ginger" | "lemon"

function orderChai(t:TeaType){
  console.log(t)
}

type BaseChai={teaLeaves:number}
type Extra={masala:number}

type MasalaChai=BaseChai & Extra // this is an intersection

const cup:MasalaChai={
  teaLeaves:2,
  masala:1
}

type User={
  username:string,
  bio?:string
}

const user1:User={
  username:"Andril",
}

const user2:User={
  username:"Hitesh",
  bio:"andril.ai"
}

type Config={
  readonly appName:string
  version:number
}


const cfg:Config={
  appName:"MasterJi",
  version:1
}

// cfg.appName="hbiu"  //cannot reassign because this property is readonly
