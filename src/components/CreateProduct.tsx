import React, { useState } from "react"
import { iProduct } from "../models"
import axios from "axios"
import { ErrorComp } from "./ErrorComp"

const productData: iProduct = {
    id: 1,
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: iProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }
        productData.title = value;
        const res = await axios.post<iProduct>('https://fakestoreapi.com/products', productData)
        onCreate(res.data)
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full outline-0" placeholder="Enter product title..." 
                    value={value} 
                    onChange={changeHandler}/>
            {error && <ErrorComp error={error}/>}
            <button type="submit" className="py-2  px-4 border bg-yellow-400">Create</button>
        </form>
    )
}