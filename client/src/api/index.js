import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPhones = () => httpClient.get('/phones');
export const createPhone = data => httpClient.post('/phones', data);
export const getPhoneById = id => httpClient.get(`/phones/${id}`);

export const getProcessors = () => httpClient.get('/processors');
export const getProcessorById = id => httpClient.get(`/processors/${id}`);
