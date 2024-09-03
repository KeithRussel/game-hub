import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b72769010bcd450a8a99087e30f9e169'
    }
})

export interface FetchResponse<T> {
    count: number;
    results: T[];
}