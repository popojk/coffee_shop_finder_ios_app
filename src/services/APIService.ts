import axios, {AxiosResponse} from "axios";

export default class APIService {
    private baseURL: string

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }

    async get<T>(params?: any): Promise<T[]> {
        try {
            let url = this.baseURL
            const config = {
                headers: {
                    Accept: 'application/json'
                }
            }
            if (params) {
                const queryParams = new URLSearchParams(params)
                url += `?${queryParams.toString()}`
                console.log(url)
            }
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Fetch data failed!')
            }
            const data: T[] = await response.json()
            return data
        } catch (error: any) {
            throw error
        }
    }

}