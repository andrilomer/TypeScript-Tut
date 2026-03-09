const chaiFlavours: string[] = ["Masala", "Adrak"];

const chaiPrice: number[] = [10, 20];

//the value placed inside can be both a custom data type or a normal data type
const rating: Array<number> = [2.3, 5.0];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 20 },
  {name: "Lemon",price: 30},
];


const cities:readonly string[]=['Delhi','Jaipur']

// cities.push('Pune')   we cannot do this 

const table:number[][]=[
  [1,2,3],
  [4,5,6]
]

let chaiTuple:[string,number]
chaiTuple=['Masala',20]
// chaiTuple=[20,'lemon']  format should be followed 

let userInfo:[string,number,boolean?]
userInfo=['andril',23]

const location:readonly [number,number]=[28.66,32.22]

const chaiItems:[name:string,price:number]=['masala',25]

enum CupSize{
  SMALL,
  MEDIUM,
  LARGE
}

const size=CupSize.LARGE

enum Status{
  PENDING=100,
  SERVED,  //this is automatically assigned =>101
  CANCELLED //this is automatically assigned =>102
}

enum ChaiType{
  MASALA='masala',
  GINGER='ginger',

}

function makeChai(type:ChaiType){
  console.log(`Making ${type}`)
}

makeChai(ChaiType.MASALA)
// makeChai('masala') //this would be wrong because only two values are available 


enum RandomEnum{
  ID=1,
  NAME='chai'
}

const enum Sugars{
  LOW=1,
  MEDIUM=2,
  HIGH=3
}

const s=Sugars.LOW

let t:[string,number]=["chai",10]
t.push('extra')  // we can do this because end of the day tuples are end of the day an array 