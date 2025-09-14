import { useState, useEffect } from "react";
import { getProductos, addProducto } from "../services/api";

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: "", categoria: "", precio: 0, stock: 0 });

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    const res = await getProductos();
    setProductos(res.data);
  };

  const handleAdd = async () => {
    await addProducto(nuevo);
    cargarProductos();
  };

  return (
    <div>
      <h2>Gestión de Productos</h2>
      <input placeholder="Nombre" onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })}/>
      <input placeholder="Categoría" onChange={e => setNuevo({ ...nuevo, categoria: e.target.value })}/>
      <input type="number" placeholder="Precio" onChange={e => setNuevo({ ...nuevo, precio: e.target.value })}/>
      <input type="number" placeholder="Stock" onChange={e => setNuevo({ ...nuevo, stock: e.target.value })}/>
      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre} - {p.categoria} - ${p.precio} - Stock: {p.stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosPage;
