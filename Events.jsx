import React from "react";
function Time1(){
  const time = new Date().toLocaleTimeString()

  alert(`Current Time: ${time}`);
}
function  AlertClock () {
   return(
   <div><button onClick =  {Time1} >time</button></div>)
}
 
export default AlertClock











