import axios from "axios";

const url = "https://ecommerceapi-xu9h.onrender.com/api/product";
const local = "http://localhost:4000/api/product/"

export const addProduct = async (product) => {
    try {
        const data = (await axios.post(local, product, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })).data
        return data
    } catch (error) {
        console.error(error)
    }
}
export const getproducts = async () => {
    try {
        const data = (await axios.get(local)).data
        return data
    } catch (error) {
        console.error(error)
    }
}