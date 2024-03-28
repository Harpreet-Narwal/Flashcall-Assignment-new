// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [color, setColor] = useState('');
  

//   // const submit = async () => {
//   //   // Make HTTP POST request to backend to store input value in database
//   //   awaaxios.post('/api/saveColor', { color })
//   //     .then(response => {
//   //       console.log('Color saved successfully:', response.data);
//   //       // Change background color only after successful save
//   //       document.body.style.backgroundColor = color;
//   //     })
//   //     .catch(error => {
//   //       console.error('Error saving color:', error);
//   //       // Handle any error actions here if needed
//   //     });
//   // };

//   let submit = async(e) =>{
//     e.preventDefault()
//     try{
//       alert("submitted");
//       await axios.post("http://localhost:8000/", {color});
//     }
//     catch{
//       console.log(e);
//     }
//   }

//   return (
//     <div align="center">
//       <div style={{ backgroundColor: color, height: "100vh" }}>
//         <input type="text" value={color} onChange={(e) =>{ setColor(e.target.value)}} />
//         <button onClick={submit}>Change Color</button>
//       </div>
//     </div>
//   );
// }

// export default App;


import Home  from "./home";

function App(){
  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App;
