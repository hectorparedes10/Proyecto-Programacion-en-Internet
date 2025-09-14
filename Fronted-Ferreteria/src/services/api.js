import axios from "axios";

const API = "http://localhost:4000/api";

export const getProductos = () => axios.get(`${API}/productos`);
export const addProducto = (producto) => axios.post(`${API}/productos`, producto);

export const getClientes = () => axios.get(`${API}/clientes`);
export const addCliente = (cliente) => axios.post(`${API}/clientes`, cliente);
