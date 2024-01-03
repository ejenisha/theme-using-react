import { useState } from "react";
import "./Theme.css";
export default function Theme()
{
   let inicolor="dark";
   let bcolor;
   const[bgcolor,setbgcolor]=useState(inicolor);
   function clickhandle(bg)
   {
     if(bg=="light")
        setbgcolor("dark")
     else 
        setbgcolor("light")
   }
   if(bgcolor=="light")
   {
     bcolor="black"
   }
   else 
   {
     bcolor="white"
   }
   return(
    <div style={{backgroundColor:bcolor}}>
      <button onClick={()=>clickhandle(bgcolor)}>{bgcolor}</button>
    </div>
   )
}