import PocketBase from 'pocketbase'



export const actions = {
    create: async ({ request }) => {
        let SECRET_PASSWORD = 'BWseSz8QqbmP7C7'
        let SECRET_EMAIL = 'alexander.seah.min.rui@gmail.com'

        const pb = new PocketBase('https://bedsshop.pockethost.io')
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

        const form = await request.formData()
        const wpm = form.get("wpm") ?? ""
        const quote = form.get("quote") ?? ""

        const newRecord = {
            wpm,
            quote
        }

        const record = await pb.collection('wpmData').create(newRecord)
    }
}

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