import logo from './logo.svg';
import Card from './card/Card.jsx'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [products, setProd] = useState([])
  const getProd = async () => {
    const resp = await axios.get('https://fakestoreapi.com/products?limit=8')
    setProd(resp.data)
  }
  useEffect(()=>{
    getProd()
  }, [])
  return (
    <div>
      {products.map((prod) => (
        <Card 
          title={prod.title}
          image={prod.image}
          price={prod.price}
          count={prod.rating.count}
          description={prod.description}
        />
      ))}
    </div>
  );
}

export default App;
