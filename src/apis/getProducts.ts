import axios from "axios"
import { ICard } from "../types/cart.Type"

export const fetchProduct = async () => {
    try {
        const response = await axios.get<{products : ICard[]}>('https://dummyjson.com/products')
        return response.data.products
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return []
    }
}