import axios from "axios";
import {domain} from "../constants";

export default class SecondService {
    static async GetSecondList(id) {
        return [
            {
                id: 1,
                name: "item1",
                description: "qqq"
            },
            {
                id: 2,
                name: "item2",
                description: "fff"
            },
            {
                id: 3,
                name: "item3",
                description: "kkkk"
            }
        ]
    }

    static async create(data) {
        const response = await axios.post(`${domain}/second`, data)
        return response.data
    }

    static async list(id) {
        const response = await axios.get(`${domain}/second?id=${id}`)
        return response.data
    }

    static async del(id) {
        const response = await axios.delete(`${domain}/second/${id}`)
        return response.data
    }

    static async patch(fk, id) {
        const response = await axios.patch(`${domain}/second/${id}`, {
            fk: fk
        })
        return response.data
    }

    static async edit(id, data) {
        const response = await axios.patch(`${domain}/second/${id}`, data)
        return response.data
    }
}
