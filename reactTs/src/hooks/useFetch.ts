import { useState,useEffect } from "react";

interface FetchState<T>{
  data:T|null;
  loading:boolean;
  error:string|null;
}



export function useFetch<T>(url:string):FetchState<T>{
 const [state,setState]=useState<FetchState<T>>({data:null,loading:true,error:null});

 useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>setState({data,loading:false,error:null}))
  .catch(err=>setState({data:null,loading:false,error:err.message}));
 },[url]);

 return state
}