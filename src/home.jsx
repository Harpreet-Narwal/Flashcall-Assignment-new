import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [color, setColor] = useState('');

    let submit = async(e) =>{
        try{
            await axios.post("http://localhost:3000", {color})
        }catch(e){
            console.log(e);
        }
    }
    return (
    <div align="center">
      <div style={{ backgroundColor: color, height: "100vh" }}>
        <input type="text" value={color} onChange={(e) =>{ setColor(e.target.value)}} placeholder="Enter a color"/>
        <button onClick={submit}>Change Color</button>
      </div>
    </div>
  );
}