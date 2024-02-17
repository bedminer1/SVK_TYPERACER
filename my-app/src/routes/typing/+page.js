export const load = async ({ fetch }) => {

    const fetchProducts = async () => {
        const productRes = await fetch('https://dummyjson.com/quotes?limit=100')
        const productData = await productRes.json()
        return productData.quotes
    }

    return {
        quotes: fetchProducts(),
    }
}