function getChai(kind:string | number){
  if(typeof kind==='string'){
    return `Making ${kind} chai...`
  }
  return `Chai order: ${kind}`
}

function serveChai(msg?:string){
  if(msg){
    return `Serving ${msg}`
  }
  return `Serving default masala chai`
}

function orderChai(size:"medium"| "large"| "small"| number){

  if(size==="small"){
    return `small cutting chai...`
  }
  if(size==='medium'|| size==="large"){
    return `make extra chai`
  }

  return `chai order #${size}`
}

class KulhadChai{
  serve(){
    return `Serving Kulhad Chai`
  }
}

class Cutting{
  serve(){
    return `Serving Cutting Chai`
  }
}


function serve(chai:KulhadChai| Cutting){
  if(chai instanceof KulhadChai){
    return chai.serve()
  }
  return chai.serve()
}

type ChaiOrder={
  type:string,
  sugar:number
}


function isChaiOrder(obj:any):obj is ChaiOrder{
  return (
    typeof obj==='object' && obj !==null && typeof obj.type==='string' && typeof obj.sugar==='number'
  )

}


function serveOrder(item:ChaiOrder| string){
  if(isChaiOrder(item)){
    return `Serving ${item.type} chai with sugar ${item.sugar}`
  }

  return `Serving custom chai: ${item}`
}

type MasalaChai={
  type:"masala",  //this type is a property and the above type is a keyword
  spiceLevel:number
}

type GingerChai={
  type:"ginger",
  amount:number
}

type ElaichiChai={
  type:"elaichi",
  aroma:number
}


type Chai=MasalaChai | ElaichiChai | GingerChai

function MakeChai(order:Chai){
  switch(order.type){
    case "masala":
      return `Masala Chai`
      break
    case 'elaichi':
      return `Elaichi Chai`
      break
    case 'ginger':
      return `Ginger Chai`
      break
  }
}

function brew(order:MasalaChai| GingerChai){
  if('spiceLevel' in order){  //here we are checking a specific property whether it is present inside the type or not in order to do type narrowing 
    return `Masala Chai`
  }
}


// function isStringArray(arr:unknown):arr is string[]{
  // return (
    
  // )
// }

// unknown which is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.
let val:unknown
let s1:any=val

function fun(val:unknown){
  
}