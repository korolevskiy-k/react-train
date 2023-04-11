import React, {createElement as e, useState} from 'react';
import { Product } from './components/Product';
import { products } from './data/products';
import { iProduct } from './models';

function App() {
  // return (
  //   <h1>Hello React</h1>
  // );
  // return React.createElement('h1', {}, 'Hello From JS');
  
  // Старый синтаксис
//   const [count, setCount] = useState(0)
//   return e('div', {className: 'container'}, 
//   [
//     e('h1', {className: 'font-bold', key: 1}, `${count}`),
//     e('button', { className: 'py-2 px-4 border', 
//                   key: 2, 
//                   onClick: () => setCount(count + 1)
//                 }, 'Click me')
//   ])

  // Новый синтаксис JSX
  return (
  <div className='container mx-auto max-w-2xl pt-5'>
    <Product product={ products[0] } />
    <Product product={ products[1] } />
  </div>
  
  )
}

export default App;
