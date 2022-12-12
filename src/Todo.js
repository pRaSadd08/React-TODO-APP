import React, { useState } from "react";

export default function Todo() {
  let [data, setData] = useState(null);
  let [print, setPrint] = useState(false);

  function getData(e) {
    setData = (e.target.value)
    console.warn(setData)

  }

  return (
    <div>
        {
            print ? <h1>{data}</h1> : null
        }
      <form >
        <br/>
        <br/>
        <input type="text" placeholder="Tassk to do...."  onChange={getData}/>
        </form>
        <br />
        <br />
        <button onClick={()=>setPrint(true)}>Submit</button>
     
    </div>
  );
}
