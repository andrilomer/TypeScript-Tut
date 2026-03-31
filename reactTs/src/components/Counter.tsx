import { useState } from "react"

function Counter(){

  const [count,setCount]=useState<number>(0)


  return(
    <div>
      <p>Cups Ordered:{count}</p>
      <button onClick={()=>setCount((c)=>c+1)}>Order one more</button>
    </div>
  )
}

export default Counter