import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { ErrorComp } from './components/ErrorComp';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
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

  const [modal, setModal] = useState(false)
  const {loading, products, error, addProduct} = useProducts()

  const createHandler = (product: iProduct) => {
    setModal(false)
    addProduct(product)
  }
  return (
  <div className='container mx-auto max-w-2xl pt-5'>
    { loading && <Loader /> }
    { error && <ErrorComp error={error} /> }
    { products.map(product => <Product product={product} key={product.id}/>)}
    { modal && <Modal title='Create new product' onClose={() => setModal(false)}>
      <CreateProduct onCreate={createHandler}/>
    </Modal> }
    <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
            onClick={() => setModal(true)}>+</button>
    {/* <Product product={ products[0] } />
    <Product product={ products[1] } /> */}
  </div>
  
  )
}

export default App;
