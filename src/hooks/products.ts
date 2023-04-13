import { useEffect, useState } from "react"
import { iProduct } from "../models"
import axios, { AxiosError } from "axios"
import { products } from "../data/products"

export function useProducts() {
  const [products, setProducts] = useState<iProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: iProduct) {
    setProducts(prev => [...prev, product])
  }
  async function fetchProducts() {

    try {
      setError('')
      setLoading(true)
      const response = await axios.get<iProduct[]>('https://fakestoreapi.com/products?limit=10')
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
        setProducts([])
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)        
    }
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])
  return { products, error, loading, addProduct }
  
}


