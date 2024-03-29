import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPhones = () => httpClient.get('/phones');
export const createPhone = data => httpClient.post('/phones', data);
export const getPhoneById = id => httpClient.get(`/phones/${id}`);
export const deletePhoneById = id => httpClient.delete(`/phones/${id}`);
export const updatePhoneById = ({id, data}) =>
  httpClient.patch(`/phones/${id}`, data);

export const getProcessors = () => httpClient.get('/processors');
export const getProcessorById = id => httpClient.get(`/processors/${id}`);
