import { AxiosResponse } from 'axios';
import { User, NewUser } from '../models/User';
import axios from 'axios';

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<User[]>> {
        const token = localStorage.getItem('Token');
        return axios.get<User[]>("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    }
    static async getUser(id: string): Promise<AxiosResponse<NewUser>> {
        const token = localStorage.getItem('Token');
        return axios.get<NewUser>(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/${id}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    }
    static async addUser(user: NewUser): Promise<AxiosResponse<User>> {
        const token = localStorage.getItem('Token');
        return axios.post<User>("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password,
            is_active: user.is_active
        },
        {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    }    
}