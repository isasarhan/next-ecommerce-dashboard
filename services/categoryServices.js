import axios from "axios";

const url = "https://ecommerceapi-xu9h.onrender.com/api/category";
const local = "http://localhost:4000/api/category/"

export const addCategory = async (category) => {
    try {
        const data = (await axios.post(local, category, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })).data
        return data
    } catch (error) {
        console.error(error)
    }
}
export const getCategories = async () => {
    try {
        const data = (await axios.get(local)).data
        return data
    } catch (error) {
        console.error(error)
    }
}