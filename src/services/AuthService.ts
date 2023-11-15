import { ILoginData } from '../models'

export default class AuthService {
    static async Login(payload: ILoginData): Promise<Response> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            const data = await response.json()
            return data
        } catch (e: any) {
            return e.response
        }
    }
}
