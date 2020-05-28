import Axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return Axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "http://localhost:5000",
    })
}