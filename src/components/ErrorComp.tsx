import { useProducts } from "../hooks/products"

interface ErrorMessageProps {
    error: string
}
export function ErrorComp({error}: ErrorMessageProps) {
    return (
        <p className="text-center text-red-600">{error}</p>
    )
}