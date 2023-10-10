import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [number,setNumber] = useState(1)
  const [title,setTitle] = useState([])
  const [image,setImage] = useState([])
  const [description,setDescription] = useState([])
  
  async function getStoreData(){
    const response = await axios.get(`https://fakestoreapi.com/products/${number}`);
    // console.log(response)
    setTitle(response.data.title)
    setImage(response.data.image)
    setDescription(response.data.description)
  }
  getStoreData()

  return (
    <>
    <h1>Our Shop</h1>
     <div className="App">

      <select value={number} onChange={(e)=>setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
      </select>

      <h1>Product {number} listed here is : <br /><span>{title}</span></h1>
      <div className='product'>
        <h2>{title}</h2>
        <img src={image} alt="" />        
        <p>{description}</p>
      </div>

      </div>
      </>
    );
    
   
}

export default App;
