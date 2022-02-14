import { AxiosResponse } from "axios";
import { AuthResponse } from '../models/response/AuthResponse';
import axios from 'axios';

const AUTH_URL = "http://emphasoft-test-assignment.herokuapp.com/api-token-auth/"

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return axios.post<AuthResponse>(AUTH_URL, {username, password})
    }
}